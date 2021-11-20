import { Container, Row } from "react-bootstrap";
import SearchResult from "../searchResult";
import PagingToolbar from "../pagingToolbar";

function ResultsGrid(props) {

    return (
        <Container>
            <Row>
                <SearchResult></SearchResult>
                <SearchResult></SearchResult>
                <SearchResult></SearchResult>
            </Row>
            <Row>
                <PagingToolbar></PagingToolbar>
            </Row>
        </Container>
    );
}
export default ResultsGrid;