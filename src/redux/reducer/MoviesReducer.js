import { AllMovies, SearchMovies } from "../types/Movies";

const initialData = { movies: [], pageCurrent: 0, totalPages: 500 };
export const MoviesReducer = (state = initialData, action) => {
  if (action.type == AllMovies) {
    return {
      type: action.type,
      movies: action.data,
      totalPages: state.totalPages,
    };
  } else if (action.type == SearchMovies) {
    return {
      type: action.type,
      movies: action.data,
      totalPages: action.totalPages,
    };
  } else {
    return state;
  }
};
