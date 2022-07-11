import { useContext } from 'react';
import Line from './Line';
import FrontContext from '../FrontContext';

function List() {
  const { categories } = useContext(FrontContext);

  // console.log(categories);

  return (
    <>
      <h2>List of categories</h2>
      <ul className="list">
        {categories
          ? categories.map((c) => <Line key={c.id} line={c}></Line>)
          : null}
      </ul>
    </>
  );
}

export default List;
