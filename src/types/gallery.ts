export interface GalleryPhoto {
  id?: number
  albumFk: number
  imageKey?: string | null
}

export interface GalleryImage {
  id: number
  src: string
  title: string
}

export interface GalleryAlbum {
  id?: number
  category: string
  description?: string | null
  fallaYear: number
  date?: string | null
  photos?: GalleryPhoto[]
}

export interface GalleryAlbumView {
  id: number
  category: string
  description?: string | null
  fallaYear: number
  date?: string | null
  photos: GalleryImage[]
}