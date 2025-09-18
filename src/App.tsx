import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { CoordinatesCard, TimeCard } from "./components";

const Cards = () => {
  return <div className="">Display 1</div>;
};

const SearchBar = () => {
  return (
    <div className="flex flex-col gap-1 w-[310px]">
      <Label htmlFor="searchBar">Search Location</Label>
      <Input
        id="searchBar"
        type="text"
        placeholder="search for a city name e.g. London"
      />
    </div>
  );
};

const SearchMode = () => {
  return <div className=""></div>;
};

const Display2 = ({ x }: { x: boolean }) => {
  return (
    <div className="container max-w-7xl mx-auto p-2">
      <div className="">Weather App</div>
      <div className="flex flex-col justify-center items-center h-[92vh]">
        <SearchBar />
        {x && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 w-full">
            <TimeCard sunRise="5:34 AM" sunSet="6:38 PM" />
            <CoordinatesCard />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
        )}
      </div>
      <div className="">By PoshPixel Studio</div>
    </div>
  );
};

const App = () => {
  const [x, setX] = useState<boolean>(true);

  return <Display2 x={x} />;
};

export default App;
