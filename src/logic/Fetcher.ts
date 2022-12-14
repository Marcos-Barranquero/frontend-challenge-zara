import { Episode, Podcast } from '../model/Podcast'

// retreives json from https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json
export const getPodcastListJson = (): Promise<Podcast[]> => {
  return fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
    .then(response => response.json())
    .then(data => {
      return data.feed.entry.map((podcast: any) => {
        return new Podcast(
          podcast['im:name'].label,
          podcast['im:artist'].label,
          podcast.summary.label,
          podcast['im:image'][2].label,
          podcast.id.attributes['im:id'],
          []
        )
      })
    })
}

export const getEpisodesByPodcastId = (podcastId: string): Promise<Episode[]> => {
  return fetch(`https://itunes.apple.com/lookup?id=${podcastId}&entity=podcastEpisode`)
    .then(response => response.json())
    .then(data => {
      console.log('Episode data: ')
      console.log(data)
      return data.results.map((episode: any) => {
        const artisId = episode.artistIds instanceof Array ? episode.artistIds[0] : episode.artistIds

        return new Episode(episode.trackId, artisId, episode.trackName, episode.description, episode.episodeUrl, episode.trackTimeMillis)
      })
    })
}


export const getFullPodcastListJson = (): Promise<Podcast[]> => {
// TODO: handle CORS
  return fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
    .then(response => response.json())
    .then(data => {
      return data.feed.entry.map((podcast: any) => {
        const podcastID = podcast.id.attributes['im:id']

        getEpisodesByPodcastId(podcastID).then((episodes: Episode[]) => {
          return new Podcast(
            podcastID,
            podcast['im:artist'].label,
            podcast['im:name'].label,
            podcast['im:image'][2].label,
            podcast.summary.label,
            episodes
          )
        })
      })
    })
}