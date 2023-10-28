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

const printWeather = (res, icon) => {
  console.log(
    dedent`${chalk.bgYellow("Weather")} Погода в городе ${res.name}
    ${icon}  ${res.weather[0].description}
    Температура: ${res.main.temp} (ощущается как ${res.main.feels_like})
    Скорость ветра: ${res.wind.speed}
    `
  );
};

export { printError, printSuccess, printHelp, printWeather };
