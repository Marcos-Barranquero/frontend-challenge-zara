import { ExtendedSongInfo } from './components/ExtendedSongInfo'
import { SongInfo } from './components/SongInfo'
import { getEpisodesByPodcastId, getPodcastListJson } from './logic/Fetcher'
import { Episode } from './logic/Podcast'

const App = (): JSX.Element => {
  const listItems = []
  for (let i = 0; i < 8; i++) {
    listItems.push(<SongInfo title='Song title' author='Song author' imageUrl='https://picsum.photos/200/300' key={i} />)
  }

  getPodcastListJson().then(data => {
    console.log(data)
  })

  getEpisodesByPodcastId('1535809341').then((data: Episode[]) => {
    console.log('Episodes: ')
    console.log(data)
  })

  return (
    <div className='App'>
      <h1>Zara challenge</h1>
      <div className='mx-4 mt-8 ml-200 mr-200 mx-80 grid grid-cols-4 gap-4'>{listItems}</div>
      <ExtendedSongInfo title='Song title' author='Song author' imageUrl='https://picsum.photos/200/300' description='Song description' />
    </div>
  )
}

export default App
