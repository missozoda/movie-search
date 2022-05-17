let elMovieForm = $(".movie-form");
let elMovieInput = $(".movie-input", elMovieForm);
let elMovieList = $(".movie-list");
let elTemplateMovie = $("#template").content;

kinolar.splice(100);

let normalizedMovies = kinolar.map((kino, i) => {
  return {
    id: i + 1,
    title: kino.title,
    cast: kino.cast.join(", "),
    genres: kino.genres.join(", "),
    year: kino.year,
  }
})


let createMovieItem = (movie) => {
  elMovieList.innnerHTML = "";

  let elNewLi = elTemplateMovie.cloneNode(true);

  $(".title", elNewLi).textContent = movie.title;
  $(".cast", elNewLi).textContent = movie.cast;
  $(".genres", elNewLi).textContent = movie.genres;
  $(".year", elNewLi).textContent = movie.year;
  
  return elNewLi;
}

let rendomMovies = (movies) => {
  let elResultFragment = document.createDocumentFragment();

  movies.forEach ((movie) => {
    elResultFragment.appendChild(createMovieItem(movie));
  })

  elMovieList.appendChild(elResultFragment);
}

rendomMovies(normalizedMovies);

elMovieForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  evt.target;

  let searchMovie = new RegExp(elMovieInput.value.trim(), "gi");

  let searchResult = normalizedMovies.filter((movie) => {
    if (movie.title.match(searchMovie)){
      return movie.title.match(searchMovie);
    }
  })

  rendomMovies(searchResult);
})