export function FilmForRandom({film}) {
  return (
    <div data-movide-id={film.id} className='film_name'>
      {film.title}
    </div>
  )
}