export interface TemperatureRecord {
  time: number;
  location: string;
  temperature: number;
}

export interface FormProps {
  locationInput: string;
  date: string;
  temperature: string;
  suggestions: string[];
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleTemperatureChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSuggestionClick: (suggestion: string) => void;
}

export interface HotAndCold {
  hot: number;
  cold: number;
}

export interface DateFilterProps {
  onFilter: (start: number, end: number) => void;
}
