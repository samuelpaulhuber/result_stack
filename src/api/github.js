import axios from 'axios';
import { numberOfResults } from '../constants';
const apiUrl = 'https://api.github.com/';

// searches for users that match the given search string
function searchForUser(searchString, pageNumber, setEmailResults, results) {
    if (!searchString) {
        return null;
    }

    const url = encodeURI(`${apiUrl}search/users?q=${searchString}&page=${pageNumber}&per_page=${numberOfResults}`);

    axios.get(url).then((response) => {
        if (results) {
            // if we already have results add the new ones
            response.data.items = [...results, ...response.data.items];
        }
        setEmailResults(response.data);
    });
}

// gets particular user based on username
function getUserInfo(user, setUserData) {
    if (!user)
        return;
    const url = encodeURI(`${apiUrl}users/${user}`)
    axios.get(url).then((response) => {
        setUserData(response.data);
    });
}

export {
    searchForUser,
    getUserInfo
}