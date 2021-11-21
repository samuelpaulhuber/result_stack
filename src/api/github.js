import axios from 'axios';

const apiUrl = 'https://api.github.com/search/users?q=';

function QueryByName(searchString, setNameResults){
    if(!searchString){
        return null;
    }
    
    searchString = encodeURI(searchString);

    axios.get(`${apiUrl}fullname:${searchString}`).then((response) => {
        setNameResults(response.data);
    });
}

function QueryForUser(searchString, pageNumber, setEmailResults, results){

    if(!searchString){
        return null;
    }
    
    var url = encodeURI(`${apiUrl}${searchString}&page=${pageNumber}&per_page=3`);

    axios.get(url).then((response) => {
        if(results){
            response.data.items = [...results, ...response.data.items];
        }
        setEmailResults(response.data);
    });
}

export default QueryForUser