export interface Film {
    key?: string
    name: string,
    image: string,
    boxOffice: string,
    release: string,
    date: number | null,
    description: string,
    isFavorite: boolean
}

export type View = 'grid' | 'list'
