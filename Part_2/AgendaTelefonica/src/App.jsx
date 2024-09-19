import { useState } from 'react'
import AddPerson from './Components/AddPerson'
import Filter from './Components/Filter'
import ListPersons from './Components/ListPersons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState("")
  const [filterInput, setFilterInput] = useState("")

  const filterPerson = filterInput
    ? persons.filter(person => person.name.toLocaleLowerCase().includes(filterInput.toLocaleLowerCase()))
    : persons

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter
        filterPerson={filterPerson}
        filterInput={filterInput}
        setFilterInput={setFilterInput}
      ></Filter>

      <h2>Add a new</h2>

      <AddPerson
        persons={persons}
        newName={newName}
        newNumber={newNumber}
        setPersons={setPersons}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
      ></AddPerson>

      <h2>Numbers</h2>

      <ListPersons
        filterPerson={filterPerson}
      ></ListPersons>

    </div>
  )
}

export default App