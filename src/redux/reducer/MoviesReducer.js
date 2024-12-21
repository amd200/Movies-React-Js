import { AllMovies, Movie, SearchMovies, VideoMovie } from "../types/Movies";

const initialData = { movies: [], movie: [], video: [], totalPages: 500, loading: true };
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
  } else if (action.type == VideoMovie) {
    return {
      type: action.type,
      video: action.data,
      totalPages: action.totalPages,
      loading: false,
    };
  } else {
    return state;
  }
};
