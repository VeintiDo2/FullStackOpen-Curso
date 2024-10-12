
const Filter = ({ handleFilterChange, allCountries, inputCountry }) => {
    const inputFilter = () => {

        if ((Object.values(allCountries).length > 0)) {
            return (<div>
                Country to search:
                <input value={inputCountry} onChange={handleFilterChange} />
            </div>)

        } else {
            return <h2>Loading input...</h2>
        }
    }
    return inputFilter()
}

export default Filter