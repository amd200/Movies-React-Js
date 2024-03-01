import { applyMiddleware, createStore } from "redux";
import { MoviesReducer } from "../reducer/MoviesReducer";
import { thunk } from "redux-thunk";

export const store = createStore(MoviesReducer, applyMiddleware(thunk));
