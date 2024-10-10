import axios from "axios";
const countriesURL = "https://studies.cs.helsinki.fi/restcountries/api/name";
const countriesURLAll = "https://studies.cs.helsinki.fi/restcountries/api/all";

const getCountry = (country) => {
    const request = axios.get(`${countriesURL}/${country}`)
    return request.then(response => response.data)
  }

const getAll = () => {
  const request = axios.get(countriesURLAll)
  return request.then(response => response.data)
}

export default { getCountry, getAll }