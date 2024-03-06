import { ChangeEvent, SyntheticEvent, useState } from 'react';
import './App.css';
import CardList from './Component/CardList/CardList';
import Search from './Component/Search/Search';
import { CompanySearch } from './company';
import { searchCompanies } from './api';
import ListPortfolio from './Component/Portfolio/ListPortfolio/LstPortfolio';

function App() {

  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleSearchChange  = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    console.log(e);
    //Arrays are tricky to update. Please wait till next video.
  };

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchCompanies(search);
    //setServerError(result.data);
    if (typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
    }
  };

  
  return (
    <div className="App">
     <Search
        onSearchSubmit={onSearchSubmit}
        search={search}
        handleSearchChange={handleSearchChange}
      />

      <ListPortfolio />

      <CardList
        searchResults={searchResult}
        onPortfolioCreate={onPortfolioCreate}
      />
      
      {serverError && <div>Unable to connect to API</div>}
      {/* {serverError ? <div>Connected</div> : <div>Unable to connect to api</div>} */}
    </div>
  );
}

export default App;
