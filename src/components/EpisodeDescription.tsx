import { Mp3Player } from './Mp3Player'

type EpisodeDescriptionProps = {
  title: string
  audioURL: string
  description: string
}

export const EpisodeDescription = ({ title, audioURL, description }: EpisodeDescriptionProps): JSX.Element => {
  // TODO fix the width of the component
  return (
    <div className='relative p-8 bg-white rounded-lg shadow-lg align-text w-300'>
      <div className='mt-6 bg-white'>
        <h1 className='text-3xl font-bold leading-tight'>{title}</h1>
      </div>

      <div className='mt-6 bg-white'>
        <p className='text-gray-600'>{description}</p>
      </div>

      <hr className='my-6 border-gray-300' />

      <div className='relative p-3 bg-white rounded-lg'>
        <Mp3Player url={audioURL} />
      </div>
    </div>
  )
}
