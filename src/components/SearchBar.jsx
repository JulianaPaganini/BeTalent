import { SearchContainer, SearchInput, SearchIcon } from "../styles/SearchBarStyles";



const SearchBar = ({ search, setSearch }) => {
  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Pesquisar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <SearchIcon />
    </SearchContainer>
  );
};

export default SearchBar;
