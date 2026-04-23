import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Persons  from './Components/Persons'
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
      
      <Filter newFilter={newFilter} HandleFilterChange={HandleFilterChange} />

      <h3>Add a new</h3>
      
      <PersonForm 
        addName={addName}
        newName={newName}
        HandleNameChange={HandleNameChange}
        newNumber={newNumber}
        HandleNumberChange={HandleNumberChange}
      />

      <h3>Numbers</h3>
      
      <Persons personsToShow={personsToShow} />
    </div>
  )
}

export default App