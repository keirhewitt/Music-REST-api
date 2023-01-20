import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Alert } from 'react-bootstrap'

import LP from 'components/LP';

function App() {
    
  const [res, setRes] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const FetchAPI = async () => {
    await axios.get("/swordfishtrombone/api/v1/music/lp", {
      withCredentials: true,
      headers: {
        "apiKey" : "RqRdvUEo9FgNjI5o",
        "Content-Type": "application/json"
      }
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
    //const controller = new AbortController();
    FetchAPI();

    //return () => controller.abort(); 
  }, []);

  if (error) return <p>{error.message}</p>

  return (

    isLoaded == true && res.length > 0 ?

    <div className="album-container">
      {res.map((album) => (
        <LP 
          artist={album.artist}
          title={album.title}
          releaseDate={album.releaseDate}
        />
      ))}
    </div>

    :

    <p>Loading data from server...</p>
  );
}

export default App;
