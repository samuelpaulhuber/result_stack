import { Container, InputGroup, FormControl, Row } from "react-bootstrap";
import _ from 'lodash';

function SearchBar(props) {
    // debounce the search so we aren't constantly sending requests
    const debounceSearch = _.debounce((e) => {
        props.searchForMatch(e.target.value);
    }, 300);

    return (
        <Container data-testid="searchbar-container">
            <Row>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Search by Name or Email"
                        aria-label="Search"
                        aria-describedby="search-addon"
                        onInput={e => { debounceSearch(e) }}
                    />
                </InputGroup>
            </Row>
        </Container>
    );
}
export default SearchBar;