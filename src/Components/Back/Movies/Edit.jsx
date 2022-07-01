import { useEffect, useState, useContext } from 'react';
import BackContext from '../BackContext';

function Edit() {
  const { cats, modalMovie, setEditMovie, setModalMovie } =
    useContext(BackContext);

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [cat, setCat] = useState('0');

  useEffect(() => {
    if (null === modalMovie) {
      return;
    }
    setTitle(modalMovie.title);
    setPrice(modalMovie.price);
    setCat(
      cats.filter((category) => modalMovie.category === category.title)[0]
        ?.id ?? 0
    );
  }, [modalMovie]);

  const handleEdit = () => {
    const data = { title, price, cat, id: modalMovie.id };
    setEditMovie(data);
    setModalMovie(null);
  };

  if (null === modalMovie) {
    return null;
  }

  return (
    <div className="editas">
      <div className="edito-content">
        <div className="edito-header">
          <h3>Edit</h3>
          <button
            type="button"
            className="close"
            onClick={() => setModalMovie(null)}
          >
            <span>&times;</span>
          </button>
        </div>
        <div className="modal-body">
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
            {/* <option value="0">Please, select your Cat</option> */}
            {cats
              ? cats.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.title}
                  </option>
                ))
              : null}
          </select>
        </div>
        <div className="edito-footer">
          <button type="button" onClick={() => setModalMovie(null)}>
            Close
          </button>
          <button type="button" onClick={handleEdit}>
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default Edit;
