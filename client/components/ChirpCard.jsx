import React from 'react'

const ChirpCard = ({username, message, created, id, location, handleDeleteChirp, handleEditChirp }) => {
    return (
        <>
        <div className='card m-2'> 
            <h3>{username}</h3>
            <p>{message}</p>
            <small>{location}</small> 
            <input type="text" placeholder="Edit Chirp"></input>
            <button className="spbtn btn btn-light" onClick={() => handleEditChirp(id)}>Edit</button>
            <button className="spbtn btn btn-light" onClick={() => handleDeleteChirp(id)}>Delete</button>
            <div className='mt-1'>
           
            </div>
             <small>{created}</small>
            
        </div>
        </>
    )
}

export default ChirpCard;