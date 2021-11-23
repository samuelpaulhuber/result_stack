import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './components/searchBar'
import ResultsGrid from './components/resultsGrid';
import { Container } from 'react-bootstrap';
import { searchForUser } from './api/github';
import React, { useState } from 'react';
import ViewMoreButton from './components/viewMore';
import { numberOfResults } from './constants';

function App() {
  const [emailSearchResults, setEmailSearchResults] = useState(0);
  const [viewMoreClicks, setViewMoreClicks] = useState(1);
  const [searchText, setSearchText] = useState('');

  // search for results and update state
  function searchForMatch(text) {
    setSearchText(text);
    setViewMoreClicks(1);
    searchForUser(text, 1, setEmailSearchResults);
  }

  // search for paged results and update click counter
  function viewMoreClicked() {
    const clickCount = viewMoreClicks + 1;
    setViewMoreClicks(clickCount);

    searchForUser(searchText, clickCount, setEmailSearchResults, emailSearchResults.items);
  }

  const numberResults = emailSearchResults?.items?.length;
  const totalCount = emailSearchResults?.total_count;

  return (
    <Container className="app-container" data-testid="main-container">
      <SearchBar searchForMatch={searchForMatch} ></SearchBar>
      <ResultsGrid emailSearchResults={emailSearchResults}></ResultsGrid>
      {numberResults > 0 && viewMoreClicks * numberOfResults < totalCount ?
        <ViewMoreButton onViewMoreClicked={viewMoreClicked}></ViewMoreButton> :
        <></>}
    </Container>

  );
}

export default App;
