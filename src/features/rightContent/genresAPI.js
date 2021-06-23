
export function loadGenres() {
  return  fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=533c699d20160f1793f6b6802001b0ed`)
    .then((response) => response.json())
    .then((data) => {
      const result = data.genres
      return result
    })
    .catch((e) => {
      console.log(e)
    })
}

export function getAllFilmsByGenre(id,pageNumber) {
  return  fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${id}&page=${pageNumber}&api_key=533c699d20160f1793f6b6802001b0ed`)
    .then((response) => response.json())
    .then((data) => {
      const result = data.results
      return result
    })
    .catch((e) => {
      console.log(e)
    })
}

export function getMostPopularFilms(pageNumber) {
  return  fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=${pageNumber}&api_key=533c699d20160f1793f6b6802001b0ed`)
    .then((response) => response.json())
    .then((data) => {
      const result = data.results
      return result
    })
    .catch((e) => {
      console.log(e)
    })
}