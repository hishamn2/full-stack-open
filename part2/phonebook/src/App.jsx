import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Persons  from './Components/Persons'
import { useState,useEffect } from 'react'
import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter,setNewFilter] =useState('')
   useEffect (() =>{
    personsService.getAll().then(initialPersons =>
      setPersons(initialPersons))
  }
, [])
   
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
    const nameExists = persons.find(person => person.name === newName)
    const numberExists=persons.find(person => person.number===newNumber)

    
    if (nameExists ) {
      if(window.confirm(`${newName} is already added to phonebook. Replace the old number with a new one?`)){
      personsService.update(nameExists.id,{...nameExists,number:newNumber}).then(returnedPerson =>{
        setPersons(persons.map(person => person.id !==nameExists.id ? person : returnedPerson))
        setNewName('')
        setNewNumber('')
        setNewFilter('')
      })
    }
  }
    
    else if(numberExists){
      alert(`${newNumber} is already added to phonebook`)
    }
     else {
      const nameObject = { name: newName, number: newNumber }
      personsService.create(nameObject).then(returnedPerson=>{
        setPersons(persons.concat(returnedPerson))
         setNewName('')
        setNewNumber('')    
        setNewFilter('')
      })

       
      }
    }
    const deletePerson = (id, name) =>{
       if (window.confirm(`Delete ${name} ?`)){
        personsService.remove(id).then(()=>{
          setPersons(persons.filter(person => person.id !== id))
        })
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
      
      <Persons personsToShow={personsToShow} deletePerson={deletePerson} />
    </div>
  )
}

export default App