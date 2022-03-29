import axios from "axios";
import {FAILURE, LOAD_FILMS, REQUEST, SUCCESS} from "./constants";

export const loadFilms = (page: number, searchText?: string) => async (dispatch: any) => {
  dispatch({type: LOAD_FILMS + REQUEST})
  try {
    const {data} = await axios.get(`/api/films?page=${page}${searchText ? '&searchText=' + searchText: ''} `)
    dispatch({type: LOAD_FILMS + SUCCESS, data})
  } catch (error) {
    dispatch({type: LOAD_FILMS + FAILURE, error})
  }
}
