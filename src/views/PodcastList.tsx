import useSWR from 'swr'
import { SongInfo } from '../components/SongInfo'
import { getPodcastListJson } from '../logic/Fetcher'
import { Podcast } from '../model/Podcast'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const PodcastList = (): JSX.Element => {
  // refresh interval for a day
  const { data, error } = useSWR('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json', (url: string) => getPodcastListJson(url), {
    refreshInterval: 86400000,
  })

  if (error) return <div>Error: {error.message}</div>
  if (!data) return <div>Cargando...</div>

  const podcasts = data.map((podcast: Podcast) => {
    return <SongInfo title={podcast.title} author={podcast.author} imageUrl={podcast.imageURL} key={podcast.podcastId} />
  })

  return (
    <div className='mx-4 mt-8 ml-200 mr-200 mx-80 grid grid-cols-4 gap-4'>
      {podcasts.map(podcast => (
        <Link to={`/podcasts/${podcast.key}`}>{podcast}</Link>
      ))}
    </div>
  )
}

export default PodcastList
