import React from 'react';

const Headshot = ({size}) => {
    return (
        <img src='./public/headshot.jpg' width={size.width} height={size.height}></img>
    )
}

export default Headshot