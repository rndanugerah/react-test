import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api', // ubah sesuai dengan alamat API kamu
});

export default instance;
