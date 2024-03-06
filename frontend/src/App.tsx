import { ChangeEvent, SyntheticEvent, useState } from 'react';
import './App.css';
import CardList from './Component/CardList/CardList';
import Search from './Component/Search/Search';
import { CompanySearch } from './company';
import { searchCompanies } from './api';

function App() {

  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>();
  const [serverError, setServerError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  };

  const onClick = async (e: SyntheticEvent) => {
    const result = await searchCompanies(search);
    //setServerError(result.data);
    if (typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
    }
    console.log(searchResult);
  }
  
  return (
    <div className="App">
      <Search onClick={onClick} search={search} handleChange={handleChange} />
      <CardList />
    </div>
  );
}

export default App;
