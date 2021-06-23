import {useDispatch, useSelector} from "react-redux";
import {
  getAllFilmsByGenreAC, getMostPopularFilmsAC,
  loadGenresAC, SelectCurrentPageNumber,
  SelectGenres
} from "../../features/rightContent/genresSlice";
import {useEffect} from "react";

export function GenresComponent() {
  const dispatch = useDispatch()
  const genresArr = useSelector(SelectGenres)
  const pageNumber = useSelector(SelectCurrentPageNumber)

  useEffect(()=>{
    dispatch(loadGenresAC())
    dispatch(getMostPopularFilmsAC(pageNumber))
  },[])

  return (
    <div className="all_genres">
      {
        genresArr.map(obj => {
          return  <span key={obj.id} data-genre-id={obj.id} className='genre_type'
                        onClick={()=>dispatch(getAllFilmsByGenreAC(obj.id,pageNumber))}> {obj.name} </span>
        })
      }
    </div>
  )
}