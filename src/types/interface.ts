interface iCoord {
  lon: number;
  lat: number;
}

interface iWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface iMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

interface iWind {
  speed: number;
  deg: number;
  gust: number;
}

interface iClouds {
  all: number;
}

interface iSys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface iWeatherData {
  coord: iCoord;
  weather: iWeather[];
  base: string;
  main: iMain;
  visibility: number;
  wind: iWind;
  clouds: iClouds;
  dt: number;
  sys: iSys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
