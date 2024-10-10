import Languages from "./Languages";

const CountryInfo = ({ country }) => {
    return (
        <div>
            <h1>Name: {country.name?.common}</h1>
            <h2>Region: {country.continents}</h2>
            <h2>Capital: {country.capital}</h2>
            <h2>Area: {country.area}</h2>
            <h2>FIFA: {country.fifa}</h2>

            <Languages country={country}></Languages>

            <img src={country.flags?.png} />

        </div>
    );
}

export default CountryInfo;