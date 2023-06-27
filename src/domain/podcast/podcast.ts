export interface PodcastList {
    author: string
    entry: Entry[]
    updated: string
    rights: string
    title: string
    icon: string
    link: string
    id: string
}


export interface Entry {
    id: string
    img: string
    name: string
    author: string
    summary: string
}

export interface PodcastDetail {
    id: number,
    artwork: string,
    name: string,
    feedUrl: string,
    artistName: string,
    description?: string
}