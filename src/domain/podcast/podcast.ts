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