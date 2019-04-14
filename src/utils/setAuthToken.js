import Axios from 'axios';

// if logged in add token to the Authorization header in  every request.
const setAuthToken = token => {
    if (token) {
        Axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete Axios.defaults.headers.common['Authorization'];
    }
};

export default setAuthToken;