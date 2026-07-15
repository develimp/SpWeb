export interface GalleryImage {
  id: number
  src: string
  title: string
}

export interface GalleryAlbum {
  id: string
  category: string
  year: number
  photos: GalleryImage[]
}

export const galleryAlbums: GalleryAlbum[] = [
  {
    id: 'monuments-2024',
    category: 'Monuments',
    year: 2024,
    photos: [
      { id: 1, src: "https://picsum.photos/seed/gal1/800/600", title: "Monument Gran 2024" },
      { id: 5, src: "https://picsum.photos/seed/gal5/800/600", title: "Monument Infantil 2024" }
    ]
  },
  {
    id: 'cargos-2024',
    category: 'Càrrecs',
    year: 2024,
    photos: [
      { id: 2, src: "https://picsum.photos/seed/gal2/800/600", title: "Fallera Major 2024" },
      { id: 6, src: "https://picsum.photos/seed/gal6/800/600", title: "President 2024" }
    ]
  },
  {
    id: 'esdeveniments-2024',
    category: 'Esdeveniments',
    year: 2024,
    photos: [
      { id: 7, src: "https://picsum.photos/seed/gal7/800/600", title: "Paella Popular 2024" },
      { id: 19, src: "https://picsum.photos/seed/gal19/800/600", title: "60è Aniversari" }
    ]
  },
  {
    id: 'monuments-2023',
    category: 'Monuments',
    year: 2023,
    photos: [
      { id: 14, src: "https://picsum.photos/seed/gal14/800/600", title: "Monument Gran 2023" }
    ]
  },
  {
    id: 'cargos-2023',
    category: 'Càrrecs',
    year: 2023,
    photos: [
      { id: 9, src: "https://picsum.photos/seed/gal9/800/600", title: "Fallera Major Infantil 2023" }
    ]
  },
  {
    id: 'esdeveniments-2023',
    category: 'Esdeveniments',
    year: 2023,
    photos: [
      { id: 3, src: "https://picsum.photos/seed/gal3/800/600", title: "Cremà 2023" },
      { id: 4, src: "https://picsum.photos/seed/gal4/800/600", title: "Plantà 2023" },
      { id: 10, src: "https://picsum.photos/seed/gal10/800/600", title: "Ofrena 2023" }
    ]
  },
  {
    id: 'monuments-2022',
    category: 'Monuments',
    year: 2022,
    photos: [
      { id: 8, src: "https://picsum.photos/seed/gal8/800/600", title: "Monument Gran 2022" }
    ]
  },
  {
    id: 'esdeveniments-2022',
    category: 'Esdeveniments',
    year: 2022,
    photos: [
      { id: 15, src: "https://picsum.photos/seed/gal15/800/600", title: "Cavalcada 2022" }
    ]
  },
  {
    id: 'monuments-2019',
    category: 'Monuments',
    year: 2019,
    photos: [
      { id: 20, src: "https://picsum.photos/seed/gal20/800/600", title: "Monument Gran 2019" }
    ]
  },
  {
    id: 'monuments-2018',
    category: 'Monuments',
    year: 2018,
    photos: [
      { id: 17, src: "https://picsum.photos/seed/gal17/800/600", title: "Monument Infantil 2018" }
    ]
  },
  {
    id: 'cargos-2018',
    category: 'Càrrecs',
    year: 2018,
    photos: [
      { id: 21, src: "https://picsum.photos/seed/gal21/800/600", title: "Fallera Major 2018" }
    ]
  },
  {
    id: 'esdeveniments-2021',
    category: 'Esdeveniments',
    year: 2021,
    photos: [
      { id: 18, src: "https://picsum.photos/seed/gal18/800/600", title: "Passacarrer 2021" }
    ]
  },
  {
    id: 'esdeveniments-2020',
    category: 'Esdeveniments',
    year: 2020,
    photos: [
      { id: 23, src: "https://picsum.photos/seed/gal23/800/600", title: "Mà de Plata 2020" }
    ]
  },
  {
    id: 'monuments-2017',
    category: 'Monuments',
    year: 2017,
    photos: [
      { id: 24, src: "https://picsum.photos/seed/gal24/800/600", title: "Monument Gran 2017" }
    ]
  },
  {
    id: 'monuments-2015',
    category: 'Monuments',
    year: 2015,
    photos: [
      { id: 14, src: "https://picsum.photos/seed/gal14/800/600", title: "Monument Gran 2015" }
    ]
  },
  {
    id: 'cargos-2010',
    category: 'Càrrecs',
    year: 2010,
    photos: [
      { id: 13, src: "https://picsum.photos/seed/gal13/800/600", title: "Càrrecs 2010" }
    ]
  },
  {
    id: 'arxiu-2003',
    category: 'Arxiu històric',
    year: 2003,
    photos: [
      { id: 16, src: "https://picsum.photos/seed/gal16/800/600", title: "Local Social 2003" }
    ]
  },
  {
    id: 'arxiu-1985',
    category: 'Arxiu històric',
    year: 1985,
    photos: [
      { id: 11, src: "https://picsum.photos/seed/gal11/800/600", title: "Monument Gran 1985" }
    ]
  },
  {
    id: 'arxiu-1964',
    category: 'Arxiu històric',
    year: 1964,
    photos: [
      { id: 12, src: "https://picsum.photos/seed/gal12/800/600", title: "Fundadors 1964" },
      { id: 22, src: "https://picsum.photos/seed/gal22/800/600", title: "Primer Monument 1964" }
    ]
  }
]
