type Mp3PlayerProps = {
  url: string
}

export const Mp3Player = ({ url }: Mp3PlayerProps): JSX.Element => {
  return (
    <>
      <audio controls className='relative w-full justify-center'>
        <source src={url} type='audio/mpeg' />
        Your browser does not support the audio element.
      </audio>
    </>
  )
}
