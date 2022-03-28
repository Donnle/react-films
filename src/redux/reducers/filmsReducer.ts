import {LOAD_FILMS, REQUEST, SUCCESS, FAILURE} from "../constants";
import produce from "immer";

const initialState = {
  entities: {},
  countPages: 0,
  loading: false,
  loaded: false,
  error: null,
}

export default (state = initialState, action: any) => {
  const {type, data, error} = action
  switch (type) {
    case LOAD_FILMS + REQUEST:
      return produce(state, (draft) => {
        draft.loading = true
        draft.loaded = false
        draft.error = null
      })
    case LOAD_FILMS + SUCCESS:
      return produce(state, (draft) => {
        const sortedFilms = data.films.filter((item: any) => !Object.keys(data.films).includes(item._id))
        const normalizeData = sortedFilms.reduce((acc: any, item: any) => ({...acc, [item._id]: item}), {})
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
