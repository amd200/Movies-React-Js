import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Film() {
  return (
    <div>
      <h2>Video ID: ""</h2>
      <h2>Video Name: </h2>
      <iframe
        src="https://akwam.cz/watch/155174/9418/dreamin-wild"
        width={800}
        height={1000}
      ></iframe>
    </div>
  );
}

export default Film;
