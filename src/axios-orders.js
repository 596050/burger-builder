import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-46a7a.firebaseio.com/'
});

export default instance;