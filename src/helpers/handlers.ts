import { TemperatureRecord } from "../types/types";
import { mockApi } from "../misc/mockApi";

const api = mockApi();

export const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>,
  locationInput: string,
  date: string,
  temperature: string,
  setLocationInput: (location: string) => void,
  setDate: (date: string) => void,
  setTemperature: (temperature: string) => void,
): Promise<TemperatureRecord | null> => {
  e.preventDefault();

  if (!locationInput || !date || !temperature) return null;

  const time = new Date(date).getTime();
  const temperatureInKelvin = parseFloat(temperature) + 273.15;
  await api.saveTemperature(locationInput, time, temperatureInKelvin);
  const newRecord: TemperatureRecord = {
    location: locationInput,
    time,
    temperature: temperatureInKelvin,
  };

  setLocationInput("");
  setDate("");
  setTemperature("");

  return newRecord;
};

export const handleLocationInputChange = async (
  e: React.ChangeEvent<HTMLInputElement>,
  setLocationInput: (location: string) => void,
  setSuggestions: (suggestions: string[]) => void,
) => {
  const inputValue = e.target.value;

  setLocationInput(inputValue);
  if (inputValue) {
    const autocompleteSuggestions = await api.autocompleteLocation(inputValue);
    setSuggestions(autocompleteSuggestions);
  } else {
    setSuggestions([]);
  }
};
