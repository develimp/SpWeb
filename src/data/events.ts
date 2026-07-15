export interface Event {
  id: number
  title: string
  date: string
  time: string
  location: string
  category: string
  description: string
}

export const events: Event[] = [
  { id: 1, title: "Plantà", date: "2025-03-14", time: "00:00", location: "Carrer Major, Alzira", category: "Plantà", description: "Plantada del monument gran i infantil." },
  { id: 2, title: "Cremà", date: "2025-03-19", time: "00:00", location: "Carrer Major, Alzira", category: "Cremà", description: "La nit de la cremà del monument." },
  { id: 3, title: "Premi", date: "2025-03-15", time: "18:00", location: "Alzira", category: "Premi", description: "Acte de lliurament de premis." },
  { id: 4, title: "Assemblea", date: "2025-03-16", time: "14:00", location: "Local Social", category: "Assemblea", description: "Assemblea per a tots els falleros i falleres." },
  { id: 5, title: "Assemblea General", date: "2025-01-18", time: "19:30", location: "Local Social", category: "Festa", description: "Assemblea general de socis." },
  { id: 6, title: "Cavalcada del Ninot", date: "2025-03-01", time: "18:00", location: "Alzira", category: "Cavalcada del Ninot", description: "Desfilada dels ninots indultats." },
  { id: 7, title: "Acte Cultural", date: "2025-03-10", time: "20:00", location: "Casal Faller", category: "Cultura", description: "Presentació del llibre i acte cultural." },
  { id: 8, title: "Exposició del Ninot", date: "2025-02-15", time: "10:00", location: "Mercat Municipal, Alzira", category: "Cultura", description: "Exposició i votació del ninot." },
  { id: 9, title: "Passacarrer", date: "2025-03-17", time: "17:00", location: "Carrer Major, Alzira", category: "Festa", description: "Passacarrer i verbeta pel barri." },
  { id: 10, title: "Ofrena Floral", date: "2025-03-18", time: "10:00", location: "Plaça Major, Alzira", category: "Festa", description: "Ofrena de flors a la Verge dels Desemparats." },
  { id: 11, title: "Pirotècnia", date: "2025-03-19", time: "22:00", location: "Carrer Major, Alzira", category: "Pirotècnia", description: "Espectacle pirotècnic de la nit fallera." },
  { id: 12, title: "Esmorzar Fallero", date: "2025-03-02", time: "10:00", location: "Local Social", category: "Gastronomia", description: "Esmorzar familiar per a tots els socis." },
  { id: 13, title: "Altres Actes", date: "2025-03-20", time: "17:00", location: "Alzira", category: "Altres", description: "Altres actes relacionats amb les festes falleres." }
]
