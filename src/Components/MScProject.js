import react from "react";
import { Container, Figure, Image } from "react-bootstrap";
import projectData from '../Data/msc_project.json'
import MScProjectSection from "./MScProjectSection";

const MScProject = () => {

    let sections = projectData.sections.map(function(obj, i){
        return <MScProjectSection 
            header={obj.header}
            body={obj.paras}
            images={obj.images}
        />
    });

    return (
        <Container>
            <Figure >
                <Figure.Image
                    src={process.env.PUBLIC_URL + projectData.banner_img} 
                    width="100%"
                />
                <Figure.Caption>
                    One frame from a mapping of the museum environment.
                </Figure.Caption>
            </Figure>
            <h2>{projectData.title}</h2>
            {sections}
        </Container>
    )
}

export default MScProject;