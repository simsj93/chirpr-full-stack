import React from 'react'

const ChirpCard = ({username, message, created, id, handleDeleteChirp, location }) => {
    return (
        <>
        <div className='card m-2'> 
            <h3>{username}</h3>
            <p>{message}</p>
            <small>{location}</small>
            <small>{created}</small>
            <button className="spdel btn btn-light" onClick={() => handleDeleteChirp(id)}>Delete</button>
        </div>
        </>
    )
}

export default ChirpCard;