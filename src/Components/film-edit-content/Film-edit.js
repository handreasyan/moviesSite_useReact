import {DescriptionContentItem} from './description_content_item'
import {useSelector} from "react-redux";
import {
  SelectCurrentFilm
} from "../../features/rightContent/editFilmPage/get-film-by-idSlice";

export function FilmEdit() {
  const filmData = useSelector(SelectCurrentFilm);
  const filmDataArr = Object.keys(filmData).filter(el => !!filmData[el]);

  return (
    <div className='film_edit_right_content'>

      <div className="image_content">
        <img src={`https://image.tmdb.org/t/p/w500${filmData['image']}`} alt="Photo has been deleted"/>
      </div>

      <div className="description_content">
        {filmDataArr.map((el, i) => {
          return <DescriptionContentItem data={el} filmData={filmData} key={el}/>
        })}
      </div>

      <div className="forMovie">
        <div className="overview">
          <p>{filmData['description']}</p>
        </div>
      </div>


    </div>
  )
}
