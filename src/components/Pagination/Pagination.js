import React, { useEffect, useState } from "react";
import { Pagination, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getPage } from "../../redux/actions/MovieAction";

function PaginationMui() {
  const [pageCurrent, setPageCurrent] = useState(1);
  const dispatch = useDispatch();
  // get current page
  const handleChange = (event, value) => {
    setPageCurrent(value);
  };
  useEffect(() => {
    dispatch(getPage(pageCurrent));
  }, [pageCurrent]);
  return (
    <Stack spacing={2} className="align-items-center mb-3">
      <Pagination count={500} page={pageCurrent} color="primary" onChange={handleChange} />
    </Stack>
  );
}

export default PaginationMui;
