export function SelectTag({classNameDate,onChange,date,currentMonth}){

  let arr = [];
  if(Array.isArray(date)) {

    arr = date.map((el,i)=>{
      return <option value={i} key={i}>{el}</option>
    }).filter((el,index)=>index > currentMonth - 1)

  } else if(date < 31) {

    for(let i=date;i<31; i++) arr.push(<option value={i} key={i}>{i}</option>)

  } else arr = <option value={date}>{date}</option>


  return (
    <select className={`dropdown_select ${classNameDate}`}
            onChange={(event)=>onChange(event.target.value) }
    > {arr}</select>
  )
}