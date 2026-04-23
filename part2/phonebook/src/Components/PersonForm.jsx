const PersonForm = ({ addName, newName, HandleNameChange, newNumber, HandleNumberChange }) => {
  return (
    <form onSubmit={addName}>
      <div>
        name: <input required type="text" value={newName} onChange={HandleNameChange} />
      </div>
      <div>
        number: <input required type="number" value={newNumber} onChange={HandleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}
export default PersonForm