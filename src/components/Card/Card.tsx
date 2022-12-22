import { FC } from "react";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

interface iCard {
  icon: JSX.Element | JSX.Element[];
  label: string;
  data: string | undefined | number;
  unit?: string;
}

const Card: FC<iCard> = ({ icon, label, data, unit }) => {
  return (
    <Stack
      sx={{
        border: "2px solid gray",
        borderRadius: "3px",
        padding: "10px",
        height: "125px",
      }}
      gap={0.5}
      direction="column"
      justifyContent="center"
      alignItems="center"
      className="Card"
    >
      {icon}
      <Typography>
        {data} {unit}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>
    </Stack>
  );
};

export default Card;
