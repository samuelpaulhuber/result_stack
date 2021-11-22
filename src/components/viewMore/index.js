import './viewMore.css';
import { Container, Button } from "react-bootstrap";

function ViewMoreButton(props) {
    return (
        <Container data-testid="view-more">
            <Button variant="outline-info" className="view-more" size="lg" onClick={() => props.onViewMoreClicked()}>
                View More
            </Button>
        </Container>
    );
}

export default ViewMoreButton;