export class Podcast {
  public readonly title: string
  public readonly author: string
  public readonly description: string
  public readonly imageURL: string
  public readonly podcastId: string

  constructor(title: string, author: string, description: string, imageURL: string, podcastId: string) {
    this.title = title
    this.author = author
    this.description = description
    this.imageURL = imageURL
    this.podcastId = podcastId
  }
}
