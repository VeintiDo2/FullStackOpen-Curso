const ContriesList = ({ allCountries, inputCountry }) => {

    const filterCountries = inputCountry
        ? allCountries.filter(countryFilter => countryFilter.name?.common.toLocaleLowerCase().includes(inputCountry.toLocaleLowerCase()))
        : ""

    const moreThan10 = Object.values(filterCountries).length <= 10;

    const EveryContries = () => {
        if (moreThan10) {
            return (Object.values(filterCountries).map(country => //NOTA SUPER IMPORTANTE: OBJECT.VALUES SIRVE PARA CONVERTIR UN OBJETO A UN ARRAY.
                <li key={country.cca2}>
                    {country.name?.common} <button  >Show</button>
                </li>
            ))
        } else {
            return <h2>Too many matches, specify another filter</h2>
        }
    }

    return (
        <ul>
            {EveryContries()}
        </ul>
    );
}

export default ContriesList;