type Mp3PlayerProps = {
  url: string
}

export const Mp3Player = ({ url }: Mp3PlayerProps): JSX.Element => {
  return (
    <div className='relative p-8 bg-white rounded-lg shadow-lg w-80'>
      <audio controls>
        <source src={url} type='audio/mpeg' />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}
