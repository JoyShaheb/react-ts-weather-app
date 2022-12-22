import SearchBar from "./components/SearchBar/SearchBar";
import { Typography } from "@mui/material";
import LoadingSkeleton from "./components/LoadingSkeleton/LoadingSkeleton";
import Display from "./components/Display/Display";
import { useSelector } from "react-redux";
import { iStore } from "./types";
import Caption from "./components/Caption/Caption";

const App = () => {
  const { result: data, search } = useSelector((state: iStore) => state);
  const { result, isLoading } = data;

  return (
    <div className="App">
      <Typography variant="h6" textAlign="center" mb={2}>
        Weather App
      </Typography>
      <SearchBar />
      <Caption {...data} />
      {isLoading && <LoadingSkeleton cards={6} />}
      {Object.keys(result).length !== 0 && <Display data={data} />}
    </div>
  );
};

export default App;
