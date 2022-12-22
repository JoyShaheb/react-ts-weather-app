import React, { FC } from "react";
import { Grid, Skeleton } from "@mui/material";

interface iLoadingSkeleton {
  cards: number;
}

const LoadingSkeleton: FC<iLoadingSkeleton> = ({ cards }) => {
  const cardHeight = 125;
  const animationType = "wave";
  return (
    <Grid container spacing={1}>
      {Array(cards)
        .fill(0)
        .map((_, index) => (
          <Grid item xs={6} key={index}>
            <Skeleton
              animation={animationType}
              variant="rectangular"
              height={cardHeight}
              sx={{
                borderRadius: 1,
              }}
            />
          </Grid>
        ))}
    </Grid>
  );
};

export default LoadingSkeleton;
