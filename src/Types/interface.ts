export interface ICoordinates {
  "lon": number,
  "lat": number
}

export interface IWeather {
  "id": number,
  "main": string,
  "description": string,
  "icon": string
}

export interface IMainWeatherData {
  "temp": number,
  "feels_like": number,
  "temp_min": number,
  "temp_max": number,
  "pressure": number,
  "humidity": number,
  "sea_level": number,
  "grnd_level": number
}

export interface ISys {
  "type": 1,
  "id": 9145,
  "country": string,
  "sunrise": number,
  "sunset": number
}

export interface IWeatherResponse {
  "coord": ICoordinates,
  "weather": IWeather[],
  "base": string,
  "main": IMainWeatherData,
  "visibility": number,
  "wind": {
    "speed": number,
    "deg": number
  },
  "clouds": {
    "all": number
  },
  "dt": number,
  "sys": ISys,
  "timezone": number,
  "id": number,
  "name": string,
  "cod": number
}

