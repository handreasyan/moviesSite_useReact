import {SelectTag} from "./selectComponent";
import RandomFilmsContent from "./Random-Films-Content";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  SelectDate,
  changeDateAC,
  updateTopFilmsByDateAC, SelectCurrentDate,
} from "../../features/leftContent/topFilmsSlice";

export function ForTeatre() {

  const {day,currentMonth,months,year} = useSelector(SelectDate)
  const [changeCurrentDay,setDay] = useState(0);
  const [changeCurrentMonth,setMonth] = useState(0);
  const dispatch = useDispatch()
  const date = useSelector(SelectCurrentDate)

  useEffect(()=>{
    dispatch(changeDateAC(changeCurrentDay,changeCurrentMonth,year));
  },[changeCurrentDay,changeCurrentMonth])

  return (
    <>
      <div className="for_teatre">
        <h3>See days examples of films . . .</h3>

        <div className="dropdown_selects">

          <SelectTag classNameDate='days_select' date={day} onChange={setDay}/>
          <SelectTag classNameDate='months_select'  date={months} onChange={setMonth} currentMonth={currentMonth}/>
          <SelectTag classNameDate='years_select'  date={year}/>

        </div>
        <button className="search_by_date" onClick={()=> dispatch(updateTopFilmsByDateAC(date))}
        >Search by Date</button>
      </div>

      <RandomFilmsContent />
    </>
  )
}