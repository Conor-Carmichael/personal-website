import react from "react";
import { Card, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const ExperienceListing = ({company, title, description, start, end}) => {
    let hasEnd = end != null
    console.log(hasEnd)
    let date_string = hasEnd ? `From ${start.M} ${start.Y} to ${end.M} ${end.Y}` : `Working since ${start.M} ${start.Y}`
    let desc = description.map(function(obj, i){
        return  <ListGroupItem>{obj}</ListGroupItem>
    });
    return (
        <Row>
            <Card>
                <Card.Body>
                    <Card.Header>
                        {company}: {date_string}
                    </Card.Header>
                    <Card.Title>
                        {title}
                    </Card.Title>
                    <Card.Text>
                        <ListGroup>{desc}</ListGroup>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Row>
    )

}

export default ExperienceListing;