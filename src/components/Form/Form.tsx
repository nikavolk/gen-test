import React from "react";
import { FormProps } from "../../types/types";

export const Form: React.FC<FormProps> = ({
  locationInput,
  date,
  temperature,
  suggestions,
  handleFormSubmit,
  handleInputChange,
  handleDateChange,
  handleTemperatureChange,
  handleSuggestionClick,
}) => {
  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Location:
        <input
          type="text"
          placeholder="Enter location"
          value={locationInput}
          onChange={handleInputChange}
        />
      </label>
      <ul className="suggestions-dropdown">
        {suggestions.map((suggestion) => (
          <li
            key={suggestion}
            onClick={() => handleSuggestionClick(suggestion)}
          >
            {suggestion}
          </li>
        ))}
      </ul>
      <label>
        Date:
        <input type="date" value={date} onChange={handleDateChange} />
      </label>
      <label>
        Temperature (°C):
        <input
          type="number"
          step="0.1"
          value={temperature}
          onChange={handleTemperatureChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
