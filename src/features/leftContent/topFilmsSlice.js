import {loadTopFilms, updateTopFilmsByDate} from "./topFIlmsAPI";

export function topFilmsChangeReducer(state={},action){
  // stex karam injvor ifer qnnarkem u yst dra voroshem te 'filmsContentTitle'_um inja grvelu ??
  if(action.type === 'FILL-TOP-FILMS-CONTENT') {
    if(action.payload.films.length === 0) {
      return {...state,films:action.payload.films,filmsContentTitle:'There are no movies in your selected date, please select a different date'}
    }
    return {...state,films:action.payload.films,filmsContentTitle:"The Best Films of this Year"}
  } else if(action.type === 'SET-CURRENT-DATE') {
    return  {...state,currentDate:action.payload.newCurrentDate}
  }
  return  state
}

// initial State
export const topFilmsInitial = {
  fillDate:{
    day:new Date().getDate() ,
    months:['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    currentMonth:new Date().getMonth(),
    year:new Date().getFullYear()
  },
  currentDate: {
    day:null,
    month:null,
    year:null
  },
  films: [],
  filmsContentTitle:"The Best Films of this Year"
}


// Selectors
export const SelectFilms = (state) => state.topFilmsContent.films
export const SelectDate = (state) => state.topFilmsContent.fillDate
export const SelectCurrentDate = (state) => state.topFilmsContent.currentDate
export const SelectFilmsContentTitle = (state) => state.topFilmsContent.filmsContentTitle



// Action Creators

export function changeDateAC(newDay,newMonth,newYear){
  return {
    type:'SET-CURRENT-DATE',
    payload: {
      newCurrentDate:{
        day:newDay,
        month:newMonth,
        year:newYear
      }
    }
  }
}
export function fillTopFilmsContentAC(newFilms){
  return {
    type:'FILL-TOP-FILMS-CONTENT',
    payload: {
      films:newFilms
    }
  }
}

// Action Creators with thunk
export function loadTopFilmsAC() {
  return (dispatch,getState)=> {
    loadTopFilms().then(res=>{
      dispatch(fillTopFilmsContentAC(res))
    })
  }
}
export function updateTopFilmsByDateAC(date) {
  return (dispatch,getState)=> {
    updateTopFilmsByDate(date).then(res=>{
      dispatch(fillTopFilmsContentAC(res))
    })
  }
}