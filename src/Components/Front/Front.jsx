import axios from 'axios';
import FrontContext from './FrontContext';
import { useEffect, useState } from 'react';
import List from './Movies/List';

function Front() {
  const [movies, setMovies] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [rateNow, setRateNow] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3003/front/movies').then((res) => {
      setMovies(res.data);
    });
  });

  // Create rates
  useEffect(() => {
    if (null === rateNow) return;
    axios
      .put('http://localhost:3003/front/balsuok/' + rateNow.id, rateNow)
      .then((_) => {
        setLastUpdate(Date.now());
      });
  }, [rateNow]);

  return (
    <FrontContext.Provider
      value={{
        movies,
        setRateNow,
      }}
    >
      <div className="front">
        <h1>welcome !</h1>
        <List />
      </div>
    </FrontContext.Provider>
  );
}
export default Front;
