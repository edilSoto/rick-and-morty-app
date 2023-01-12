import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { useEffect, useState } from "react";
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";


function App() {

  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, setFetchedData] = useState([]);
  const {info, results} = fetchedData;

  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(() => {

    (async () => {
      const data = await fetch(api).then(res => res.json());
      setFetchedData(data);
    })()

  }, [api])

  return (
    <div className="App">
      <h1 className="text-center ubuntu my-4">Rick & Morty <span className="text-primary">WiKi</span> </h1>
      <div className='container'>
        <div className="row">
          
          <div className='col-3 ='>
            <Filters />
          </div>

          <div className='col-8'>
            <div className="row">
              <Cards  results={results} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
