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

  elNewLi.querySelector(".title").textContent = `Title: ${movie.title}`;
  elNewLi.querySelector(".cast").textContent = `Cast: ${movie.cast}`;
  elNewLi.querySelector(".genres").textContent = `Genres: ${movie.genres}`;
  elNewLi.querySelector(".year").textContent = `Year: ${movie.year}`;
  
  return elNewLi;
}

let rendomMovies = (movies) => {
  let elResultFragment = document.createDocumentFragment();

  movies.forEach ((movie) => {
    elResultFragment.append(createMovieItem(movie));
  })

  elMovieList.append(elResultFragment);
}

rendomMovies(normalizedMovies);

elMovieForm.addEventListener("submit", (evt) => {
  evt.preventDefult();

  let searchMovie = new RegExp(elMovieInput.value.trim(), "gi")

  let searchResult = normalizedMovies.filter((movie) => {
    if (movie.title.match(searchMovie)){
      return movie.title.match(searchMovie);
    }

  })
  rendomMovies(searchResult);
})