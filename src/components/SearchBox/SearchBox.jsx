const SearchBox = ({ filter, onChangeFilter }) => {
  return (
    <div>
      <input type="text" value={filter} onChange={onChangeFilter} />
    </div>
  );
};

export default SearchBox;
