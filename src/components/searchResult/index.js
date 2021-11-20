import { Card, Button, Col } from "react-bootstrap";
import logo from '../../logo.svg';
import './searchResult.css';

function SearchResult(props) {
    return (
        <Col xs={6} md={4}>
            <Card>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                    <Card.Title>Username</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button className="card-button" variant="outline-primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}
export default SearchResult;