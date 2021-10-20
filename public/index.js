const apiKey = 'ILg7KV2pfoUdVurpPV7HPs8jLy7Mst46'
fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`)
  .then(response => response.json())
  .then(json => {
    json.data
      .map(gif => gif.images.fixed_height.url)
      .forEach(url => {
        let img = document.createElement('img')
        img.src = url
        document.body.appendChild(img)
      })
  })
  .catch(error => document.body.appendChild = error)

