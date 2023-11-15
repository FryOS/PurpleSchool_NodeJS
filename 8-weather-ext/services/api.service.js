import axios from "axios";
import { getKeyValue, TOKEN_DICTIONARY } from "./storage.service.js";
import { getArgs } from "../helpers/args.js";

const getWeather = async (city) => {
  const token = (await getKeyValue(TOKEN_DICTIONARY.token))[0];
  if (!token) {
    throw new Error("Не задан API key");
  }

  const args = getArgs(process.argv);

  const { data } = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: city,
        appid: token,
        lang: args.l,
        units: "metric",
      },
    }
  );
  return data;
};

const getIcon = (icon) => {
  const iconMap = {
    "01": "☀️",
    "02": "🌤️",
    "03": "☁️",
    "04": "☁️",
    "09": "🌧️",
    "10": "🌦️",
    "11": "🌩️",
    "13": "❄️",
    "50": "🌫️",
  };
  
  const iconKey = icon.slice(0, -1);
  return iconMap[iconKey] || "";
};

export { getWeather, getIcon };
