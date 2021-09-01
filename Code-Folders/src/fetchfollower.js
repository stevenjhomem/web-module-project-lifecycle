import axios from 'axios';

const fetchFollower = (url) => {
    return axios.get(url)
    .then(response => {
        return response;
    });
}

export default fetchFollower;