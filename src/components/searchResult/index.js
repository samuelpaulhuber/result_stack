import { Card, Button, Col, ListGroup, Row } from "react-bootstrap";
import React, { useEffect, useState } from 'react';
import { getUserInfo } from '../../api/github';
import './searchResult.css';

function SearchResult(props) {
    const [userData, setUserData] = useState('');
    const { login } = props.resultData;
    const { name, location, email, created_at, updated_at, avatar_url, public_repos, html_url } = userData;

    // whenever login changes we need to get the user's data
    useEffect(() => {
        getUserInfo(login, setUserData);
    }, [login]);

    return (
        <Col className='result-card' data-testid='result-column' xs={6} md={4}>
            {userData ?
                <Card>
                    <Card.Img variant="top" src={avatar_url} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>

                        <ListGroup>
                            <ListGroup.Item>
                                <Row>
                                    <Col className="info-label">
                                        Username:
                                    </Col>
                                    <Col className="info-value">
                                        {login}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col className="info-label">
                                        Email:
                                    </Col>
                                    <Col className="info-value">
                                        {email ?? '------'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col className="info-label">
                                        Location:
                                    </Col>
                                    <Col className="info-value">
                                        {location}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col className="info-label">
                                        Public Repos Count:
                                    </Col>
                                    <Col className="info-value">
                                        {public_repos}
                                    </Col>
                                </Row>

                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col className="info-label">
                                        Last Updated
                                    </Col>
                                    <Col className="info-value">
                                        {new Date(updated_at).toLocaleDateString()}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col className="info-label">
                                        Created On:
                                    </Col>
                                    <Col className="info-value">
                                        {new Date(created_at).toLocaleDateString()}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                        <Button
                            className="card-button"
                            variant="outline-primary"
                            onClick={() => window.open(html_url, "_blank")}
                        >Visit Profile</Button>
                    </Card.Body>
                </Card> :
                <></>}
        </Col>

    );
}
export default SearchResult;