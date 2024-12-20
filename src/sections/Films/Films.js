import React, { useEffect, useState } from "react";
import CardFilm from "../../components/CardFilm/CardFilm";
import { Box, Skeleton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../../redux/actions/MovieAction";
import PaginationMui from "../../components/Pagination/Pagination";
function Films() {
  const [films, setFilms] = useState([]);

  const dispatch = useDispatch();
  const dataMovies = useSelector((state) => state.movies);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(getAllMovies());
  }, []);

  useEffect(() => {
    if (dataMovies && dataMovies.length > 0 && loading === false) {
      setFilms(dataMovies);
    }
  }, [dataMovies]);
  return (
    <div className="films">
      <div className="container">
        <div className="pup mb-5">
          <div className="text-pup">
            <p>Popular</p>
            <p>Newest</p>
          </div>
        </div>
        <div className="row">
          {films.length >= 1 ? (
            films.map((film) => {
              return <CardFilm key={film.id} film={film} />;
            })
          ) : (
            // <h2 className="text-center p-5">لا يوجد افلام...</h2>
            <Box sx={{ width: 200 }}>
              <Skeleton height={395} animation="wave" />
            </Box>
          )}
        </div>
        <PaginationMui />
      </div>
    </div>
  );
}

export default Films;
