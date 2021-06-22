export function SelectTag({classNameDate}){

  return (
    <select className={`dropdown_select ${classNameDate}`}>
      <option value="">Day</option>
    </select>
  )
}