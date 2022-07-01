import { useContext, useState } from 'react';
import BackContext from '../BackContext';

function Create() {
  const { cats, setCreateMovie } = useContext(BackContext);

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [cat, setCat] = useState('0');

  const handleCreate = () => {
    const data = { title, price, cat };
    setCreateMovie(data);
    setTitle('');
    setPrice('');
    setCat('0');
  };

  return (
    <>
      <h2>Create new Movie</h2>
      <div>
        <label>Title</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div>
        <label>Price</label>
        <input
          type="text"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
      </div>
      <div>
        <label>Categories</label>
        <select value={cat} onChange={(e) => setCat(e.target.value)}>
          <option value="0">Please, select your Cat</option>
          {cats
            ? cats.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.title}
                </option>
              ))
            : null}
        </select>
      </div>
      <button type="button" onClick={handleCreate}>
        Create
      </button>
    </>
  );
}

export default Create;
