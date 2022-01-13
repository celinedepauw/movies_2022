export interface Movie{
    id: number,
    title: string,
    genres: Genre[],
    overview: string,
    poster_path: string,
    release_date: string,
    vote_average: number
}

export interface Genre{
    id: number,
    name: string
}