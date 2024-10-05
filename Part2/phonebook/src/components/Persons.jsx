import { useState } from "react"

const Persons = ({filteredPersons}) => filteredPersons.map(person => <p key={person.id}>{person.name} {person.number}</p>)

export default Persons