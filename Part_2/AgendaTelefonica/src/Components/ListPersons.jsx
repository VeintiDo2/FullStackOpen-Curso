import Name from "./Name"

const ListPersons = ({filterPerson, setPersons}) => {
    return(
        <ul>
        {filterPerson.map((person) => (
          <Name key={person.id} person={person} setPersons={setPersons}></Name>
        ))}
      </ul>
    )
}

export default ListPersons