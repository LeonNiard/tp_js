const apiKey = '23947179-781b42b5dc6644377be0aa184'
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
fetch(`https://randomuser.me/api/`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let img = document.createElement('img')
        let url = data.results[0].picture.large
        img.src = url
        document.body.appendChild(img)

    })
    .catch(error => document.body.appendChild = error)
