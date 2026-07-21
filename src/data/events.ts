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
  { id: 1, title: "Assemblea", date: "2026-09-04", time: "23:00", location: "Casal", category: "Assemblea", description: "Primera assemblea després de l'estiu." },
  { id: 2, title: "Mig Any Faller", date: "2026-09-26", time: "", location: "Casal", category: "Festa", description: "Festa Mig Any" },
  { id: 3, title: "Nomenament", date: "2026-10-10", time: "", location: "", category: "Nomenament", description: "Nomenament de les nostres Falleres Majors" },
  { id: 4, title: "Presentació infantil", date: "2027-01-24", time: "", location: "", category: "Presentació", description: "Presentació de nostra Fallera Major Infantil i la seua cort d'honor" },
  { id: 5, title: "Presentació", date: "2027-02-06", time: "", location: "", category: "Presentació", description: "Presentació de nostra Fallera Major i la seua cort d'honor" },
  { id: 6, title: "Presentació d'esbossos", date: "2027-02-10", time: "", location: "", category: "Monument", description: "Presentació d'esbossos dels nostres monuments." },
  { id: 7, title: "Monòleg Capità Paella", date: "2026-11-14", time: "", location: "Casal", category: "Cultura", description: "Monòleg Capità Paella." },
  { id: 8, title: "Monòleg Oscar Tramoyeres", date: "2027-01-30", time: "", location: "Casal", category: "Cultura", description: "Monòleg Oscar Tramoyeres." },
  { id: 9, title: "Plantà", date: "2027-03-16", time: "08:00", location: "Encreuament monument", category: "Monument", description: "Plantà dels monuments gran i infantil." },
  { id: 10, title: "Cremà infantil", date: "2027-03-19", time: "21:00", location: "Encreuament monument", category: "Monument", description: "Cremà del monument infantil." },
  { id: 11, title: "Cremà", date: "2027-03-19", time: "22:00", location: "Encreuament monument", category: "Monument", description: "Cremà del monument gran." },
  { id: 12, title: "Premis", date: "2027-03-17", time: "20:00", location: "Plaça del Carbó", category: "Premi", description: "Acte de lliurament de premis." },
  { id: 13, title: "Ofrena", date: "2027-03-18", time: "20:00", location: "", category: "Festa", description: "Ofrena de flors." },
]
