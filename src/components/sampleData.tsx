import { iWeatherData } from "../types/interface";

export const sampleData: iWeatherData = {
  coord: {
    lon: 90.4074,
    lat: 23.7104,
  },
  weather: [
    {
      id: 701,
      main: "Mist",
      description: "mist",
      icon: "50n",
    },
  ],
  base: "stations",
  main: {
    temp: 20.99,
    feels_like: 21.18,
    temp_min: 20.99,
    temp_max: 20.99,
    pressure: 1013,
    humidity: 78,
    sea_level: 123,
    grnd_level: 1013,
  },
  visibility: 1800,
  wind: {
    speed: 0,
    deg: 0,
    gust: 0,
  },
  clouds: {
    all: 75,
  },
  dt: 1671730915,
  sys: {
    type: 1,
    id: 9145,
    country: "BD",
    sunrise: 1671669396,
    sunset: 1671707810,
  },
  timezone: 21600,
  id: 1185241,
  name: "Dhaka",
  cod: 200,
};
