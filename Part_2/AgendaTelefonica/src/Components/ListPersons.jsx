import Name from "./Name"

const ListPersons = ({filterPerson}) => {

    return(
        <ul>
        {filterPerson.map((person) => (
          <Name key={person.id} person={person}></Name>
        ))}
      </ul>
    )
}

export default ListPersons