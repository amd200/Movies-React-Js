import React from "react";
import Features from "../sections/Features/Features";
import Films from "../sections/Films/Films";
function Hero({ films, pageCurrent, handleChange, totalPages }) {
  return (
    <>
      <Features films={films} />
      <Films
        films={films}
        page={pageCurrent}
        handleChange={handleChange}
        totalPages={totalPages}
      />
    </>
  );
}

export default Hero;
