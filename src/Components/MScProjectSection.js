import react from "react";
import { Container } from "react-bootstrap";

const MScProjectSection = ({
    header,
    body,
    images
}) => {

    let body_sections = body.map(function(o, i){
        return <p>{o}</p>
    });

    return (
        <Container>
        <Row>
            <h3>{header}</h3>
            {body_sections}
        </Row>
        </Container>
    )
}

export default MScProjectSection;