import { Mp3Player } from './Mp3Player'

type EpisodeDescriptionProps = {
  title: string
  audioURL: string
  description: string
}

export const EpisodeDescription = ({ title, audioURL, description }: EpisodeDescriptionProps): JSX.Element => {
  // TODO fix the width of the component
  return (
    <div className='relative p-8 bg-white rounded-lg shadow-lg align-text w-6/12'>
      <h1 className='mt-3 bg-white text-3xl font-bold leading-tight p-8'>{title}</h1>
      <p className='mt-3 bg-white text-gray-600 p-8'>{description}</p>

      <hr className='my-6 border-gray-300' />

      <div className='relative p-3 bg-white rounded-lg'>
        <Mp3Player url={audioURL} />
      </div>
    </div>
  )
}
