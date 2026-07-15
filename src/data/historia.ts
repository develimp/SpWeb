export interface Decade {
  decade: string
  years: string
  title: string
  description: string
  milestone: string
  image: string
}

export const historia: Decade[] = [
  {
    decade: "1960s",
    years: "1964–1969",
    title: "Els inicis",
    description: "Fundació de la falla l'any 1964 per un grup de veïns entusiastes del barri. Els primers monuments eren modestos però plens d'il·lusió.",
    milestone: "Fundació 1964",
    image: "https://picsum.photos/seed/hist1960/600/350"
  },
  {
    decade: "1970s",
    years: "1970–1979",
    title: "El creixement",
    description: "La falla creix en membres i en ambició. Es consolida la tradició de la paella popular i es comença a competir en seccions superiors.",
    milestone: "1r Premio 1976",
    image: "https://picsum.photos/seed/hist1970/600/350"
  },
  {
    decade: "1980s",
    years: "1980–1989",
    title: "L'edat d'or",
    description: "Dècada de grans monuments i reconeixements. La falla aconsegueix els seus primers premis importants a nivell provincial.",
    milestone: "Secció Especial 1985",
    image: "https://picsum.photos/seed/hist1980/600/350"
  },
  {
    decade: "1990s",
    years: "1990–1999",
    title: "Consolidació",
    description: "Consolidació com una de les falles de referència d'Alzira. Creixement del nucli infantil i juvenil.",
    milestone: "60 socis 1995",
    image: "https://picsum.photos/seed/hist1990/600/350"
  },
  {
    decade: "2000s",
    years: "2000–2009",
    title: "Nova etapa",
    description: "Renovació generacional i nous projectes. La falla aposta per artistes de renom i monuments de gran format.",
    milestone: "Local Social 2003",
    image: "https://picsum.photos/seed/hist2000/600/350"
  },
  {
    decade: "2010s",
    years: "2010–2019",
    title: "Modernització",
    description: "Aposta per la digitalització i les xarxes socials. Els monuments guanyen en complexitat tècnica i missatge social.",
    milestone: "Web oficial 2015",
    image: "https://picsum.photos/seed/hist2010/600/350"
  },
  {
    decade: "2020s",
    years: "2020–2024",
    title: "Resiliència",
    description: "Superació de la pandèmia i tornada amb força. La falla celebra el seu 60è aniversari amb un monument especial.",
    milestone: "60è Aniversari 2024",
    image: "https://picsum.photos/seed/hist2020/600/350"
  }
]
