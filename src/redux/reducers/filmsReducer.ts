import {LOAD_FILMS, REQUEST, SUCCESS, FAILURE} from "../constants";
import produce from "immer";
import {IFilm} from "../store";

const initialState = {
  entities: {},
  countPages: 0,
  loading: false,
  loaded: false,
  error: null,
}

interface IFilms {
  films: Array<IFilm>,
  countPages: number
}

interface IAction {
  type: string,
  data: IFilms,
  error: any,
}

export default (state = initialState, action: IAction) => {
  const {type, data, error}: IAction = action
  switch (type) {
    case LOAD_FILMS + REQUEST:
      return produce(state, (draft) => {
        draft.loading = true
        draft.loaded = false
        draft.error = null
      })
    case LOAD_FILMS + SUCCESS:
      return produce(state, (draft) => {
        const normalizeData = data.films.reduce((acc: any, item: any) => ({...acc, [item._id]: item}), {})
        draft.entities = {...draft.entities, ...normalizeData}
        draft.countPages = data.countPages
        draft.loading = false
        draft.loaded = true
      })
    case LOAD_FILMS + FAILURE:
      return produce(state, (draft) => {
        draft.loading = false
        draft.loaded = false
        draft.error = error
      })
    default:
      return state
  }
}
