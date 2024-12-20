import { AllMovies, Movie, SearchMovies } from "../types/Movies";

const initialData = { movies: [], movie: [], totalPages: 500, loading: true };
export const MoviesReducer = (state = initialData, action) => {
  if (action.type == AllMovies) {
    return {
      type: action.type,
      movies: action.data,
      totalPages: state.totalPages,
      loading: false,
    };
  } else if (action.type == SearchMovies) {
    return {
      type: action.type,
      movies: action.data,
      totalPages: action.totalPages,
      loading: false,
    };
  } else if (action.type == Movie) {
    return {
      type: action.type,
      movie: action.data,
      totalPages: action.totalPages,
      loading: false,
    };
  } else {
    return state;
  }
};
