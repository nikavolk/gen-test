import { TemperatureRecord, HotAndCold } from "../types/types";

export const kelvinToCelsius = (kelvin: number) => kelvin - 273.15;

export const calculateAverage = (temperatureRecords: TemperatureRecord[]) => {
  if (temperatureRecords.length === 0) {
    return null;
  }

  // calculate average temperature
  const sumKelvin = temperatureRecords.reduce((accumulator, record) => {
    return accumulator + record.temperature;
  }, 0);

  const averageKelvin = sumKelvin / temperatureRecords.length;
  const averageCelsius = averageKelvin - 273.15;
  return averageCelsius.toFixed(1);
};

export const calculateHotAndColdDays = (
  temperatureRecords: TemperatureRecord[],
): HotAndCold => {
  const hotThreshold = 30;
  const coldThreshold = 10;

  // count hot and cold days
  const hotAndCold = temperatureRecords.reduce<HotAndCold>(
    (acc, record) => {
      const tempCelsius = kelvinToCelsius(record.temperature);
      if (tempCelsius >= hotThreshold) {
        acc.hot++;
      } else if (tempCelsius <= coldThreshold) {
        acc.cold++;
      }
      return acc;
    },
    { hot: 0, cold: 0 },
  );
  return hotAndCold;
};

export const calculateDaysAboveAverage = (
  temperatureRecords: TemperatureRecord[],
) => {
  if (temperatureRecords.length === 0) {
    return 0;
  }

  // calculate average temperature
  const sumKelvin = temperatureRecords.reduce((accumulator, record) => {
    return accumulator + record.temperature;
  }, 0);

  const averageKelvin = sumKelvin / temperatureRecords.length;

  // calculate average temperature for each day
  const dailyTemperatures: {
    [date: string]: { count: number; sum: number };
  } = {};

  temperatureRecords.forEach((record) => {
    const date = new Date(record.time).toLocaleDateString();
    if (!dailyTemperatures[date]) {
      dailyTemperatures[date] = { count: 0, sum: 0 };
    }
    dailyTemperatures[date].count++;
    dailyTemperatures[date].sum += record.temperature;
  });

  // count days above average
  let daysAboveAverage = 0;

  for (const date in dailyTemperatures) {
    const dailyAverage =
      dailyTemperatures[date].sum / dailyTemperatures[date].count; // calculate average temperature for the day
    if (dailyAverage > averageKelvin) {
      daysAboveAverage++;
    }
  }

  return daysAboveAverage;
};

export const calculateMode = (temperatureRecords: TemperatureRecord[]) => {
  const tempMap: { [key: string]: number } = {}; // { temperature: count }
  let maxCount = 0;
  let mode = 0;

  temperatureRecords.forEach((record) => {
    const tempCelsius = Math.round(kelvinToCelsius(record.temperature)); // convert and round to nearest integer
    tempMap[tempCelsius] = (tempMap[tempCelsius] || 0) + 1; // increment count

    // check if new mode
    if (tempMap[tempCelsius] > maxCount) {
      maxCount = tempMap[tempCelsius]; // update max count
      mode = tempCelsius; // update mode
    }
  });

  return mode;
};
