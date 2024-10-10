const Languages = ({ country }) => {
    const languageList = country.languages
        ? Object.values(country.languages).map((language, index) => ( //Nota: Object.values puede servir para recorre un objeto como en el caso anterior
            <li key={index}>{language}</li>
        ))
        : null; //No devuelve nada hasta que se introduzca algo en el input.

    return (
        <ul>
            {languageList}
        </ul>
    );
}

export default Languages;

//Se utiliza una operación ternaria para evitar caidas, ya que al principio no va a recibir nada (null).