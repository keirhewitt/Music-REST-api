import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Container, Card, Row } from 'react-bootstrap'

import LP from 'components/LP';

function App() {
    
  const [artist, setArtist] = useState('');
  const [title, setTitle] = useState('');
  const [release, setRelease] = useState('');
  const [res, setRes] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/swordfishtrombone/api/v1/music/lp")
    .then((response) => response.json())
    .then((response) => {
      setRes(response);
      setError(null);
    })
    .catch(setError);
  }, []);

  if (error) return <p>An error occurred</p>

  return (
    <div className="App">
      {res.map(({artist, title, releaseDate}) => {
        <LP 
          artist={artist}
          title={title}
          releaseDate={releaseDate}
        />
      })}
    </div>
  )
}

export default App;
