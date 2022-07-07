import axios from 'axios';
import FrontContext from './FrontContext';
import { useEffect, useState } from 'react';
import List from './Movies/List';

function Front() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3003/front/movies').then((res) => {
      setMovies(res.data);
    });
  });
  return (
    <FrontContext.Provider
      value={{
        movies,
      }}
    >
      <div>
        <List />
      </div>
    </FrontContext.Provider>
  );
}
export default Front;
