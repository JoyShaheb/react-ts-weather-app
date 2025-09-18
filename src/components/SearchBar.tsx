import { Input, Label } from "./ui";

export const SearchBar = () => {
  return (
    <div className="flex flex-col gap-1 w-[310px]">
      <Label htmlFor="searchBar">Search Location</Label>
      <Input
        id="searchBar"
        type="text"
        placeholder="search for a city name e.g. London"
      />
    </div>
  );
};
