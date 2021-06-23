import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getFilmByIdAC} from "../../features/rightContent/editFilmPage/get-film-by-idSlice";

export function FilmForRandom({film}) {
  const dispatch  = useDispatch()
  return (
    <div data-movie-id={film.id} className='film_name'
         onClick={(event)=>{
           dispatch(getFilmByIdAC(film.id))
           console.log(event.currentTarget.dataset.movieId)
         }} >
      <NavLink to={`/film/id=${film.id}`}>
        {film.title}
      </NavLink>
    </div>
  )
}
