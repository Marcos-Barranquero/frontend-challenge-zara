type SongInfoProps = {
  title: string
  author: string
  imageUrl: string
}

export const SongInfo = ({ title, author, imageUrl }: SongInfoProps): JSX.Element => {
  return (
    <div className='relative z-0 p-5 pt-0 text-center'>
      <div className='bg-white w-50 h-50 rounded-lg -z-10 shadow-lg absolute inset-x-0 top-8 bottom-0'></div>
      <img src={imageUrl} alt='Album cover' className='h-20 w-20 rounded-full mx-auto' />
      <h1 className='text-xl font-bold'>{title}</h1>
      <h2 className='text-base font-medium'>{author}</h2>
    </div>
  )
}
