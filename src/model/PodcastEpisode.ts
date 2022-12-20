export class Episode {
  public readonly trackId: string
  public readonly podcastId: string
  public readonly artistId: string
  public readonly title: string
  public readonly description: string
  public readonly audioURL: string
  public readonly duration: string

  constructor(trackId: string, podcastId: string, artistId: string, title: string, description: string, audioURL: string, duration: string) {
    this.trackId = trackId
    this.podcastId = podcastId
    this.artistId = artistId
    this.title = title
    this.description = description
    this.audioURL = audioURL
    this.duration = duration
  }
}
