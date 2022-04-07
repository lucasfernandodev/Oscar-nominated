import Card from './components/Card.js';
const sectionMovies = document.querySelector('.movies');

function renderMovies(movies, reset = false){

  if(reset === true){
    sectionMovies.innerHTML = ''
  }

  movies.map(movie => {
    Card(movie.title, movie.thumb, movie.duration, movie.year)
  })
}

export default renderMovies;