// Write your Character component here
import React from 'react';

const Character = (props) => {
    console.log(props);


    return(
            <h2 className="character">{ props.character.name }</h2>
    )
}

export default Character;