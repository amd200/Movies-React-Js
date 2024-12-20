import { applyMiddleware, createStore } from "redux";
import { MoviesReducer } from "../reducer/MoviesReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";

export const store = createStore(MoviesReducer, composeWithDevTools(applyMiddleware(thunk)));
