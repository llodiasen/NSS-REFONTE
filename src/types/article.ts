export type ArticleType = 'programme' | 'rencontre' | 'foire' | 'actualite'

export type ProgrammeType = 'agroecologie' | 'rencontres' | 'foires'

export interface Article {
  id:         string
  title:      string
  excerpt:    string
  image:      string
  date:       string
  pays?:      string
  type:       ArticleType
  programme?: ProgrammeType
  slug:       string
}
