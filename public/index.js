<<<<<<< Updated upstream

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

// fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
//     .then( response => response.json()
//     )
//     .then(data => {
//         console.log(data)
//         //var objectURL = URL.createObjectURL(myBlob);
//             let img = document.createElement('img')
//             img.src = data.url
//             document.body.appendChild(img)
//     });

// Select element shorthand 
const $ = document.querySelector.bind( document ); 
 
// Generate random number within range in steps of 10 
const range10 = ( min = 20, max = 50 ) => ( ( Math.random() * ( max - min ) | 0 ) + min ) * 10 | 0; 
 
// Show our kitten images here 
const kittensDisplay = 'body'; 
 
// We can get random kitten images from here 
const infiniteKittens = ( width = range10(), height = range10() ) => 'http://placekitten.com/' + width + '/' + height; 
