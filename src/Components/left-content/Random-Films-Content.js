import {FilmForRandom} from "./Film-for-random-content";

export default function RandomFilmsContent() {
  {/* arr_n piti ga propsic , es im zangvacy sarqaca uxxaki orinaki hamar */}
  const arr = [{id:1,title:"SOme Text"},{id:1,title:"SOme Text"},{id:1,title:"SOme Text"},{id:1,title:"SOme Text"}];
  return (
    <div className="films_random_content">
      <h3>The Best Films of this Year</h3>
      <div className="films_random">
        {arr.map(film=> <FilmForRandom film={film}/>)}
      </div>
    </div>
  )
}