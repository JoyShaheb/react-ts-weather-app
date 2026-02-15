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
import type { IWeatherResponse } from "./Types";

const Cards = () => {
  return <div className="">Display 1</div>;
};

const SearchMode = () => {
  return <div className=""></div>;
};

const sampleDataState: IWeatherResponse = {
  coord: {
    lon: 90.4074,
    lat: 23.7104,
  },
  weather: [
    {
      id: 721,
      main: "Haze",
      description: "haze",
      icon: "50n",
    },
  ],
  base: "stations",
  main: {
    temp: 302.14,
    feels_like: 308.76,
    temp_min: 302.14,
    temp_max: 302.14,
    pressure: 1006,
    humidity: 84,
    sea_level: 1006,
    grnd_level: 1005,
  },
  visibility: 4000,
  wind: {
    speed: 2.06,
    deg: 80,
  },
  clouds: {
    all: 75,
  },
  dt: 1758204518,
  sys: {
    type: 1,
    id: 9145,
    country: "BD",
    sunrise: 1758152742,
    sunset: 1758196779,
  },
  timezone: 21600,
  id: 1185241,
  name: "Dhaka",
  cod: 200,
};

const Display2 = ({ x }: { x: boolean }) => {
  const [data, setData] = useState<IWeatherResponse>(sampleDataState);
  // const [data, setData] = useState<IWeatherResponse>({} as IWeatherResponse);

  return (
    <div className="container max-w-7xl mx-auto p-2">
      <Navbar />
      <div className="flex flex-col justify-center items-center h-[92vh]">
        <SearchBar />
        {Object.keys(data).length !== 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 w-full">
            <WeatherCard weatherStatus="Haze" icon={"10d"} />
            <TimeCard sunrise="5:34 AM" sunset="6:38 PM" />
            <LocalTimeCard />
            <CoordinatesCard />
            <TemperatureCard
              temp_max={data.main.temp_max}
              temp_mix={data.main.temp_min}
            />
            <Cards />
            <Cards />
          </div>
        ) : (
          <div className="mt-3 text-xl">No Data Found</div>
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
