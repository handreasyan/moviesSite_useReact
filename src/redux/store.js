import {topFilmsChangeReducer, topFilmsInitial} from "../features/leftContent/topFilmsSlice";
import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import {GenresSliceRecuder, initialGenres} from "../features/rightContent/genresSlice";
import {editFilmReducer, initialFilmPage} from "../features/rightContent/editFilmPage/get-film-by-idSlice";
const store = createStore(combineReducers({
  topFilmsContent:topFilmsChangeReducer,
  allGenresTypes:GenresSliceRecuder,
  currentEditFilm:editFilmReducer
}),{
  topFilmsContent:topFilmsInitial,
  allGenresTypes:initialGenres,
  currentEditFilm:initialFilmPage
},applyMiddleware(thunk));

export default store

//GenresSliceRecuder