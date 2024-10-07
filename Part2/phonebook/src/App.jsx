import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import phonebookService from './services/phonebook'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    // axios
    //   .get('http://localhost:3001/persons')
    //   .then(response => {
    //     setPersons(response.data)
    //   })

    phonebookService
      .getAll()
      .then(initialPhonebook => { 
        console.log(initialPhonebook)
        setPersons(initialPhonebook)} )
      .catch(error => {console.error("error fetching names", error)})
  }, [])


  const addName = (event) => {
    event.preventDefault()
    const nameExists = persons.some(person => person.name === newName)
    if (newName.length === 0 || newNumber.length ===0 ) { // Check if newName is empty
      return alert('Cannot add an empty name') // Alert if empty
      // Exit the function if empty
    }
    else if (nameExists){
      const findPersonIdByName = (name) => {
        const person = persons.find(person => person.name === name);
        return person ? person.id : null
    }
      if (window.confirm(`${newName} is already added to the phonebook, would you like to replace the old number with a new one?`)) {
        return(
          alterPerson(findPersonIdByName(newName))
          ,setNewName('')
          ,setNewNumber('')
      )
      }
      else {

        
      }
      
      
    
    }
    const nameObject = {
      name: newName,
      number: newNumber,
      id: `${Math.max(...persons.map(person => person.id))+1}`,
    }
    phonebookService
      .create(nameObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
        })
      .catch(error => {
        console.error("Error adding person:", error);
    })
  }

  const handleNewName = (event) =>  setNewName(event.target.value)
  const handleNewNumber = (event) => setNewNumber(event.target.value)
  const handleSearchTerm = (event) => setSearchTerm(event.target.value)
  
  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase()))
  
  const deletePersons = (person) => {
    if (window.confirm(`Do you really want to delete ${person.name}?`)) {
        phonebookService
            .deletePerson(person.id)
            .then(() => {
                // Update the state to remove the person from the list
                setPersons(persons.filter(p => p.id !== person.id));
            })
            .catch(error => {
                console.error("Error deleting person:", error);
            });
    }
  }
  
const alterPerson = id => {
  const url = `http://localhost:3001/persons/${id}`
  const personToChange = persons.find(p => p.id === id)
  const changedPerson = { ...personToChange, number: newNumber }

  console.log(personToChange)
  console.log(changedPerson)

  

  phonebookService
    .update(id, changedPerson )
      .then(returnedPerson => {
      setPersons(persons.map(p => p.id !== id ? p : returnedPerson))
    })
    .catch(error => {
      alert(
        `the person '${personToChange.name}' was already deleted from server`
      )
      
    })
}
  

  return (
    <div>
      <h2>Phonebook</h2>
      {/* <div>
        filter shown with 
        <input value={searchTerm} onChange={handleSearchTerm} />


      </div> */}
      <Filter searchTerm={searchTerm} handleSearchTerm={handleSearchTerm} />



      <h2>add a new</h2>
      {/* <form onSubmit={addName} >
        <div>
          name: <input value = {newName}  onChange={handleNewName}/>
        </div>
        <div>
          number: <input value = {newNumber} onChange={handleNewNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form> */}
      <PersonForm addName={addName} handleNewName={handleNewName} handleNewNumber={handleNewNumber} newName={newName} newNumber={newNumber} />
      <h2>Numbers</h2>
      
      {/* {filteredPersons.map(person => <p>{person.name} {person.number}</p>)} */}
      <Persons key = {filteredPersons.id} filteredPersons = {filteredPersons} deletePersons={deletePersons}/>
      
    </div>
  )
}

export default App