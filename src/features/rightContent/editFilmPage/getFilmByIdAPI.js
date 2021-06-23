export function getFilmById(id){
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=533c699d20160f1793f6b6802001b0ed`
  )
    .then((response) => response.json())
    .then((data) => {
      const genres = data.genres.map(el=> el.name);
      const countries = data.production_countries.map(el=>el.name)
      const companies = data.production_companies.map(el=>el.name)
      return {
        genres: genres,
        budget: data.budget,
        homepage: data.homepage,
        title: data.title,
        countries: countries,
        releaseDate: data.release_date,
        tagline: data.tagline,
        language: data.original_language,
        companies:companies,
        rating: data.vote_average,
        image:data.poster_path || data.backdrop_path,
        description:data.overview
      }

    })
    .catch((e) => {
      console.log(e);
    });
}