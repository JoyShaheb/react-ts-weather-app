import axios, { AxiosRequestConfig } from "axios";

const settings: AxiosRequestConfig = {
  baseURL: "https://api.openweathermap.org/data/2.5/weather",
  params: {
    appid: process.env.REACT_APP_API_KEY,
    units: "metric",
  },
};

export const apiSettings = axios.create(settings);
