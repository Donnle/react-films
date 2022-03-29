import {createSelector} from "reselect";
import {IRootState} from "./store";

const filmsObjectSelector = ({films}: IRootState) => films.entities

export const filmsSelector = createSelector(
  filmsObjectSelector,
  Object.values
)

export const countPagesFilmsSelector = ({films}: IRootState) => films.countPages
export const loadingFilmsSelector = ({films}: IRootState) => films.loading
export const loadedFilmsSelector = ({films}: IRootState) => films.loaded
export const errorFilmsSelector = ({films}: IRootState) => films.error
