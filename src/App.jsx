import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { useContext } from "react";
import { useEffect, useState } from "react";
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import { searchContext } from "./contexts/SearchContext";

function App() {
  const [fetchedData, setFetchedData] = useState([]);
  const { info, results } = fetchedData;
  const { pageNumber,  search, species, gender, status } = useContext(searchContext)



  const url = `https://rickandmortyapi.com/api/character/`
  const query = `?page=${pageNumber}&name=${search}&species=${species}&gender=${gender}&status=${status}`
  const api = url + query;

  useEffect(() => {
    (async () => {
      const data = await fetch(api).then(res => res.json());
      setFetchedData(data);
    })()
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center ubuntu my-4">Rick & Morty <span className="text-primary">WiKi</span> </h1>

      <Search />

      <div className='container'>
        <div className="row">
          <Filters />
          <div className='col-8'>
            <div className="row">
              <Cards results={results} />
            </div>
          </div>

        </div>
      </div>
      <Pagination info={info}/>
    </div>
  );
}

export default App;
