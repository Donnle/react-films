import {createSelector} from "reselect";
import {RootState} from "./store";

const filmsObjectSelector = ({films}: RootState) => films.entities

export const filmsSelector = createSelector(
  filmsObjectSelector,
  Object.values
)

export const countPagesFilmsSelector = ({films}: RootState) => films.countPages
export const loadingFilmsSelector = ({films}: RootState) => films.loading
export const loadedFilmsSelector = ({films}: RootState) => films.loaded
export const errorFilmsSelector = ({films}: RootState) => films.error
