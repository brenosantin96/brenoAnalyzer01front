import axios from 'axios';


const baseURL = process.env.NEXT_PUBLIC_BASEURL;

const API = axios.create({
  baseURL: `${baseURL}`,
  
});


export default API;
