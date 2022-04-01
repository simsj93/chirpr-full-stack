import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import ChirpCard from "./components/ChirpCard.jsx";
import "babel-polyfill";

const App = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [chirps, setChirps] = useState([]);

  useEffect(() => {
    getChirps();
  }, []);

  const handleDeleteChirp = (id) => {
    fetch(`http://localhost:3000/api/chirps/${id}`, {
      method: 'DELETE'
    });
    getChirps();
  }; 

  
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);
  const handleChirpSubmit = (e) => {
    e.preventDefault();
    postChirp();
  };

const handleEditChirp = (id) => {
    const userData = 
    fetch(`http://localhost:3000/api/chirps/${id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(userData)
    })
  }
    

  const getChirps = () => {
    fetch('http://localhost:3000/api/chirps/')
      .then(res => res.json())
      .then(res => setChirps(res))
  }

  const postChirp = async () => {
    console.log('test');
    const userData = {
      userid: 6,
      content: message,
      location: 'Secret Test Location'
    };
    try {
      const add = await fetch('http://localhost:3000/api/chirps/', {
        method: "POST",
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(userData)
      })
    } catch {
      console.log(e);
    }

  };

  return (
    <>
      <div className="container text-body text-center">
        <div className="row">
          <div className="col-12 p-0">
            <nav>
              <img
                className="banner"
                src="./assets/banner.jpg"
                alt="logo for awesome site yay"
              />
              <h1>Ghibli Chirpr</h1>
            </nav>
          </div>
        </div>
        <div className="row">
          <form>
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control mb-1"
                placeholder="Username"
                aria-label="Username"
                value={username}
                onChange={handleUsernameChange}
              />
              <textarea
                className="form-control mb-2"
                aria-label="With textarea"
                placeholder="(500 characters max)"
                value={message}
                onChange={handleMessageChange}
                cols="30"
                rows="10"
              ></textarea>
              <button className="btn btn-dark" onClick={handleChirpSubmit}>
                Chirp It!
              </button>
            </div>
          </form>
          <div className=" chirps mb-4">
            {chirps.map((chirp) => (
              <ChirpCard
                key={chirp.id}
                username={chirp.name}
                message={chirp.content}
                created={chirp._created}
                location={chirp.location}
                id={chirp.id}
                handleDeleteChirp={handleDeleteChirp}
                handleEditChirp={handleEditChirp}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
