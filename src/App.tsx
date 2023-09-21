import SearchBar from "./components/SearchBar/SearchBar";
import { Typography } from "@mui/material";
import LoadingSkeleton from "./components/LoadingSkeleton/LoadingSkeleton";
import Display from "./components/Display/Display";
import Caption from "./components/Caption/Caption";
import { useGetDataOfCityQuery } from "./store";
import { useState } from "react";
import { iWeatherData } from "./types/interface";

const App = () => {
  const [seachTerm, setSearchTerm] = useState<string>("");
  const { data, isLoading, isError, isFetching } =
    useGetDataOfCityQuery(seachTerm);

  return (
    <div className="App">
      <Typography variant="h6" textAlign="center" mb={2}>
        Weather App
      </Typography>
      <SearchBar value={seachTerm} onChange={setSearchTerm} />
      {isLoading || isFetching ? (
        <Typography variant="subtitle1" textAlign="center" my={2}>
          Loading Please Wait
        </Typography>
      ) : (
        !isError && <Caption {...(data as iWeatherData)} />
      )}
      {seachTerm !== "" && isError && (
        <Typography variant="subtitle1" textAlign="center" my={2}>
          City Not Found
        </Typography>
      )}

      {(isLoading || isFetching) && <LoadingSkeleton cards={6} />}
      {!isLoading &&
        !isFetching &&
        !isError &&
        data &&
        Object.keys(data as iWeatherData)?.length !== 0 && (
          <Display {...(data as iWeatherData)} />
        )}
    </div>
  );
};

export default App;
