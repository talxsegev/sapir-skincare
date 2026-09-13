import { useRef } from "react";
import type { QuestionDef } from "./surveyData";
import { compressImage } from "../../lib/imageCompress";

interface QuestionProps {
  question: QuestionDef;
  value: unknown;
  otherText: string;
  onChange: (id: string, value: unknown) => void;
  onOtherTextChange: (id: string, text: string) => void;
}

const inputClass = "w-full border border-black/30 rounded-md p-2 focus:border-black outline-none transition-colors";

const Question = ({ question, value, otherText, onChange, onOtherTextChange }: QuestionProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handlePhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    if (files.length === 0) return;

    const compressed = await Promise.all(files.map((f) => compressImage(f)));
    const dt = new DataTransfer();
    compressed.forEach((f) => dt.items.add(f));
    if (fileInputRef.current) fileInputRef.current.files = dt.files;
    onChange(question.id, compressed.map((f) => f.name));
  };

  switch (question.type) {
    case "text":
    case "tel":
    case "email":
    case "number":
      return (
        <div className="flex flex-col gap-2">
          <label htmlFor={question.id} className="font-medium">
            {question.label} {question.optional && <span className="font-normal opacity-60 text-sm">(optional)</span>}
          </label>
          <input
            id={question.id}
            name={question.id}
            type={question.type}
            required={!question.optional}
            placeholder={question.placeholder}
            className={inputClass}
            value={(value as string) ?? ""}
            onChange={(e) => onChange(question.id, e.target.value)}
          />
        </div>
      );

    case "textarea":
      return (
        <div className="flex flex-col gap-2">
          <label htmlFor={question.id} className="font-medium">
            {question.label} {question.optional && <span className="font-normal opacity-60 text-sm">(optional)</span>}
          </label>
          <textarea
            id={question.id}
            name={question.id}
            required={!question.optional}
            className={`${inputClass} h-24`}
            value={(value as string) ?? ""}
            onChange={(e) => onChange(question.id, e.target.value)}
          />
        </div>
      );

    case "single":
      return (
        <fieldset className="flex flex-col gap-2">
          <legend className="font-medium mb-1">{question.label}</legend>
          <div className="flex flex-col gap-2">
            {question.options?.map((opt) => (
              <label key={opt} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name={question.id}
                  value={opt}
                  checked={value === opt}
                  onChange={() => onChange(question.id, opt)}
                  required={!question.optional}
                />
                {opt}
              </label>
            ))}
          </div>
        </fieldset>
      );

    case "scale": {
      const min = question.scaleMin ?? 1;
      const max = question.scaleMax ?? 10;
      const numbers = Array.from({ length: max - min + 1 }, (_, i) => min + i);
      return (
        <fieldset className="flex flex-col gap-2">
          <legend className="font-medium mb-1">{question.label}</legend>
          <div className="flex flex-wrap gap-2">
            {numbers.map((n) => (
              <label key={n}>
                <input
                  type="radio"
                  name={question.id}
                  value={n}
                  checked={value === n}
                  onChange={() => onChange(question.id, n)}
                  className="sr-only peer"
                />
                <span className="flex items-center justify-center w-9 h-9 rounded-full border border-black/30 cursor-pointer peer-checked:bg-black peer-checked:text-white transition-colors">
                  {n}
                </span>
              </label>
            ))}
          </div>
        </fieldset>
      );
    }

    case "multi": {
      const selected = (value as string[]) ?? [];
      const atMax = !!question.maxSelect && selected.length >= question.maxSelect;
      const toggle = (opt: string) => {
        if (selected.includes(opt)) {
          onChange(question.id, selected.filter((s) => s !== opt));
        } else if (!atMax) {
          onChange(question.id, [...selected, opt]);
        }
      };
      const joined = [...selected, ...(otherText.trim() ? [`Other: ${otherText.trim()}`] : [])].join(", ");
      return (
        <fieldset className="flex flex-col gap-2">
          <legend className="font-medium mb-1">
            {question.label}
            {question.maxSelect && <span className="font-normal opacity-60 text-sm"> (up to {question.maxSelect})</span>}
          </legend>
          <input type="hidden" name={question.id} value={joined} />
          <div className="flex flex-col gap-2">
            {question.options?.map((opt) => {
              const checked = selected.includes(opt);
              const disabled = !checked && atMax;
              return (
                <label key={opt} className={`flex items-center gap-2 ${disabled ? "opacity-40" : "cursor-pointer"}`}>
                  <input type="checkbox" checked={checked} disabled={disabled} onChange={() => toggle(opt)} />
                  {opt}
                </label>
              );
            })}
            {question.otherOption && (
              <label className="flex items-center gap-2">
                Other:
                <input
                  type="text"
                  className="border-b border-black/30 outline-none px-1 flex-1"
                  value={otherText}
                  onChange={(e) => onOtherTextChange(question.id, e.target.value)}
                />
              </label>
            )}
          </div>
        </fieldset>
      );
    }

    case "photo":
      return (
        <div className="flex flex-col gap-2">
          <label htmlFor={question.id} className="font-medium">
            {question.label} {question.optional && <span className="font-normal opacity-60 text-sm">(optional)</span>}
          </label>
          <input
            ref={fileInputRef}
            id={question.id}
            name={question.id}
            type="file"
            accept="image/*"
            multiple={(question.maxPhotos ?? 1) > 1}
            required={!question.optional}
            className={inputClass}
            onChange={handlePhotoChange}
          />
          {Array.isArray(value) && value.length > 0 && (
            <p className="text-xs text-green-700">Attached: {(value as string[]).join(", ")}</p>
          )}
        </div>
      );

    default:
      return null;
  }
};

export default Question;
