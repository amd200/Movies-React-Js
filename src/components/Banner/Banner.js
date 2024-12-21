import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovie, getVideoMovie } from "../../redux/actions/MovieAction";
import "./style.css";
import { FaRegStar } from "react-icons/fa";
import { IoPlayCircleOutline } from "react-icons/io5";
import VideoFilm from "../VideoFilm/VideoFilm";

function Banner({ myVideo }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const dataMovie = useSelector((state) => state.movie);
  const [film, setFilm] = useState(null);
  const genres = film && film.genres.slice(0, 3).map((genre) => genre.name).join(" - ");
  useEffect(() => {
    dispatch(getMovie(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (dataMovie && dataMovie.id) {
      setFilm(dataMovie);
    }
  }, [dataMovie]);
  if (!film) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="banner" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${film.backdrop_path})` }}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-xl-8">
              <div className="content">
                <div className="tailer d-flex align-items-end">
                  <button className="btn shadow-none border-0 d-flex align-items-center text-white " data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <IoPlayCircleOutline className="me-2 fs-1" />
                    <span className="fs-4">Trailer</span>
                  </button>
                </div>
                <div className="text">
                  <h3 className="fw-normal">{film.title} </h3>
                  <ul className="d-flex p-0 align-items-center">
                    <li className="nav-item d-flex align-items-center">
                      <FaRegStar className="me-2" style={{ color: "#2f80ed", fontSize: "20px" }} />
                      {film.vote_average.toFixed(1)}
                    </li>
                    <li className="nav-item">{genres}</li>
                    <li className="nav-item">{new Date(film.release_date).getFullYear()}</li>
                    <li className="nav-item">
                      {Math.floor(film.runtime / 60)}h {film.runtime % 60}min
                    </li>
                    {/* <li className="nav-item">16+</li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Trailer
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/6WJc3PL9yYI?si=qK4h5Vifh0g1eGtY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
