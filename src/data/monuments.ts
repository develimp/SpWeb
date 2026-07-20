export interface Monument {
  year: number
  gran: {
    title: string
    artist: string
    award: string
    description: string
    image: string
  }
  infantil: {
    title: string
    artist: string
    award: string
    description: string
    image: string
  }
}

export const monuments: Monument[] = [
  {
    year: 2027,
    gran: {
      title: "",
      artist: "Creaciones Devis",
      award: "Secció Primera",
      description: "",
      image: "/no-photo.svg"
    },
    infantil: {
      title: "",
      artist: "Gonzalo Rojas i Mercedes Taibo",
      award: "Secció Especial",
      description: "",
      image: "/no-photo.svg"
    }
  },
  {
    year: 2026,
    gran: {
      title: "Toquem fons ... marí",
      artist: "Palacio i Serra",
      award: "1er Premi Secció Primera",
      description: "",
      image: "/monuments/gran 2026.webp"
    },
    infantil: {
      title: "Terra Viva",
      artist: "Gonzalo Rojas i Mercedes Taibo",
      award: "4rt Premi Secció Especial",
      description: "",
      image: "/monuments/infantil 2026.webp"
    }
  },
  {
    year: 2025,
    gran: {
      title: "Alzira, capital del pecat",
      artist: "Palacio i Serra",
      award: "1er Premi Secció Primera",
      description: "",
      image: "/monuments/gran 2025.webp"
    },
    infantil: {
      title: "Ritmelandia",
      artist: "Gonzalo Rojas i Mercedes Taibo",
      award: "3er Premi Secció Especial",
      description: "",
      image: "/monuments/infantil 2025.webp"
    }
  },
  {
    year: 2024,
    gran: {
      title: "Salem",
      artist: "Germans Parra",
      award: "1er Premi Secció Primera",
      description: "",
      image: "/monuments/gran 2024.webp"
    },
    infantil: {
      title: "Quin és el teu talent?",
      artist: "Gonzalo Rojas",
      award: "3er Premi Secció Especial",
      description: "",
      image: "/monuments/infantil 2024.webp"
    }
  },
  {
    year: 2023,
    gran: {
      title: "Vintage",
      artist: "Germans Parra",
      award: "1er Premi Secció Primera",
      description: "",
      image: "/monuments/gran 2023.webp"
    },
    infantil: {
      title: "Amb tota l'energia",
      artist: "Gonzalo Rojas",
      award: "1er Premi Secció Especial",
      description: "",
      image: "/monuments/infantil 2023.webp"
    }
  },
  {
    year: 2022,
    gran: {
      title: "Les meravelles d'Oz",
      artist: "Germans Parra",
      award: "1er Premi Secció Primera",
      description: "",
      image: "/monuments/gran 2022.webp"
    },
    infantil: {
      title: "Lluminària",
      artist: "Borja Lorente",
      award: "2on Premi Secció Especial",
      description: "",
      image: "/monuments/infantil 2022.webp"
    }
  },
  {
    year: 2021,
    gran: {
      title: "Les meravelles d'Oz",
      artist: "Germans Parra",
      award: "No celebrada",
      description: "Monument previst però no plantat per la pandèmia.",
      image: "/monuments/gran 2022.webp"
    },
    infantil: {
      title: "Lluminària",
      artist: "Borja Lorente",
      award: "No celebrada",
      description: "Monument previst però no plantat per la pandèmia.",
      image: "/monuments/infantil 2022.webp"
    }
  },
  {
    year: 2020,
    gran: {
      title: "Les meravelles d'Oz",
      artist: "Germans Parra",
      award: "No celebrada",
      description: "Monument previst però no plantat per la pandèmia.",
      image: "/monuments/gran 2022.webp"
    },
    infantil: {
      title: "Lluminària",
      artist: "Borja Lorente",
      award: "No celebrada",
      description: "Monument previst però no plantat per la pandèmia.",
      image: "/monuments/infantil 2022.webp"
    }
  },
  {
    year: 2019,
    gran: {
      title: "La ciutat encantada",
      artist: "Salva Banyuls i Néstor Ruiz",
      award: "Secció Primera",
      description: "",
      image: "/monuments/gran 2019.webp"
    },
    infantil: {
      title: "Somia",
      artist: "Borja Lorente Castillo",
      award: "Secció Especial",
      description: "",
      image: "/monuments/infantil 2019.webp"
    }
  },
  {
    year: 2018,
    gran: {
      title: "Simfonia",
      artist: "Àlex Oliver",
      award: "4t Premi Secció Primera",
      description: "",
      image: "/monuments/gran 2018.webp"
    },
    infantil: {
      title: "Imaginarium",
      artist: "Borja Lorente Castillo",
      award: "2n Premi Secció Especial",
      description: "",
      image: "/monuments/infantil 2018.webp"
    }
  },
  {
    year: 2017,
    gran: {
      title: "Yucatán",
      artist: "Germans Parra",
      award: "1er Premi Secció Primera",
      description: "",
      image: "/monuments/gran 2017.webp"
    },
    infantil: {
      title: "Musicalíssim",
      artist: "Carmen Camacho",
      award: "2on Premi Secció Primera",
      description: "",
      image: "/monuments/infantil 2017.webp"
    }
  },
  {
    year: 2016,
    gran: {
      title: "Psicologia fallera",
      artist: "Toni Pérez",
      award: "2on Premi Secció Primera",
      description: "",
      image: "/monuments/gran 2016.webp"
    },
    infantil: {
      title: "El món al revés",
      artist: "Carmen Camacho",
      award: "1er Premi Secció Primera",
      description: "",
      image: "/monuments/infantil 2016.webp"
    }
  },
  {
    year: 2015,
    gran: {
      title: "L'amor, el desamor ...",
      artist: "Toni Pérez",
      award: "3er Premi Secció Primera",
      description: "",
      image: "/monuments/gran 2015.webp"
    },
    infantil: {
      title: "Preparant l'aniversari",
      artist: "José Gallego",
      award: "1er Premi Secció Primera",
      description: "",
      image: "/monuments/infantil 2015.webp"
    }
  }
]
