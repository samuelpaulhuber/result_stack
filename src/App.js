import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './components/searchBar'
import ResultsGrid from './components/resultsGrid';
import { Container } from 'react-bootstrap';
import QueryForUser from './api/github';
import React, { useState } from 'react';
import { Button, Row } from "react-bootstrap";

function App() {
  const [emailSearchResults, setEmailSearchResults] = useState(0);
  const [viewMoreClicks, setViewMoreClicks] = useState(1);
  const [searchText, setSearchText] = useState('');
  
  function searchClicked(){
    setViewMoreClicks(1);
    setEmailSearchResults(null);
    QueryForUser(searchText, 1, setEmailSearchResults);
  }

  function viewMoreClicked() {
    var clickCount = viewMoreClicks + 1;
    setViewMoreClicks(clickCount);

    QueryForUser(searchText, clickCount, setEmailSearchResults, emailSearchResults.items);
  }

  let numberResults = emailSearchResults?.items?.length;
  let totalCount = emailSearchResults?.total_count;
  return (
    <Container className="app-container">
        <SearchBar onSearchClicked={searchClicked} setSearchValue={setSearchText}></SearchBar>
        <ResultsGrid emailSearchResults={emailSearchResults}></ResultsGrid>
        {numberResults > 0 && viewMoreClicks * 3 < totalCount? 
          <Container>
            <Button variant="outline-info" className="view-more" size="lg" onClick={() => viewMoreClicked()}>
            View More
          </Button> 
          </Container>: 
          <></>}
        
    </Container>

  );
}

export default App;
