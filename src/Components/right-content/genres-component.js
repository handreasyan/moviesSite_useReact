export function GenresComponent() {
  const arr = [
    {
      id:1,
      name:'someName1',
    },
    {
      id:2,
      name:'someName2',
    },
    {
      id:3,
      name:'someName3',
    },
    {
      id:4,
      name:'someName4',
    }
  ]
  return (
    <div className="all_genres">
      {arr.map(obj => {
       return  <span data-genre-id={obj.id} className='genre_type'> {obj.name}</span>
      })}
    </div>
  )
}