import { SongInfo } from './components/SongInfo'

const App = ():JSX.Element => {

  const listItems = []
  for(let i = 0; i < 8; i++) {
    listItems.push(<SongInfo title='Song title' author='Song author' imageUrl='https://picsum.photos/200/300' />)
  }

  return (
    <div className='App'>
      <h1>Zara challenge</h1>
      <div className='mx-4 mt-8 ml-200 mr-200 mx-80 grid grid-cols-4 gap-4'>
        {listItems}
      </div>
    </div>
  )
}

export default App
