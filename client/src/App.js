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
  const [isLoaded, setIsLoaded] = useState(false);

  const FetchAPI = ({ controller }) => {
    axios.get("http://localhost:8000/swordfishtrombone/api/v1/music/lp", {
      headers: {
        "apiKey" : "RqRdvUEo9FgNjI5o"
      },
      credentials: 'include',
      signal: controller.signal
    })
    .then((result) => {
      setRes(result.data);
    })
    .catch((error) => {;
      setError(error);
    })
    .finally(() => {
      setIsLoaded(true);
    });
  }

  useEffect(() => {
    const controller = new AbortController();

    FetchAPI({ controller });

    return () => controller.abort(); 
  }, []);

  if (error) return <p>{error.message}</p>

  return (
    res.Length > 0 ?
    <div className="App">
      {res.map(({artist, title, releaseDate}) => {
        <LP 
          artist={artist}
          title={title}
          releaseDate={releaseDate}
        />
      })}
    </div>
    :
    <p>No data returned from server.</p>
  )
}

export default App;
