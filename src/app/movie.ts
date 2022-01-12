export interface Movie{
    id: number,
    title: string,
    genres: Genre[],
    overview: string,
    releaseDate: string,
    average: number
}

export interface Genre{
    id: number,
    name: string
}