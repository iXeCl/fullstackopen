import { useState } from "react"

const Persons = ({filteredPersons,deletePersons}) => 
    filteredPersons.map(person => 
    <p key={person.id}>{person.name} {person.number} <button onClick={() => 
        deletePersons(person)}>Delete</button></p>
)

export default Persons