import axios from 'axios';

const instance = axios.create({
  baseURL:"https://aidia-ab0dd.firebaseio.com/"  
})

export default instance;