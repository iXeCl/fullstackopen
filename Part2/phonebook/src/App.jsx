import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const nameExists = persons.some(person => person.name === newName)
    if (newName.length === 0) { // Check if newName is empty
      return alert('Cannot add an empty name') // Alert if empty
      // Exit the function if empty
    }
    else if (nameExists){
      setNewName('')
      return alert(`${newName} is already added to phonebook`)
    
    }
    const nameObject = {
      name: newName,
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
  }

  const handleNewName = (event) =>  setNewName(event.target.value)
  

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName} >
        <div>
          name: <input value={newName}  onChange={handleNewName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      
      {persons.map(names => <p>{names.name}</p>)}
      
    </div>
  )
}

export default App