import { Container, Row } from "react-bootstrap";
import SearchResult from "../searchResult";

function ResultsGrid(props) {

    return (
        <Container data-testid="results-grid">
            {props.emailSearchResults?.items?.length > 0 ?
                <Row>
                    {props.emailSearchResults.items.map((item) => {
                        return <SearchResult key={item.id} resultData={item}></SearchResult>
                    })}
                </Row> :
                !props.emailSearchResults ?
                    <h2>Search to Get Started</h2>
                    : <h2>No Results</h2>
            }
        </Container>
    );
}
export default ResultsGrid;