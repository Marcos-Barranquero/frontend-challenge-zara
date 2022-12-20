import useSWR from 'swr'
import { Podcast } from '../model/Podcast'


const PodcastList = (): JSX.Element => {
  const { data, error } = useSWR('https://api.allorigins.win/raw?url=https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json', (url: string) =>
    fetch(url).then(res => res.json())
  )

  if (error) return <div>Error: {error.message}</div>
  if (!data) return <div>Cargando...</div>

  // Transforma los datos devueltos según tus necesidades
  const podcasts = data.feed.entry.map((podcast: any) => {
    console.log('yoloooooo')
    const podcastID = podcast.id.attributes['im:id']

    return new Podcast(podcastID, podcast['im:artist'].label, podcast['im:name'].label, podcast['im:image'][2].label, podcast.summary.label, [])
  })

  return <div>{JSON.stringify(podcasts)}</div>
}

export default PodcastList
