import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './components/searchBar'
import ResultsGrid from './components/resultsGrid';
import { Container } from 'react-bootstrap';
import QueryByEmail from './api/github';
import React, { useState } from 'react';

function App() {
  const [emailSearchResults, setEmailSearchResults] = useState(0);

  function searchClicked(){
    QueryByEmail('samhuber84', setEmailSearchResults);
  }
  return (
    <Container className="app-container">
        <SearchBar onSearchClicked={searchClicked}></SearchBar>
        <ResultsGrid emailSearchResults={emailSearchResults}></ResultsGrid>
    </Container>

  );
}

export default App;
