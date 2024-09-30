import NumberService from "../services/numbers"

const AddPerson = ({ persons, newName, newNumber, setNewName, setNewNumber, setPersons }) => {

  const update = (id) => {
    const user = persons.find(n => n.id === id)
    const changedInfo = { ...user, number: newNumber }
    NumberService
      .update(id, changedInfo)
      .then(value => {
        setPersons(persons.map(user => user.id !== id ? user : value));
      })
  }

  const addName = (event) => {
    event.preventDefault()
    const nameExists = persons.find(inArray => inArray.name === newName)

    if (nameExists) {
      window.confirm(`${newName} is already added to phonebook, replace the old number with a new one? 🤔`) == true ? update(nameExists.id) : "";
    } else {

      const userObject = {
        name: newName,
        number: newNumber,
      }
      NumberService
        .create(userObject)
        .then(returnedNote => {
          setPersons(persons.concat(returnedNote))
          setNewNumber('')
          setNewName('')
        })
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <form onSubmit={addName}>
      <div>
        name: <input required value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input required value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default AddPerson;