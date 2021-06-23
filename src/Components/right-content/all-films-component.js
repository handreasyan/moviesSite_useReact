import {useDispatch, useSelector} from "react-redux";
import {SelectAllFilmsByGenre} from "../../features/rightContent/genresSlice";
import {useEffect} from "react";
import {NavLink} from "react-router-dom";
import {getFilmByIdAC} from "../../features/rightContent/editFilmPage/get-film-by-idSlice";

export function AllFilmsComponent() {

  const arr = useSelector(SelectAllFilmsByGenre)
 const dispatch =  useDispatch()
  return (
    <div className="all_films">
      {arr.map(obj=> {
        return(
          <div className='film' key={obj.id} onClick={(ev)=>{
            dispatch(getFilmByIdAC(obj.id))
          }}>
            <NavLink className='coverSpan' data-movie-id={obj.id} to={`/film/id=${obj.id}`}>
              <div className="film_image">
                      <img src={`https://image.tmdb.org/t/p/w500${obj.poster_path || obj.backdrop_path }`} alt="Film"/>
                   </div>
                   <div className="film_name">
                      <h2>{obj.title}</h2>
                   </div>
                   <div className="film_desc">
                      <p>
                        {obj.overview}
                      </p>
                   </div>
            </NavLink>
          </div>
        )
      })}
    </div>
  )
}
