import { ChangeEvent, FC, useState } from "react";
import { TextField } from "@mui/material";

interface iSearchBarProps {
  value: string;
  onChange: (e: string) => void;
  name?: string;
}

const SearchBar: FC<iSearchBarProps> = ({ onChange, value, name }) => {
  const [input, setInput] = useState<string>(value);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    onChange(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        type="search"
        name={name}
        label="City Name"
        variant="outlined"
        fullWidth
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for a location"
      />
    </form>
  );
};

export default SearchBar;
