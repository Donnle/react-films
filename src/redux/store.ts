import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from "./reducers";
import {logger} from "./middlewares";

export interface IFilm {
  _id: number,
  actors: string,
  director: string,
  genres: Array<string>,
  plot: string,
  posterUrl: string,
  runtime: number,
  title: string,
  year: number,
}

export interface IFilms {
  entities: IFilm,
  countPages: number,
  loading: boolean,
  loaded: boolean,
  error: null | object,
}

export interface IRootState {
  films: IFilms,
}

const middlewares = applyMiddleware(thunk, logger)

export const store = createStore(reducers, composeWithDevTools(middlewares))
