import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', 
      number:'040-1234567'},
  ]) 
  
  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const nameExists = persons.some(person => person.name === newName)
    if (newName.length === 0 || newNumber.length ===0 ) { // Check if newName is empty
      return alert('Cannot add an empty name') // Alert if empty
      // Exit the function if empty
    }
    else if (nameExists){
      setNewName('')
      setNewNumber('')
      return alert(`${newName} is already added to phonebook`)
    
    }
    const nameObject = {
      name: newName,
      number: newNumber,
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNewName = (event) =>  setNewName(event.target.value)
  const handleNewNumber = (event) => setNewNumber(event.target.value)
  
  

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName} >
        <div>
          name: <input value = {newName}  onChange={handleNewName}/>
        </div>
        <div>
          number: <input value = {newNumber} onChange={handleNewNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      
      {persons.map(person => <p>{person.name} {person.number}</p>)}
      
    </div>
  )
}

export default App