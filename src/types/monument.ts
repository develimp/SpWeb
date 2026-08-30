export interface Monument {
  id: number
  fallaYear: number
  type: 'gran' | 'infantil'
  section: 'única' | 'especial' | 'primera' | 'segona' | null
  awardType: 'premi' | 'accèssit' | null
  award: number | null
  isCelebrated: boolean
  title: string | null
  artist: string | null
  description: string | null
  imageKey: string | null
}

export interface MonumentView {
  year: number
  gran: Monument | null
  infantil: Monument | null
}
