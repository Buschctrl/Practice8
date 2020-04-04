// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// JavaScript
//TODO
import { movies } from './movies'

let featured_movie = document.querySelector('.featured');
for (let m of movies) {
    let movie_tumb = document.getElementById('m' + m.id)
    movie_tumb.innerHTML = `
        < img src = "${m.poster}" >
    `
    movie_tumb.onclick = function () {
        selectMovie(m)
    }
}

function selectMovie(m) {
    featured_movie.innerHTML = `
        < img src = "${m.poster}" style = "float: left;">
        < h1 > ${ m.title}</h1 >
        <p>${m.plot}</p>
    `
}

function searchMovies(event) {
    if (event) {
        event.preventDefault()
    }

    let input = document.querySelector('[type="search"]').value || ""
    for (let m of movies) {
        let movie_tumb = document.getElementById('m' + m.id)
        if (m.title.toUpperCase().indexOf(input.toUpperCase()) == -1) {
            movie_tumb.classList.add('hidden')
        } else {
            movie_tumb.classList.remove('hidden')
        }
    }
}
document.querySelector('button').onclick = searchMovies
document.querySelector('[type="search"]').onseach = searchMovies
document.forms[0].addEventListener('submit', searchMovies, false)
