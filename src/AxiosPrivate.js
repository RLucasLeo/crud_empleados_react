import axios from 'axios';

const axiosPrivate = axios.create({
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
    }
});
export default axiosPrivate;