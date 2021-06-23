import {getMostPopularFilms} from "../genresAPI";
import {fillAllFilmsByGenre} from "../genresSlice";
import {getFilmById} from "./getFilmByIdAPI";

export function editFilmReducer(state = {}, action) {
  if (action.type === 'update-current-film-data') {
    return {...state,filmData: action.payload.filmData}
  }
  return state
}

export const initialFilmPage = {
  filmData: {
    genres: null,
    budget: null,
    homepage: null,
    title: null,
    countries:null,
    releaseDate: null,
    tagline:null,
    language: null,
    companies: null,
    rating: null,
    image: null,
    description:null
  },
  filmPropsNames: {
    genres: "Genres",
      budget: 'Film Budget',
      homepage: "Home Page",
      title: "Movie Name",
      countries: "Production Countries",
      releaseDate: 'Relase Date',
      tagline: "Tagline",
      language: "Original Language",
      companies: "Companies",
      rating: 'Film Rateing: ',
  },
   countryNames : {
    zh: "Chinese",
    da: "Danish",
    nl: "Dutch",
    fi: "Finnish",
    de: "German",
    it: "Italian",
    ja: "Japanese",
    ko: "Korean",
    no: "Norwegian",
    ru: "Russian",
    sv: "Swedish",
    th: "Thai",
    ar: "Arabic",
    bg: "Bulgarian",
    hr: "Croatian",
    cs: "Czech",
    en: "English",
    el: "Greek",
    iw: "Hebrew",
    hu: "Hungarian",
    pl: "Polish",
    pt: "Portuguese",
    sk: "Slovak",
    sl: "Slovenian",
    tr: "Turkish",
    uk: "Ukrainian",
    vi: "Vietnamese",
    sq: "Albanian",
    af: "Afrikaans",
    am: "Armenian",
    eu: "Basque",
    bs: "osnian",
    bn: "Bengali",
    my: "Burmese",
    ca: "Catalan",
    et: "Estonian",
    fa: "Farsi",
    fr: "French'",
    ka: "Georgian",
    gu: "Gujarati",
    haw: "Hawaiian",
    hi: "Hindi",
    is: "Icelandic",
    ga: "Irish",
    kn: "Kannada",
    kk: "Kazakh",
    km: "Khmer",
    lv: "Latvian",
    lt: "Lithuanian",
    lb: "Luxembourgish",
    mk: "Macedonian",
    ms: "Malay",
    ml: "Malayalam",
    mt: "Maltese",
    mr: "Marathi",
    sh: "Montenegrin",
    ro: "Romanian",
    rm: "Romansh",
    sm: "Samoan",
    sr: "Serbian",
    es: "Spanish",
    sw: "Swahili",
    tl: "Tagalog",
    ta: "Tamil",
    te: "Telugu",
    ur: "Urdu",
    cy: "Welsh",
    xh: "Xhosa",
    zu: "Zulu",
  }
}

export function updateCurrentFilmAC(data){
  return {
    type:'update-current-film-data',
    payload:{
      filmData:data
    }
  }
}


export function getFilmByIdAC(id){
  return (dispatch,getState)=> {
    getFilmById(id).then(res=>{
      dispatch(updateCurrentFilmAC(res))
    })
  }
}

export const SelectCurrentFilm = (state) => state.currentEditFilm.filmData
export const SelectCurrentFilmPropsNames = (state) => state.currentEditFilm.filmPropsNames
export const SelectCurrentFilmCountryNames = (state) => state.currentEditFilm.countryNames

