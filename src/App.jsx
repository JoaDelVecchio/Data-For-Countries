import { useState, useEffect } from "react";
import countriesServices from "./services/countries";
import Countries from "../components/Countries";
import Form from "../components/Form";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    countriesServices
      .getAll()
      .then((countries) => setCountries(countries))
      .catch((error) => console.log("error baby"));
  }, []);

  return (
    <div>
      <Form filter={filter} handleFilter={handleFilter} />
      <Countries countries={countries} filter={filter} />
    </div>
  );
};

export default App;
