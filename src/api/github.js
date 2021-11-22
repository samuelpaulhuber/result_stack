import axios from 'axios';

const apiUrl = 'https://api.github.com/';

function QueryForUser(searchString, pageNumber, setEmailResults, results){

    if(!searchString){
        return null;
    }
    
    var url = encodeURI(`${apiUrl}search/users?q=${searchString}&page=${pageNumber}&per_page=3`);

    axios.get(url).then((response) => {
        if(results){
            response.data.items = [...results, ...response.data.items];
        }
        setEmailResults(response.data);
    });
}

function QueryUserData(user, setUserData){
    if(!user)
        return;
    var url = encodeURI(`${apiUrl}users/${user}`)
    axios.get(url).then((response) => {
        setUserData(response.data);
    });
}

export {
    QueryForUser,
    QueryUserData
}