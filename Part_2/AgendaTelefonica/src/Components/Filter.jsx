const Filter = ({filterInput, setFilterInput}) => {

    const handleFilterChange = (event) => {
        setFilterInput(event.target.value)
    }

    return (
        <div>Filter shown with<input value={filterInput} onChange={handleFilterChange} /></div>
    )
}

export default Filter;