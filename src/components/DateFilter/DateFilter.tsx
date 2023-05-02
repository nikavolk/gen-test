import React, { useState } from "react";
import { DateFilterProps } from "../../types/types";

export const DateFilter: React.FC<DateFilterProps> = ({ onFilter }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleFilter = () => {
    const start = new Date(startDate).getTime();
    const end = new Date(endDate).getTime();
    onFilter(start, end);
  };

  return (
    <div>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};
