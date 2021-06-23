import {FilmForRandom} from "./Film-for-random-content";
import {useDispatch, useSelector} from "react-redux";
import {loadTopFilmsAC, SelectFilms, SelectFilmsContentTitle} from "../../features/leftContent/topFilmsSlice";
import {useEffect} from "react";
import {logDOM} from "@testing-library/react";

export default function RandomFilmsContent() {

  const films = useSelector(SelectFilms)
  const dispatch = useDispatch();

  const title = useSelector(SelectFilmsContentTitle)
  useEffect(()=>{
    dispatch(loadTopFilmsAC())
  },[])

  return (
    <div className="films_random_content">
      <h3>{title}</h3>
      <div className="films_random">
        {
          films.length ? films.map(film=> <FilmForRandom film={film} key={film.id}/>) : "Ths da."
        }
      </div>
    </div>
  )
}