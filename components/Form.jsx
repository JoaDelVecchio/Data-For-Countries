const Form = ({ filter, handleFilter }) => {
  return (
    <form>
      <label htmlFor="filterBar">Find Countries</label>
      <input
        id="filterBar"
        name="filterBar"
        value={filter}
        onChange={handleFilter}
        type="text"
        placeholder="Enter country name"
      />
    </form>
  );
};

export default Form;
