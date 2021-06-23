import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getFilmByIdAC} from "../../features/rightContent/editFilmPage/get-film-by-idSlice";

export function FilmForRandom({film}) {
  const dispatch  = useDispatch()
  return (
    <div data-movie-id={film.id} className='film_name'
         onClick={(event)=>{
           dispatch(getFilmByIdAC(film.id))
         }} >
      <NavLink to={`/film/id=${film.id}`} style={{width:'100%',display:'inline-block'}}>
        {film.title}
      </NavLink>
    </div>
  )
}
