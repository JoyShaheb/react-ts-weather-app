import React, { FC } from "react";
import { Typography } from "@mui/material";
import { iResult } from "../../types";

const Caption: FC<iResult> = ({ error, isLoading, result }) => {
  const { name, sys } = result;
  return (
    <Typography variant="h6" textAlign="center" my={1.5}>
      {isLoading && "Loading..."}
      {name && sys?.country && `${name}, ${sys?.country}`}
      {error && "City not found"}
    </Typography>
  );
};

export default Caption;
