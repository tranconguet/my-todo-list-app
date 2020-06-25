import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://todo-list-ac06b.firebaseio.com/'
}
);

export default instance;