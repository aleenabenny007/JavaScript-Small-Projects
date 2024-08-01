'use strict';

const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';
const DEFAULT_IMG = 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

// Get initial movies
getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    if (data.results.length === 0) {
        main.innerHTML = `<p style="color:red">No results found<p>`;
        setTimeout(() => {
            search.blur();
            getMovies(API_URL);
        }, 4000);
        return;
    } else {
        showMovies(data.results);
    }
}

function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie

        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        movieEl.innerHTML = `
            <img src="${(!poster_path) ? DEFAULT_IMG : (IMG_PATH + poster_path)}" alt="${title}">
            <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
          <h3>Overview</h3>  
          ${overview}
        </div>
        `
        main.appendChild(movieEl);
    });

    const moviesEl = document.querySelectorAll('.movie');
    console.log(moviesEl);
    moviesEl.forEach(movie => movie.addEventListener('click', function () {
        const overviewsOpen = document.querySelectorAll('.show-overview');
        overviewsOpen.forEach(m => { if (movie !== m) m.classList.remove(`show-overview`) });
        (movie.classList.toggle('show-overview'));
    }
    ));
}


function getClassByRate(vote) {
    if (vote >= 8) {
        return 'green'
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        search.value = '';
    } else {
        window.location.reload();
    }
})

// movies.forEach(movie => movie.addEventListener('click', movie.classList.toggle('show-overview')));

