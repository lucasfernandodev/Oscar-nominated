import renderMovies from './renderMovies.js';
import loadingMovies from './loadingMovies.js';
import scrollbar from './scrollbar.js';
import handleSelect from './handleSelect.js';
import sortingList from "./utils/sortingList.js";
import pagination from './utils/pagination.js';

const loader = document.querySelector('.loading');

let allData = []
let pageTotal = 0;
let currentPage = 0;
let observerStart = false;


async function loadAllData() {
  const moviesList = await loadingMovies();

  if (moviesList === null) return;

  currentPage = parseInt(moviesList.currentPage);
  pageTotal = parseInt(moviesList.pageTotal)

  for (let i = 0; i < pageTotal; i++) {
    const moviesList = await loadingMovies(i);
    moviesList.data.map(movie => allData.push(movie))
  }

  allData = sortingList(allData, 'score');

}

function responsiveMasonryLayout(movies, reset = false, isFirstRender = false) {

  observerStart = false;
  const moviesContainer = document.querySelector('.movies');
  const moviesCard = moviesContainer.getElementsByClassName('card');
  const gap = parseInt(getComputedStyle(moviesContainer).getPropertyValue("gap").replace("px",""))


  if (reset === true) {
    renderMovies(movies.data, true)
  } else {
    renderMovies(movies.data)
  }

  let height = 0;
  let nunOfCards = 0;

  nunOfCards =  Array.from(moviesCard).length;
  if(nunOfCards === 0) return;

  Array.from(moviesCard).map(e => height = height + e.getBoundingClientRect().height);
  let gapTotal = parseInt(gap * nunOfCards);
  if((gapTotal / 2) > moviesCard[0].getBoundingClientRect().height ){
    gapTotal = parseInt(gapTotal - moviesCard[0].getBoundingClientRect().height)
  }

  if (isFirstRender) {
      
   
    moviesCard[nunOfCards - 1].querySelector('img').onload = () => {
      observerStart = true
      document.querySelector('.loadingOscar').style.display = 'none'

      moviesContainer.style.height = `${parseInt(height / 2) + gapTotal}px`
      moviesContainer.style.maxHeight = `${parseInt(height / 2) + gapTotal}px`
  
      Array.from(moviesCard).map(e => e.classList.remove('inLoading'));
    }

    return
  }

  moviesContainer.style.height = `${parseInt(height / 2) + gapTotal}px`
  moviesContainer.style.maxHeight = `${parseInt(height / 2) + gapTotal}px`

  
  observerStart = true;
  console.log(height)
}



(async function start() {

  await loadAllData();

  const itens = pagination(allData, currentPage, 10)
  pageTotal = itens.pageTotal
  currentPage = itens.currentPage

  responsiveMasonryLayout(itens, false, true)
})()


handleSelect(optionSelected => {

  currentPage = 0;
  allData = sortingList(allData, optionSelected.dataset.sort)
  const item = pagination(allData, currentPage, 10)
  responsiveMasonryLayout(item, true);
})

scrollbar()


document.addEventListener("DOMContentLoaded", () => {
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.25
  };

  function handleIntersect(entries, observer) {
    entries.forEach(async (entry) => {
      if (entry.isIntersecting) {

        if ((currentPage + 1) < pageTotal && observerStart === true) {
          const moviesList = pagination(allData, (currentPage + 1), 10);
          currentPage = parseInt(moviesList.currentPage);
          pageTotal = parseInt(moviesList.pageTotal)
          responsiveMasonryLayout(moviesList)
        }

      }
    });
  }

  let observer = new IntersectionObserver(handleIntersect,
    options);
  observer.observe(loader);
})


