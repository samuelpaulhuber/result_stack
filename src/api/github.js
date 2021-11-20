import axios from 'axios';

const apiUrl = 'https://api.github.com/search/users?q=';

function QueryByName(searchString, setNameResults){
    if(!searchString){
        return null;
    }
    
    axios.get(`${apiUrl}fullname:${searchString}`).then((response) => {
        setNameResults(response.data);
    });
}

function QueryByEmail(searchString, setEmailResults){
    if(!searchString){
        return null;
    }

    axios.get(`${apiUrl}email:${searchString}`).then((response) => {
        setEmailResults(response.data);
    });
}

export default QueryByEmail