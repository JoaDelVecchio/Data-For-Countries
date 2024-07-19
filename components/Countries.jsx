const Countries = ({ countries, filter }) => {
  const filteredCountries =
    filter === ""
      ? countries
      : countries.filter(({ name }) =>
          name.common.toLowerCase().includes(filter.toLowerCase())
        );

  return (
    <ul>
      {filteredCountries.map(({ cca3, name }) => (
        <li key={cca3}>{name.common}</li>
      ))}
    </ul>
  );
};

export default Countries;
