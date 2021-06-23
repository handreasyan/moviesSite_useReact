import {useSelector} from "react-redux";
import {
  SelectCurrentFilmCountryNames,
  SelectCurrentFilmPropsNames
} from "../../features/rightContent/editFilmPage/get-film-by-idSlice";

export function DescriptionContentItem({filmData,data}) {

  const countries = useSelector(SelectCurrentFilmCountryNames);
  const propsNames = useSelector(SelectCurrentFilmPropsNames)

  if(data === 'image' || data === "description") {
    return null
  }
  return (
    <div className='description_content_item'>
      <b>{propsNames[data]}:</b>
      <span>
        {
          Array.isArray(filmData[data])
            ? filmData[data].join(' , ')
            : data === 'language' ? countries[filmData[data]]
            : data === 'homepage' ? <a href={filmData[data]} target='blank'>Go to {filmData['title']} Home Page </a>
              : filmData[data]
        }
      </span>
    </div>
  )
}

