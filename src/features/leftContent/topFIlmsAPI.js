function fetchSend(url){
  return  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const result = data.results
      const newArr = []
      for(let obj of result) {
        newArr.push({
          id:obj.id ,
          title:obj.title
        })
      }
      return  newArr
    })
    .catch((e) => {
      console.log(e)
    })
}

export function loadTopFilms() {
  let topFilmsLoadsPageNumber = 1
  const url  = `https://api.themoviedb.org/3/discover/movie?primary_release_year=${new Date().getFullYear}&page=${topFilmsLoadsPageNumber}&sort_by=vote_average.desc&api_key=533c699d20160f1793f6b6802001b0ed`

  return fetchSend(url)

}

export function updateTopFilmsByDate(date) {
  let {day,month,year} = date

  if(day.length < 2) day = "0" +  day
  if(month.length < 2) month = "0" +  month

  const url  = `https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${year}-${month}-${day}&primary_release_date.lte=${year}-${month}-${day}&api_key=533c699d20160f1793f6b6802001b0ed`

  return fetchSend(url)
}