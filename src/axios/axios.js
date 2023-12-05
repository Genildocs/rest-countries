import axios from 'axios';

const consultCountry = axios.create({
  baseURL: 'https://restcountries.com/v3.1',
});

export default consultCountry;
