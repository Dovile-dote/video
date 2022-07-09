import { useContext } from 'react';
import Line from './Line';
import FrontContext from '../FrontContext';

function List() {
  const { movies } = useContext(FrontContext);

  return (
    <>
      <h2>Choose a movie</h2>
      <ul className="list">
        {movies
          ? movies.map((movie) => <Line key={movie.id} line={movie}></Line>)
          : null}
      </ul>
    </>
  );
}

export default List;
