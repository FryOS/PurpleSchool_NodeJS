import chalk from "chalk";
import dedent from "dedent-js";

const printError = (error) => {
  console.log(chalk.bgRed("Error") + ": " + error);
};

const printSuccess = (message) => {
  console.log(chalk.bgGreen("Message") + ": " + message);
};

const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan("Help")}
        без параметров - вывод погоды
        -s [CITY] для установки города
        -h для вывода помощи
        -t [API_KEY] для сохранения токена
        `
  );
};

const printWeather = (res, icon, lang = "ru") => {
  if(lang !== "ru") {
    console.log(
      dedent`${chalk.bgYellow("Weather")} Weather in city ${res.name}
      ${icon}  ${res.weather[0].description}
      Temperature: ${res.main.temp} (feels like ${res.main.feels_like})
      Speed's wind : ${res.wind.speed}
      `
    );
  }
  console.log(
    dedent`${chalk.bgYellow("Weather")} Погода в городе ${res.name}
    ${icon}  ${res.weather[0].description}
    Температура: ${res.main.temp} (ощущается как ${res.main.feels_like})
    Скорость ветра: ${res.wind.speed}
    `
  );
};

export { printError, printSuccess, printHelp, printWeather };
