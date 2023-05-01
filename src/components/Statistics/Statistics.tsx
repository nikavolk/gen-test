import React from "react";
import { TemperatureRecord } from "../../types/types";
import {
  calculateAverage,
  calculateHotAndColdDays,
  calculateDaysAboveAverage,
  calculateMode,
} from "../../helpers/calculate";

interface StatisticsProps {
  temperatureRecords: Array<TemperatureRecord>;
}

export const Statistics: React.FC<StatisticsProps> = ({
  temperatureRecords,
}) => {
  const average = calculateAverage(temperatureRecords) as string;
  const { hot: hotDays, cold: coldDays } =
    calculateHotAndColdDays(temperatureRecords);
  const daysAboveAverage = calculateDaysAboveAverage(temperatureRecords);
  const mode = calculateMode(temperatureRecords);

  return (
    <div>
      <p>Average Temperature: {average}°C</p>
      <p>Hot Days: {hotDays}</p>
      <p>Cold Days: {coldDays}</p>
      <p>Days Above Average: {daysAboveAverage}</p>
      <p>Most Common Temperature: {mode}°C</p>
    </div>
  );
};
