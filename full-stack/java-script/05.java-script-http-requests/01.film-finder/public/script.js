const tmdbKey = 'eb7f694611c8bb578e492606920f9f20';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
const playBtn = document.getElementById('playBtn');

const getGenres = async () => {
  const genreRequestEndpoint = '/genre/movie/list';
  const requestParams  = `?api_key=${tmdbKey}`;
  const urlToFetch  = tmdbBaseUrl + genreRequestEndpoint + requestParams;

  try{
    let response = await fetch(urlToFetch);
    if(response.ok){
      let jsonResponse = await response.json();//converts response to json object
      //console.log(jsonResponse);
      const genres = jsonResponse.genres;
      //console.log(genres);
      return genres;
    }

  }
  catch(error){
    console.log(error);
  }
};

const getMovies = async () => {
  const selectedGenre = getSelectedGenre();
  const discoverMovieEndpoint = '/discover/movie';
  const requestParams  = `?api_key=${tmdbKey}&with_genres=${selectedGenre}`;
  const urlToFetch  = tmdbBaseUrl + discoverMovieEndpoint + requestParams;

   try{
    let response = await fetch(urlToFetch);
    if(response.ok){
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      const movies = jsonResponse.results;
      //console.log(movies);
      return movies;
    }
  }
  catch(error){
    console.log(error);
  }
};

//function to fetch the details of a random movie from the list of movies we returned in getMovies()
const getMovieInfo = async (movie) => {
  const movieId = movie.id;
  const movieEndPoint = `/movie/${movieId}`;//'/movie/movie_id';
  const requestParams  = `?api_key=${tmdbKey}`;
  const urlToFetch  = tmdbBaseUrl + movieEndPoint + requestParams;

  try{
    let response = await fetch(urlToFetch);
    if(response.ok){
      let movieInfo = await response.json();
      //console.log(movieInfo);
      return movieInfo;
    }
  }
  catch(error){
    console.log(error);
  }


};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = async () => {
  const movieInfo = document.getElementById('movieInfo');
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  };
  //Get all movies based on genre
  const movies = await getMovies();
  //Select random movie
  const randomMovie = getRandomMovie(movies);
  //Get random movie info
  const info = await getMovieInfo(randomMovie);
  //Display movie
  displayMovie(info);
};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;