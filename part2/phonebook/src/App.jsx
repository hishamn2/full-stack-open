import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Persons  from './Components/Persons'
import { useState,useEffect } from 'react'
import personsService from './services/persons'
import Notification from './Components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter,setNewFilter] =useState('')
  const [successMessage,setSuccessMessage]=useState(null)
  const [errorMessage,setErrorMessage]=useState(null)
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

    
   if (nameExists) {
      if (window.confirm(`${newName} is already added to phonebook. Replace the old number with a new one?`)) {
        
        personsService.update(nameExists.id, { ...nameExists, number: newNumber })
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== nameExists.id ? person : returnedPerson))
            setNewName('')
            setNewNumber('')
            setNewFilter('')
            
            setSuccessMessage(`Updated ${returnedPerson.name}'s number`)
            
            setTimeout(() => {
              setSuccessMessage(null)
            }, 3000)
          }) 
          .catch(error => { 
          
            setErrorMessage(`Information of ${nameExists.name} has already been removed from server`)
            
            // 2. Hide the error after 5 seconds
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
            
            // 3. Remove the ghost person from the screen!
            setPersons(persons.filter(p => p.id !== nameExists.id))
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
     setSuccessMessage(`Added ${returnedPerson.name}`)

        
        setTimeout(() => {
          setSuccessMessage(null)
        }, 3000)
      })

       
      }
    }
    const deletePerson = (id, name) =>{
       if (window.confirm(`Delete ${name} ?`)){
        personsService.remove(id).then(()=>{
          setPersons(persons.filter(person => person.id !== id))
        setSuccessMessage(`Deleted ${name}`)

        
        setTimeout(() => {
          setSuccessMessage(null)
        }, 3000)
        })
       }
    }
  
  const personsToShow= persons.filter(person => person.name.toLowerCase().startsWith(newFilter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={successMessage} type="success" />
      <Notification message={errorMessage} type="error" />
      
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