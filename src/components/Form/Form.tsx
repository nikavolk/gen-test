// Form.tsx
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
}) => {
  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label>
          Location:
          <input
            type="text"
            placeholder="Enter location"
            value={locationInput}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Date:
          <input type="date" value={date} onChange={handleDateChange} />
        </label>
      </div>
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
