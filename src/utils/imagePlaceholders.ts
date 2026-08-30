export const STORAGE_BASE_URL = import.meta.env.VITE_STORAGE_BASE_URL

export const NO_PHOTO_IMAGE_URL = `${STORAGE_BASE_URL}/no-photo.webp`
export const NO_CELEBRATED_IMAGE_URL = `${STORAGE_BASE_URL}/no-celebrated.webp`
export const NO_CHILDISH_IMAGE_URL = `${STORAGE_BASE_URL}/no-childish.webp`

export function resolveImageUrl(
  imageKey: string | null | undefined,
  fallback = NO_PHOTO_IMAGE_URL,
) {
  return imageKey && imageKey.trim() ? imageKey.trim() : fallback
}

export function resolveMonumentImageUrl(
  monument:
    | {
        isCelebrated?: boolean | null
        imageKey?: string | null
      }
    | null
    | undefined,
  type: 'gran' | 'infantil' = 'gran',
) {
  if (!monument) {
    return type === 'infantil' ? NO_CHILDISH_IMAGE_URL : NO_PHOTO_IMAGE_URL
  }
  if (!monument.isCelebrated) return NO_CELEBRATED_IMAGE_URL

  return resolveImageUrl(monument.imageKey)
}
