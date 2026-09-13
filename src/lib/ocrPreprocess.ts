/**
 * Converts a cropped photo to grayscale with a fixed threshold, in place.
 * Product labels are often glossy/curved with uneven lighting; pushing pixels
 * toward pure black/white text-on-white gives Tesseract a much cleaner
 * source image than the raw photo, on top of cropping out the background.
 */
export function preprocessForOcr(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return canvas;

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    const gray = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
    const value = gray > 150 ? 255 : gray < 100 ? 0 : gray;
    data[i] = value;
    data[i + 1] = value;
    data[i + 2] = value;
  }

  ctx.putImageData(imageData, 0, 0);
  return canvas;
}
