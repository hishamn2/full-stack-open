const Filter = ({ newFilter, HandleFilterChange }) => {
  return (
    <div>
      filter shown with: <input value={newFilter} onChange={HandleFilterChange} />
    </div>
  )
}

export default Filter