const AddPerson = ({persons, newName, newNumber ,setNewName, setNewNumber, setPersons}) => {

    const addName = (event) => {
        event.preventDefault()
    
        if (persons.find(inArray => inArray.name === newName) || persons.find(inArray => inArray.number === newNumber)) {
          alert(`${newName} ya esta registrado o el número "${newNumber}" ya esta en uso.`)
        } else {
    
          const userObject = {
            name: newName,
            number: newNumber,
            id: persons.length + 1
          }
          setPersons(persons.concat(userObject))
          setNewName("")
          setNewNumber("")
        }
      }
    
      const handleNameChange = (event) => {
        setNewName(event.target.value)
      }
    
      const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
      }

    return(
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