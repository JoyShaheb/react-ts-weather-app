import { FC } from "react";
import Card from "../Card/Card";
import { Grid } from "@mui/material";
import AirIcon from "@mui/icons-material/Air";
import OpacityIcon from "@mui/icons-material/Opacity";
import WaterIcon from "@mui/icons-material/Water";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import TimeZone from "../TimeZone/TimeZone";
import { iWeatherData } from "../../types/interface";

const Display: FC<iWeatherData> = ({ main, wind, sys, timezone }) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={6}>
        <Card
          icon={<OpacityIcon fontSize="medium" />}
          label="Temperature"
          data={main?.temp}
          unit="°C"
        />
      </Grid>
      <Grid item xs={6}>
        <Card
          icon={<AirIcon fontSize="medium" />}
          label="Wind"
          data={wind?.speed}
          unit="km/h"
        />
      </Grid>
      <Grid item xs={6}>
        <Card
          icon={<OpacityIcon fontSize="medium" />}
          label="Humidity"
          data={main?.humidity}
          unit="%"
        />
      </Grid>
      <Grid item xs={6}>
        <Card
          icon={<WaterIcon fontSize="medium" />}
          label="Pressure"
          data={main?.pressure}
          unit="hPa"
        />
      </Grid>
      <Grid item xs={6}>
        <Card
          icon={<WbSunnyIcon fontSize="medium" />}
          label="Sun Rise"
          data={TimeZone({ input: sys?.sunrise, timezone })}
        />
      </Grid>
      <Grid item xs={6}>
        <Card
          icon={<WbTwilightIcon fontSize="medium" />}
          label="Sun Set"
          data={TimeZone({ input: sys?.sunset, timezone })}
        />
      </Grid>
    </Grid>
  );
};

export default Display;
