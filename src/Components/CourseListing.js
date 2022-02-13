import React from "react";

const CourseListing = ({year, semester, courses}) => {

    

    return (
        <h3>{semester} {year}</h3>
        {
            courses.map(function(object, i){
                return <li>{object.department} {object} </li>
            })
        }

    )
}

export default CourseListing