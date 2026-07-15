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
    year: 2024,
    gran: {
      title: "El temps perdut",
      artist: "Pere Garcia Villanueva",
      award: "1er Premio Secció Especial",
      description: "Una reflexió sobre la memòria col·lectiva i el pas del temps.",
      image: "https://picsum.photos/seed/falla2024g/600/400"
    },
    infantil: {
      title: "Colors del món",
      artist: "Maria López Ferrer",
      award: "1er Premio Secció 1a",
      description: "Un viatge pels colors de la diversitat cultural.",
      image: "https://picsum.photos/seed/falla2024i/600/400"
    }
  },
  {
    year: 2023,
    gran: {
      title: "Arrels",
      artist: "Josep Martínez Alós",
      award: "2n Premio Secció Especial",
      description: "Homenatge a les tradicions i les arrels valencianes.",
      image: "https://picsum.photos/seed/falla2023g/600/400"
    },
    infantil: {
      title: "El bosc encantat",
      artist: "Ana Soler Comes",
      award: "1er Premio Secció 1a",
      description: "Una aventura màgica pel bosc dels animals.",
      image: "https://picsum.photos/seed/falla2023i/600/400"
    }
  },
  {
    year: 2022,
    gran: {
      title: "Renaixement",
      artist: "Pere Garcia Villanueva",
      award: "1er Premio Secció Especial",
      description: "El renaixement de la festa després dels anys difícils.",
      image: "https://picsum.photos/seed/falla2022g/600/400"
    },
    infantil: {
      title: "Somnis d'estiu",
      artist: "Carles Vidal Pons",
      award: "3r Premio Secció 1a",
      description: "Els somnis i les il·lusions de la infància en estiu.",
      image: "https://picsum.photos/seed/falla2022i/600/400"
    }
  },
  {
    year: 2021,
    gran: {
      title: "Esperança",
      artist: "Josep Martínez Alós",
      award: "No celebrada",
      description: "Monument previst però no plantat per la pandèmia.",
      image: "https://picsum.photos/seed/falla2021g/600/400"
    },
    infantil: {
      title: "Vent de primavera",
      artist: "Maria López Ferrer",
      award: "No celebrada",
      description: "Monument infantil previst per a 2021.",
      image: "https://picsum.photos/seed/falla2021i/600/400"
    }
  },
  {
    year: 2020,
    gran: {
      title: "Llibertat",
      artist: "Pere Garcia Villanueva",
      award: "2n Premio Secció Especial",
      description: "Un crit per la llibertat i els drets humans.",
      image: "https://picsum.photos/seed/falla2020g/600/400"
    },
    infantil: {
      title: "Aventurers",
      artist: "Ana Soler Comes",
      award: "2n Premio Secció 1a",
      description: "Petits aventurers descobrint el món.",
      image: "https://picsum.photos/seed/falla2020i/600/400"
    }
  },
  {
    year: 2019,
    gran: {
      title: "Memòries",
      artist: "Josep Martínez Alós",
      award: "3r Premio Secció Especial",
      description: "Un viatge per les memòries de la nostra falla.",
      image: "https://picsum.photos/seed/falla2019g/600/400"
    },
    infantil: {
      title: "El jardí secret",
      artist: "Carles Vidal Pons",
      award: "1er Premio Secció 1a",
      description: "Un jardí ple de sorpreses i misteris.",
      image: "https://picsum.photos/seed/falla2019i/600/400"
    }
  },
  {
    year: 2018,
    gran: {
      title: "Identitat",
      artist: "Pere Garcia Villanueva",
      award: "1er Premio Secció Especial",
      description: "La nostra identitat valenciana i fallera.",
      image: "https://picsum.photos/seed/falla2018g/600/400"
    },
    infantil: {
      title: "Somnis de xiquets",
      artist: "Maria López Ferrer",
      award: "2n Premio Secció 1a",
      description: "Els somnis de la canalla del barri.",
      image: "https://picsum.photos/seed/falla2018i/600/400"
    }
  },
  {
    year: 2017,
    gran: {
      title: "Tradició i modernitat",
      artist: "Josep Martínez Alós",
      award: "2n Premio Secció Especial",
      description: "La fusió entre tradició i món modern.",
      image: "https://picsum.photos/seed/falla2017g/600/400"
    },
    infantil: {
      title: "El conte màgic",
      artist: "Ana Soler Comes",
      award: "1er Premio Secció 1a",
      description: "Un conte ple de màgia i fantasia.",
      image: "https://picsum.photos/seed/falla2017i/600/400"
    }
  },
  {
    year: 2016,
    gran: {
      title: "València terra nostra",
      artist: "Pere Garcia Villanueva",
      award: "3r Premio Secció Especial",
      description: "Homenatge a la terra valenciana i els seus productes.",
      image: "https://picsum.photos/seed/falla2016g/600/400"
    },
    infantil: {
      title: "El mar blau",
      artist: "Carles Vidal Pons",
      award: "2n Premio Secció 1a",
      description: "Una aventura pel mar Mediterrani.",
      image: "https://picsum.photos/seed/falla2016i/600/400"
    }
  },
  {
    year: 2015,
    gran: {
      title: "Solidaritat",
      artist: "Josep Martínez Alós",
      award: "1er Premio Secció Especial",
      description: "El valor de la solidaritat i l'ajuda mútua.",
      image: "https://picsum.photos/seed/falla2015g/600/400"
    },
    infantil: {
      title: "Animals del bosc",
      artist: "Maria López Ferrer",
      award: "1er Premio Secció 1a",
      description: "Els animals del bosc i les seues aventures.",
      image: "https://picsum.photos/seed/falla2015i/600/400"
    }
  }
]
