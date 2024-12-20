import axios from "axios";
import { AllMovies, Authorization, Movie, SearchMovies } from "../types/Movies";

export const getAllMovies = (pageCurrent) => {
  return async (dispatch) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?&language=en-US`, Authorization);
    dispatch({
      type: AllMovies,
      data: response.data.results,
      totalPages: response.data.total_pages,
    });
  };
};

// get page
export const getPage = (page) => {
  return async (dispatch) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?page=${page}&language=en-US`, Authorization);
    console.log(page);
    dispatch({
      type: AllMovies,
      data: response.data.results,
      totalPages: response.data.total_pages,
    });
  };
};

export const searchMovies = (word) => {
  return async (dispatch) => {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?&query=${word}&language=en-US`, Authorization);
    dispatch({
      type: SearchMovies,
      data: response.data.results,
      totalPages: response.data.total_pages,
    });
  };
};

export const getMovie = (ID) => {
  return async (dispatch) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${ID}?language=en-US`, Authorization);
    dispatch({
      type: Movie,
      data: response.data,
      totalPages: 500,
    });
  };
};
