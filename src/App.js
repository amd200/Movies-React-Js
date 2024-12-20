import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./pages/Hero";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import DetailsFilm from "./pages/DetailsFilm";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

function App() {
  const [totalPages, setTotalPages] = useState(500);

  //to search in api
  const search = async (word) => {
    if (word === "") {
    } else {
      const res = await axios.get(``);
      // setFilms(res.data.results);
      setTotalPages(res.data.total_pages);
    }
  };

  return (
    <BrowserRouter>
      <Header search={search} />
      <Routes>
        <Route path="/" element={<Hero totalPages={totalPages} />} />
        <Route path="/film/:id" element={<DetailsFilm />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
