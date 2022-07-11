import { useContext, useState } from 'react';
import FrontContext from './FrontContext';

function SortFilter() {
  const [sortBy, setSortBy] = useState('default');
  const { setMovies, movies, categories } = useContext(FrontContext);
  const [cat, setCat] = useState(0);

  const doSort = (e) => {
    setSortBy(e.target.value);
    const m = [...movies];
    switch (e.target.value) {
      case 'ascTitle':
        m.sort((a, b) => {
          if (a.title > b.title) return 1;
          if (a.title < b.title) return -1;
          return 0;
        });
        break;
      case 'descTitle':
        m.sort((a, b) => {
          if (a.title > b.title) return -1;
          if (a.title < b.title) return 1;
          return 0;
        });
        break;
      case 'ascPrice':
        m.sort((a, b) => a.price - b.price);
        break;
      case 'descPrice':
        m.sort((a, b) => b.price - a.price);
        break;
      default:
        m.sort((a, b) => a.row - b.row);
    }
    setMovies(m);
  };

  return (
    <div className="sort">
      <div>
        <label>Sort By</label>
        <select value={sortBy} onChange={doSort}>
          <option value="default">Default Sort</option>
          <option value="ascTitle">Title A-Z</option>
          <option value="descTitle">Title Z-A</option>
          <option value="ascPrice">Price min-max</option>
          <option value="descPrice">Price max-min</option>
        </select>
      </div>

      <div>
        <label>Filter by Categories</label>
        <select onChange={(e) => setCat(e.target.value)} value={cat}>
          <option value="0">All cats</option>
          {categories
            ? categories.map((c) => (
                <option value={c.id} key={c.id}>
                  {c.title}
                </option>
              ))
            : null}
        </select>
      </div>
    </div>
  );
}

export default SortFilter;
