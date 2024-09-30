import { useState, useEffect } from 'react'
import NumberService from './services/numbers'
import AddPerson from './Components/AddPerson'
import Filter from './Components/Filter'
import ListPersons from './Components/ListPersons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState("")
  const [filterInput, setFilterInput] = useState("")
  
  useEffect(() => {
    NumberService
      .getAll()
      .then(initialNotes => {
        setPersons(initialNotes)
      })
  }, [])

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
        setPersons={setPersons}
      ></ListPersons>

    </div>
  )
}

export default App