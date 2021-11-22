import { Card, Button, Col, ListGroup } from "react-bootstrap";
import React, { useEffect, useState } from 'react';
import { QueryUserData } from '../../api/github';
import './searchResult.css';

function SearchResult(props) {
    const [userData, setUserData] = useState('');
    var { login } = props.resultData;
    var { name, location, email, created_at, updated_at, avatar_url, public_repos, html_url } = userData;
    
    useEffect(() => {
            QueryUserData(login, setUserData);
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
                            Username: {login}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Email: {email ?? 'Not Public'}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Location: {location}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Public Repos Count: {public_repos}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Last Updated: {new Date(updated_at).toLocaleDateString()}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Created On: {new Date(created_at).toLocaleDateString()}
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