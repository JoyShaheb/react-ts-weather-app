import { useState } from "react";
import {
  CoordinatesCard,
  Footer,
  LocalTimeCard,
  Navbar,
  SearchBar,
  TemperatureCard,
  TimeCard,
  WeatherCard,
} from "./components";

const Cards = () => {
  return <div className="">Display 1</div>;
};

const SearchMode = () => {
  return <div className=""></div>;
};

const Display2 = ({ x }: { x: boolean }) => {
  return (
    <div className="container max-w-7xl mx-auto p-2">
      <Navbar />
      <div className="flex flex-col justify-center items-center h-[92vh]">
        <SearchBar />
        {x && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 w-full">
            <WeatherCard weatherStatus="Haze" icon={"10d"} />
            <TimeCard sunRise="5:34 AM" sunSet="6:38 PM" />
            <LocalTimeCard />
            <CoordinatesCard />
            <TemperatureCard temp_max={308.76} temp_mix={302.76} />
            <Cards />
            <Cards />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

const App = () => {
  const [x, setX] = useState<boolean>(true);

  return <Display2 x={x} />;
};

export default App;
