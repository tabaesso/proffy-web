import axios from 'axios';
import 'dotenv/config';

const api = axios.create({
    baseURL: process.env.PROFFY_SERVER,
});

export default api;