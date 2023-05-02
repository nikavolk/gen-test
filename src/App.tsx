import "./App.css";
import React, { useState } from "react";
import { Form } from "./components/Form/Form";
import {
  handleSubmit,
  handleLocationInputChange,
  handleFilter,
} from "./helpers/handlers";
import { TemperatureRecord } from "./types/types";
import { Statistics } from "./components/Statistics/Statistics";
import { DateFilter } from "./components/DateFilter/DateFilter";

function App() {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [date, setDate] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [temperature, setTemperature] = useState("");
  const [temperatureRecords, setTemperatureRecords] = useState<
    TemperatureRecord[]
  >([]);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const newRecord = await handleSubmit(
      e,
      locationInput,
      date,
      temperature,
      setLocationInput,
      setDate,
      setTemperature,
    );

    if (newRecord) {
      setTemperatureRecords((prevRecords) => [...prevRecords, newRecord]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleLocationInputChange(e, setLocationInput, setSuggestions);
  };

  const handleDateFilter = (start: number, end: number) => {
    handleFilter(start, end, setTemperatureRecords);
  };

  return (
    <div className="App">
      <Form
        locationInput={locationInput}
        date={date}
        temperature={temperature}
        suggestions={suggestions}
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
        handleDateChange={(e) => setDate(e.target.value)}
        handleTemperatureChange={(e) => setTemperature(e.target.value)}
      />
      <DateFilter onFilter={handleDateFilter} />{" "}
      <Statistics temperatureRecords={temperatureRecords} />
    </div>
  );
}

export default App;
