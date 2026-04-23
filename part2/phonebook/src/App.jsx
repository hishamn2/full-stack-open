import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
   { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter,setNewFilter] =useState('')
  const HandleNumberChange = (event) =>{
  setNewNumber(event.target.value)
  } 
  const HandleNameChange = (event) => {
  setNewName(event.target.value)
}
const HandleFilterChange = (event) =>{
  setNewFilter(event.target.value)
}

const addName = (event) => {
    event.preventDefault()
    
    // Check if the name exists
    const nameExists = persons.some(person => person.name === newName)
    const numberExists=persons.some(person => person.number===newNumber)

    // The if...else logic
    if (nameExists ) {
      alert(`${newName} is already added to phonebook`)
    }else if(numberExists){
      alert(`${newNumber} is already added to phonebook`)
    }
     else {
      const nameObject = { name: newName, number: newNumber }
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
      setNewFilter('')
    }
  }
  const personsToShow= persons.filter(person => person.name.toLowerCase().startsWith(newFilter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          filter shown with :<input value={newFilter} onChange={HandleFilterChange} />
        </div>
      </form>
      <h2>add a new </h2>
      <form onSubmit={addName}>
        <div>
          name: <input required type="text" value={newName} onChange={HandleNameChange} />
        </div>
        <div>
          number: <input required type="number"value={newNumber}  onChange={HandleNumberChange} />
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map((person) => (
          <li key={person.name}>{person.name} {person.number}</li>
        ))}
      </ul>
    </div>
  )
}

export default App