fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
  .then(response => response.json())
  .then(data => data.feed.entry)
  .then(data => {
    data.map(item => {
      const id = item.id.attributes['im:id']
      fetch(`https://itunes.apple.com/lookup?id=${id}&entity=podcastEpisode`).then(response => response.json()).then(data => console.log(data))
    })
  })

//  (data => {
//   data.map(item => {
//     const id = item.id.attributes['im:id']
//     console.log(id)
//   })
// })
