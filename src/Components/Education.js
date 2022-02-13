import react from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Component } from "react/cjs/react.production.min";

import postgradCourses from '../Data/postgraduate_courses.json';
import undergradCourses from '../Data/undergraduate_courses.json';

class Education extends Component {

    render() {
        
        let undergradList = undergradCourses.map(function(obj, i){
            return <li><i>{obj.season.charAt(0).toUpperCase()} {obj.year}</i> {obj.department} {obj.course_number}: {obj.course_title}</li>
        })

        let postgradList = postgradCourses.map(function(obj, i ) {
            return <li><i>{obj.season.charAt(0).toUpperCase()} {obj.year}</i> {obj.department} {obj.course_title}</li>
        })

        return (
            <Container>
                <Row>
                    <Col >
                        <h2>University of Massachusetts Amherst</h2>
                        <h4><i>Bachelors of Science, Computer Science</i></h4>
                        <ul>{undergradList}</ul>
                    </Col>
                    <Col>
                        <h2>University of Glasgow</h2>
                        <h4><i>Masters of Science, Data Science</i></h4>
                        <ul>{postgradList}</ul>
                    </Col>
                </Row>
                
            </Container>
        )
    }
}

export default Education;