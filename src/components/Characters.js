import React, { useState, useEffect } from 'react';
import Character from './Character.js'

const Characters = (props) => {
    console.log(props)
    const characters = props.characters


    return (
    <div>
        {
            characters.map((character) => (
                <Character character={character} />
            ))
        }
    </div>)
}

export default Characters;