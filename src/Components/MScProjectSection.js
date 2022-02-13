import react from "react";
import { Col, Container, Figure, Row } from "react-bootstrap";

const MScProjectSection = ({
    header,
    body,
    images
}) => {

    let body_sections = body.map(function(o, i){
        return <p>{o}</p>
    });

    let imageDisplays = images.map(function(obj, i) {
        return (
            <Figure>
                <Figure.Image
                    src={process.env.PUBLIC_URL + obj.path}
                />
                <Figure.Caption>
                    {obj.caption}
                </Figure.Caption>
            </Figure>
        )

    })

    return (
        <Container>
            {   imageDisplays.length > 1 ? (
                <Container> 
                    <Row>
                        <Col>
                            <h3>{header}</h3>
                            {body_sections}
                        </Col>
                    </Row>
                    <Row>
                        {imageDisplays.map(function(obj, i){
                            return <Col>{obj}</Col>
                        })}
                    </Row>
                </Container>
            ) : (
                imageDisplays.length == 1 ? (
                    <Row>
                        <Col>
                            <h3>{header}</h3>
                            {body_sections}
                        </Col>
                        <Col>{imageDisplays}</Col>
                    </Row>
                ):(
                    <Row>
                        <Col>
                            <h3>{header}</h3>
                            {body_sections}
                        </Col>
                    </Row>
                )
                

            )}

        </Container>

    )
}

export default MScProjectSection;