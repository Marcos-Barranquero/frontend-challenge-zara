export class Podcast {
  public readonly title: string
  public readonly author: string
  public readonly description: string
  public readonly imageURL: string
  public readonly podcastId: string
  public readonly episodes: Episode[]

  constructor(title: string, author: string, description: string, imageURL: string, podcastId: string, episodes: Episode[]) {
    this.title = title
    this.author = author
    this.description = description
    this.imageURL = imageURL
    this.podcastId = podcastId
    this.episodes = episodes
  }
}

export class Episode {
  public readonly id: string
  public readonly artistId: string
  public readonly title: string
  public readonly description: string
  public readonly audioURL: string
  public readonly duration: string

  constructor(id: string, artistId: string, title: string, description: string, audioURL: string, duration: string) {
    this.id = id
    this.artistId = artistId
    this.title = title
    this.description = description
    this.audioURL = audioURL
    this.duration = duration
  }
}