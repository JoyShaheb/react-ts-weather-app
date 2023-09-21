import { FC } from "react";
import { Typography } from "@mui/material";
import { iWeatherData } from "../../types/interface";

const Caption: FC<iWeatherData> = ({ name, sys }) => {
  return (
    <Typography variant="h6" textAlign="center" my={1.5}>
      {name}, {sys?.country}
    </Typography>
  );
};

export default Caption;
