import axios from 'axios';

const axiosPrivate = axios.create();

axiosPrivate.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authToken')}`;

export default axiosPrivate;