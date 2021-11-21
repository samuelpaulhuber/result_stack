import { Container, InputGroup, FormControl, Row, Button } from "react-bootstrap";
import React, { useState } from 'react';

function SearchBar(props) {
    return (
        <Container>
            <Row>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Search by Name or Email"
                        aria-label="Search"
                        aria-describedby="search-addon"
                        onInput={e => props.setSearchValue(e.target.value)}
                    />
                    <Button onClick={() => props.onSearchClicked()} variant="outline-secondary" id="search-addon">
                        Search
                    </Button>
                </InputGroup>
            </Row>
        </Container>
    );
}
export default SearchBar;