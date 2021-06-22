import {SelectTag} from "./selectComponent";
import RandomFilmsContent from "./Random-Films-Content";

export function ForTeatre() {
  return (
    <>
      <div className="for_teatre">
        <h3>See days examples of films . . .</h3>

        <div className="dropdown_selects">

          <SelectTag classNameDate='days_select'/>
          <SelectTag classNameDate='months_select'/>
          <SelectTag classNameDate='years_select'/>

        </div>
        <button className="search_by_date">Search by Date</button>
      </div>
      <RandomFilmsContent />
    </>
  )
}