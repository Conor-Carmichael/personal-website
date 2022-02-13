import react from "react";
import { CardGroup, Container } from "react-bootstrap";
import expData from '../Data/experience.json';
import ExperienceListing from "./ExperienceListing";

const Experience = ({}) => {

    let expList = expData.map(function(obj,i){
        return <ExperienceListing 
                    company={obj.company} 
                    title={obj.title} 
                    description={obj.desc} 
                    start={obj.start} 
                    end={obj.end} 
                />
    });

    return (
        <Container>
            <h2>Past Work Experience</h2>
            <CardGroup>
                {expList}
            </CardGroup>

        </Container>
    )

}

export default Experience;