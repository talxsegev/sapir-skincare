/**
 * Resizes and re-compresses an image file for email attachment. Phone camera
 * photos are commonly several MB each; EmailJS (and most transactional email
 * providers) cap total attachment size well below that, so every photo is
 * downscaled and re-encoded as JPEG before being attached to the consultation
 * email.
 */
export async function compressImage(file: File, maxDimension = 1280, quality = 0.7): Promise<File> {
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, maxDimension / Math.max(bitmap.width, bitmap.height));
  const width = Math.round(bitmap.width * scale);
  const height = Math.round(bitmap.height * scale);

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return file;
  ctx.drawImage(bitmap, 0, 0, width, height);

  const blob: Blob | null = await new Promise((resolve) => canvas.toBlob(resolve, "image/jpeg", quality));
  if (!blob) return file;

  const newName = file.name.replace(/\.[^.]+$/, "") + ".jpg";
  return new File([blob], newName, { type: "image/jpeg" });
}
