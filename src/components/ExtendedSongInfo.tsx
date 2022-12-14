type ExtendedSongInfoProps = {
  title: string
  author: string
  imageUrl: string
  description: string
}

export const ExtendedSongInfo = ({ title, author, imageUrl, description }: ExtendedSongInfoProps): JSX.Element => {
  return (
    <div className='relative p-8 bg-white rounded-lg shadow-lg w-80'>
      <div className='relative p-3 bg-white rounded-lg'>
        <img src={imageUrl} alt='Album cover' className='block mx-auto h-32 w-32' />
      </div>

      <hr className='my-6 border-gray-300' />

      <div className='mt-6 bg-white'>
        <h1 className='text-3xl font-bold leading-tight'>{title}</h1>
        <h2 className='text-xl font-semibold leading-tight'>by {author}</h2>
      </div>

      <hr className='my-6 border-gray-300' />

      <div className='mt-6 bg-white'>
        <p className='font-semibold'>Description: </p>
        <p className='text-gray-600'>{description}</p>
      </div>
    </div>
  )
}
