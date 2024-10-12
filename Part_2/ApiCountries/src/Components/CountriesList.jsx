import CountriesService from "../Services/Service";

const ContriesList = ({ allCountries, inputCountry, setCountry, setWeather }) => {

    const filterCountries = inputCountry
        ? allCountries.filter(countryFilter => countryFilter.name?.common.toLocaleLowerCase().includes(inputCountry.toLocaleLowerCase()))
        : []

    const moreThan10 = Object.values(filterCountries).length <= 10;

    const searchCountry = (countryName) => {
        CountriesService
            .getCountry(countryName)
            .then(value => {
                setCountry(value);
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }

    const searchWeather = (capitalName) => {
        CountriesService
            .getWeather(capitalName)
            .then(value => {
                setWeather(value)
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }

    const countryAndWeather = (countryName, capitalName) => {
        searchCountry(countryName)
        searchWeather(capitalName)
    }

    const EveryContries = () => {
        if (moreThan10) {
            return (Object.values(filterCountries).map(country => //NOTA SUPER IMPORTANTE: OBJECT.VALUES SIRVE PARA CONVERTIR UN OBJETO A UN ARRAY.
                <li key={country.cca2}>
                    {country.name?.common} <button onClick={() => countryAndWeather(country.name?.common, country.capital)}>Show</button>
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