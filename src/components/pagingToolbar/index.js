import './pagingToolbar.css';
import { ButtonToolbar, ButtonGroup, Button } from "react-bootstrap";
function PagingToolbar(props) {
    return (
        <ButtonToolbar className="paging-toolbar" aria-label="Toolbar with button groups">
            <ButtonGroup className="me-2" aria-label="First group">
                <Button variant="outline-secondary">Previous</Button>
            </ButtonGroup>
            <ButtonGroup className="me-2" aria-label="Second group">
                <Button variant="outline-secondary">5</Button> <Button variant="secondary">6</Button> <Button variant="secondary">7</Button>
            </ButtonGroup>
            <ButtonGroup aria-label="Third group">
                <Button variant="outline-secondary">Next</Button>
            </ButtonGroup>
        </ButtonToolbar>
    );
}

export default PagingToolbar;