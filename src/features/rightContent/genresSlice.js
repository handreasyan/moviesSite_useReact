
import {getAllFilmsByGenre, getMostPopularFilms, loadGenres} from "./genresAPI";


export function GenresSliceRecuder(state={},action) {
  if(action.type === 'fill-genres'){
    return {...state,genres:action.payload.genres}
  } else if(action.type === 'fill-films-content') {
    return  {...state,allFilmsByGenre:action.payload.allFilmsByGenre}
  }
  return state
}

export const initialGenres = {
  genres:[],
  allFilmsByGenre:[],
  currentPageNumber:1,
}


//  action creators

export function genresFillAC(arr){
  return {
    type:'fill-genres',
    payload:{
      genres:arr
    }
  }
}

export function fillAllFilmsByGenre(allFilms){
  return {
    type:'fill-films-content',
    payload:{
      allFilmsByGenre:allFilms
    }
  }
}

export function loadGenresAC(){
  return (dispatch,getState)=> {
    loadGenres().then(res=>{
      dispatch(genresFillAC(res))
    })
  }
}
export function getAllFilmsByGenreAC(id,pageNumber){
  return (dispatch,getState)=> {
    getAllFilmsByGenre(id,pageNumber).then(res=>{
      dispatch(fillAllFilmsByGenre(res))
    })
  }
}

export function getMostPopularFilmsAC(pageNumber){
  return (dispatch,getState)=> {
    getMostPopularFilms(pageNumber).then(res=>{
      dispatch(fillAllFilmsByGenre(res))
    })
  }
}

// selectors
export const SelectGenres = (state) => state.allGenresTypes.genres
export const SelectAllFilmsByGenre = (state) => state.allGenresTypes.allFilmsByGenre
export const SelectCurrentPageNumber = (state) => state.allGenresTypes.currentPageNumber