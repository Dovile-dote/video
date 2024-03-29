import { useContext } from 'react';
import Line from './Line';
import BackContext from '../BackContext';

function List() {
  const { movies } = useContext(BackContext);

  return (
    <>
      <h2>List of Movies</h2>
      <ul>
        {movies
          ? movies.map((movie) => <Line key={movie.id} line={movie}></Line>)
          : null}
      </ul>
    </>
  );
}

export default List;
