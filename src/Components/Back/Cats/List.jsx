import { useContext } from 'react';
import Line from './Line';
import BackContext from '../BackContext';

function List() {
  const { cats } = useContext(BackContext);

  return (
    <>
      <div className="cat-list">
        <h2>List of Categories</h2>
        <ul>
          {cats
            ? cats.map((cat) => <Line key={cat.id} line={cat}></Line>)
            : null}
        </ul>
      </div>
    </>
  );
}

export default List;
