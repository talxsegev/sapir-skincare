import { useRef, useState } from "react";

interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface LabelCropModalProps {
  imageUrl: string;
  onConfirm: (croppedImage: HTMLCanvasElement) => void;
  onCancel: () => void;
}

/**
 * A minimal free-form crop UI: the user drags one rectangle over the part of
 * the photo that actually contains the ingredient text. Real-world product
 * photos usually include a lot of background (other bottles, blank box
 * space, a barcode strip) that an OCR engine will otherwise try to read as
 * text too, producing noise -- cropping to just the text block first is the
 * single biggest accuracy lever available without a server-side OCR service.
 */
const LabelCropModal = ({ imageUrl, onConfirm, onCancel }: LabelCropModalProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [dragStart, setDragStart] = useState<{ x: number; y: number } | null>(null);
  const [selection, setSelection] = useState<Rect | null>(null);

  const getRelativePos = (e: React.PointerEvent) => {
    const rect = containerRef.current!.getBoundingClientRect();
    return {
      x: Math.min(Math.max(e.clientX - rect.left, 0), rect.width),
      y: Math.min(Math.max(e.clientY - rect.top, 0), rect.height),
    };
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    (e.target as Element).setPointerCapture(e.pointerId);
    const pos = getRelativePos(e);
    setDragStart(pos);
    setSelection({ x: pos.x, y: pos.y, width: 0, height: 0 });
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!dragStart) return;
    const pos = getRelativePos(e);
    setSelection({
      x: Math.min(dragStart.x, pos.x),
      y: Math.min(dragStart.y, pos.y),
      width: Math.abs(pos.x - dragStart.x),
      height: Math.abs(pos.y - dragStart.y),
    });
  };

  const handlePointerUp = () => setDragStart(null);

  const handleConfirm = () => {
    const img = imgRef.current;
    const container = containerRef.current;
    if (!img || !container) return;

    const containerRect = container.getBoundingClientRect();
    const scaleX = img.naturalWidth / containerRect.width;
    const scaleY = img.naturalHeight / containerRect.height;

    const sel =
      selection && selection.width > 10 && selection.height > 10
        ? selection
        : { x: 0, y: 0, width: containerRect.width, height: containerRect.height };

    const canvas = document.createElement("canvas");
    canvas.width = Math.round(sel.width * scaleX);
    canvas.height = Math.round(sel.height * scaleY);
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.drawImage(
      img,
      sel.x * scaleX,
      sel.y * scaleY,
      sel.width * scaleX,
      sel.height * scaleY,
      0,
      0,
      canvas.width,
      canvas.height
    );

    onConfirm(canvas);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 flex flex-col items-center justify-center gap-4 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Crop your ingredient label photo"
    >
      <p className="text-white text-sm text-center max-w-[420px]">
        Drag a box around just the ingredient list text — cropping out the background greatly improves the
        scan. Skip this and tap "Use This Crop" to scan the whole photo instead.
      </p>
      <div
        ref={containerRef}
        className="relative inline-block max-w-full touch-none select-none"
        style={{ maxHeight: "65vh" }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        <img
          ref={imgRef}
          src={imageUrl}
          alt=""
          draggable={false}
          className="block max-w-full object-contain"
          style={{ maxHeight: "65vh" }}
        />
        {selection && (
          <div
            className="absolute border-2 border-yellow-400 bg-yellow-400/10 pointer-events-none"
            style={{ left: selection.x, top: selection.y, width: selection.width, height: selection.height }}
          />
        )}
      </div>
      <div className="flex gap-3">
        <button
          onClick={onCancel}
          className="px-5 py-2 rounded-full border border-white text-white text-sm cursor-pointer"
        >
          Cancel
        </button>
        <button
          onClick={handleConfirm}
          className="px-5 py-2 rounded-full bg-white text-black text-sm font-semibold cursor-pointer"
        >
          Use This Crop
        </button>
      </div>
    </div>
  );
};

export default LabelCropModal;
