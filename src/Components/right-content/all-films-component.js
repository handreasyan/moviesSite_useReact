export function AllFilmsComponent() {
  const arr = [
    {
      id:1,
      poster_path:'some.img',
      backdrop_path:'some2.img',
      title:'Some Title',
      overview:"some Overview"
    },{
      id:2,
      poster_path:'some.img',
      backdrop_path:'some2.img',
      title:'Some Title',
      overview:"some Overview"
    },{
      id:3,
      poster_path:'some.img',
      backdrop_path:'some2.img',
      title:'Some Title',
      overview:"some Overview"
    },{
      id:4,
      poster_path:'some.img',
      backdrop_path:'some2.img',
      title:'Some Title',
      overview:"some Overview"
    }
  ]
  return (
    <div className="all_films">
      {arr.map(obj=> {
        return(
          <div className='film'>
            <span className='coverSpan' data-movie-id={obj.id}>
              <div className="film_image">
                      <img src={`https://image.tmdb.org/t/p/w500${obj.poster_path || obj.backdrop_path }`} alt="Film"/>
                   </div>
                   <div className="film_name">
                      <h2>${obj.title}</h2>
                   </div>
                   <div className="film_desc">
                      <p>
                        ${obj.overview}
                      </p>
                   </div>
            </span>
          </div>
        )
      })}
    </div>
  )
}
