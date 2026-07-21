export interface GalleryImage {
  id: number
  src: string
  title: string
}

export interface GalleryAlbum {
  id: string
  category: string
  year: number
  description?: string
  photos: GalleryImage[]
}

export const galleryAlbums: GalleryAlbum[] = [
  {
    id: 'actes-2027',
    category: 'Actes',
    description: 'Besamans Verge dels Desamparats 05/07/26',
    year: 2027,
    photos: [
      { id: 1, src: "/galeria/2027/besamans1.webp", title: "" },
      { id: 2, src: "/galeria/2027/besamans2.webp", title: "" },
      { id: 3, src: "/galeria/2027/besamans3.webp", title: "" },
      { id: 4, src: "/galeria/2027/besamans4.webp", title: "" },
      { id: 5, src: "/galeria/2027/besamans5.webp", title: "" },
    ]
  },
  {
    id: 'actes-2027',
    category: 'Actes',
    description: 'Elecció Falleres Majors Alzira 14/06/26',
    year: 2027,
    photos: [
      { id: 1, src: "/galeria/2027/elecciofm.webp", title: "" },
    ]
  },
  {
    id: 'festes-2027',
    category: 'Festes',
    description: 'Sopar de primera 04/06/26',
    year: 2027,
    photos: [
      { id: 1, src: "/galeria/2027/soparprimera1.webp", title: "" },
      { id: 2, src: "/galeria/2027/soparprimera2.webp", title: "" },
      { id: 3, src: "/galeria/2027/soparprimera3.webp", title: "" },
      { id: 4, src: "/galeria/2027/soparprimera4.webp", title: "" },
      { id: 5, src: "/galeria/2027/soparprimera5.webp", title: "" },
      { id: 6, src: "/galeria/2027/soparprimera6.webp", title: "" },
      { id: 7, src: "/galeria/2027/soparprimera7.webp", title: "" },
      { id: 8, src: "/galeria/2027/soparprimera8.webp", title: "" },
    ]
  },
  {
    id: 'actes-2027',
    category: 'Actes',
    description: 'Presentació candidates Falleres Majors Alzira',
    year: 2027,
    photos: [
      { id: 1, src: "/galeria/2027/candidatesfma1.webp", title: "" },
      { id: 2, src: "/galeria/2027/candidatesfma2.webp", title: "" },
      { id: 3, src: "/galeria/2027/candidatesfma3.webp", title: "" },
      { id: 4, src: "/galeria/2027/candidatesfma4.webp", title: "" },
    ]
  },
  {
    id: 'actes-2027',
    category: 'Actes',
    description: 'Reconeixement als artistes fallers 28/05/26',
    year: 2027,
    photos: [
      { id: 1, src: "/galeria/2027/reconeixementartistes1.webp", title: "" },
      { id: 2, src: "/galeria/2027/reconeixementartistes2.webp", title: "" },
    ]
  },
  {
    id: 'actes-2027',
    category: 'Actes',
    description: 'Representants 2027 22/05/26',
    year: 2027,
    photos: [
      { id: 1, src: "/galeria/2027/representants1.webp", title: "" },
      { id: 2, src: "/galeria/2027/representants2.webp", title: "" },
      { id: 3, src: "/galeria/2027/representants3.webp", title: "" },
      { id: 4, src: "/galeria/2027/representants4.webp", title: "" },
      { id: 5, src: "/galeria/2027/representants5.webp", title: "" },
      { id: 6, src: "/galeria/2027/representants6.webp", title: "" },
      { id: 7, src: "/galeria/2027/representants7.webp", title: "" },
      { id: 8, src: "/galeria/2027/representants8.webp", title: "" },
      { id: 9, src: "/galeria/2027/representants9.webp", title: "" },
      { id: 10, src: "/galeria/2027/representants10.webp", title: "" },
      { id: 11, src: "/galeria/2027/representants11.webp", title: "" },
      { id: 12, src: "/galeria/2027/representants12.webp", title: "" },
      { id: 13, src: "/galeria/2027/representants13.webp", title: "" },
      { id: 14, src: "/galeria/2027/representants14.webp", title: "" },
    ]
  },
  {
    id: 'actes-2027',
    category: 'Actes',
    description: 'Ofrena fruits i flors 17/05/26',
    year: 2027,
    photos: [
      { id: 1, src: "/galeria/2027/ofrenafruits1.webp", title: "" },
      { id: 2, src: "/galeria/2027/ofrenafruits2.webp", title: "" },
      { id: 3, src: "/galeria/2027/ofrenafruits3.webp", title: "" },
      { id: 4, src: "/galeria/2027/ofrenafruits4.webp", title: "" },
      { id: 5, src: "/galeria/2027/ofrenafruits5.webp", title: "" },
      { id: 6, src: "/galeria/2027/ofrenafruits6.webp", title: "" },
    ]
  },
  {
    id: 'actes-2027',
    category: 'Actes',
    description: 'Signatura del contracte Gonzalo Rojas i Mercedes Taibo 15/05/26',
    year: 2027,
    photos: [
      { id: 1, src: "/galeria/2027/artistainfantil1.webp", title: "" },
      { id: 2, src: "/galeria/2027/artistainfantil2.webp", title: "" },
      { id: 3, src: "/galeria/2027/artistainfantil3.webp", title: "" },
      { id: 4, src: "/galeria/2027/artistainfantil4.webp", title: "" },
      { id: 5, src: "/galeria/2027/artistainfantil5.webp", title: "" },
    ]
  },
  {
    id: 'actes-2027',
    category: 'Actes',
    description: 'Donació de sang 29/04/26',
    year: 2027,
    photos: [
      { id: 1, src: "/galeria/2027/donaciosang1.webp", title: "" },
      { id: 2, src: "/galeria/2027/donaciosang2.webp", title: "" },
      { id: 3, src: "/galeria/2027/donaciosang3.webp", title: "" },
      { id: 4, src: "/galeria/2027/donaciosang4.webp", title: "" },
      { id: 5, src: "/galeria/2027/donaciosang5.webp", title: "" },
      { id: 6, src: "/galeria/2027/donaciosang6.webp", title: "" },
      { id: 7, src: "/galeria/2027/donaciosang7.webp", title: "" },
      { id: 8, src: "/galeria/2027/donaciosang8.webp", title: "" },
      { id: 9, src: "/galeria/2027/donaciosang9.webp", title: "" },
    ]
  },
  {
    id: 'actes-2027',
    category: 'Actes',
    description: 'Premi promoció us del valencià',
    year: 2027,
    photos: [
      { id: 1, src: "/galeria/2027/premiusvalencia1.webp", title: "" },
      { id: 2, src: "/galeria/2027/premiusvalencia2.webp", title: "" },
    ]
  },
  {
    id: 'monuments-2026',
    category: 'Monuments',
    description: 'Cremà',
    year: 2026,
    photos: [
      { id: 1, src: "/galeria/2026/DSC_0180.webp", title: "" },
      { id: 2, src: "/galeria/2026/DSC_0184.webp", title: "" },
      { id: 3, src: "/galeria/2026/DSC_0186.webp", title: "" },
      { id: 4, src: "/galeria/2026/DSC_0191.webp", title: "" },
    ]
  },
]
