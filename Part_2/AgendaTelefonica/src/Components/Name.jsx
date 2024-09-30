import NumberService from '../services/numbers'

const Name = ({ person, setPersons }) => {

  const Eliminate = (id) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      NumberService
        .userDelete(id)
        .then(() => {
          setPersons(person => person.filter(n => n.id !== id));
        })
        .catch(error => {
          alert('Error al eliminar el usuario', error);
        });
    }
  }

  return (
    <li>{person.name} / {person.number} <button onClick={() => Eliminate(person.id)}>Delete</button></li>
  )
}

export default Name