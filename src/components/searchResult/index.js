import { Card, Button, Col, ListGroup } from "react-bootstrap";
import logo from '../../logo.svg';
import './searchResult.css';

function SearchResult(props) {
    var { login, avatar_url, html_url, followers_url, following_url, starred_url, repos_url } = props.resultData;
    return (
        <Col className='result-card' xs={6} md={4}>
            <Card>
                <Card.Img variant="top" src={avatar_url} />
                <Card.Body>
                    <Card.Title>{login}</Card.Title>
                    <Card.Text>
                        <ListGroup>
                            <ListGroup.Item>
                                <a href={followers_url} target="_blank">Followers</a>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <a href={following_url} target="_blank">Following</a>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <a href={starred_url} target="_blank">Starred Projects</a>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <a href={repos_url} target="_blank">Repositories</a>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Text>
                    <Button
                        className="card-button"
                        variant="outline-primary"
                        onClick={() => window.open(html_url, "_blank")}
                    >Visit Profile</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}
export default SearchResult;