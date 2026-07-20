export interface CargoMember {
  role: string
  name: string
  image: string
}

export interface YearCargos {
  year: number
  members: CargoMember[]
}

export const cargos: YearCargos[] = [
  {
    year: 2027,
    members: [
      { role: "Fallera Major", name: "Yaiza Martinez Casanova", image: "/càrrecs/fm 2027.webp" },
      { role: "President", name: "Francisco Serrano Rodriguez", image: "/càrrecs/president 2026.webp" },
      { role: "Fallera Major Infantil", name: "Maria Serrano Carrascosa", image: "/càrrecs/fmi 2027.webp" },
      { role: "President Infantil", name: "Marc Mingarro Fortea", image: "/càrrecs/president infantil 2027.webp" },
    ]
  },
  {
    year: 2026,
    members: [
      { role: "Fallera Major", name: "Cristina Villalba Simó", image: "/càrrecs/fm 2026.webp" },
      { role: "President", name: "Francisco Serrano Rodriguez", image: "/càrrecs/president 2026.webp" },
      { role: "Fallera Major Infantil", name: "Aroa Roig Gutiérrez", image: "/càrrecs/fmi 2026.webp" },
      { role: "President Infantil", name: "Pablo Lupia López", image: "/càrrecs/president infantil 2026.webp" },
    ]
  },
  {
    year: 2025,
    members: [
      { role: "Fallera Major", name: "Patricia Cuberos Cabo", image: "/càrrecs/fm 2025.webp" },
      { role: "President", name: "José Blas Palau Hidalgo", image: "/càrrecs/president 2025.webp" },
      { role: "President Infantil", name: "Joel Miralles Hermita", image: "/càrrecs/president infantil 2025.webp" },
    ]
  },
  {
    year: 2024,
    members: [
      { role: "Fallera Major", name: "Mª Eugenia Oliver Moreno", image: "/no-photo.svg" },
      { role: "President", name: "Carlos Martínez Aleixandre", image: "/no-photo.svg" },
      { role: "Fallera Major Infantil", name: "Inés Martí Oliver", image: "/no-photo.svg" },
      { role: "President Infantil", name: "Pau Roig Gutiérrez", image: "/no-photo.svg" },
    ]
  },
]
