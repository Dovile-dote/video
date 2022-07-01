import { useEffect, useState, useContext } from 'react';
import BackContext from '../BackContext';

function Edit() {
  const { modalCat, setEditCat, setModalCat } = useContext(BackContext);

  const [title, setTitle] = useState('');

  useEffect(() => {
    if (null === modalCat) {
      return;
    }
    setTitle(modalCat.title);
  }, [modalCat]);

  const handleEdit = () => {
    const data = { title, id: modalCat.id };
    setEditCat(data);
    setModalCat(null);
  };

  if (null === modalCat) {
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
            onClick={() => setModalCat(null)}
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
        <div className="edito-footer">
          <button type="button" onClick={() => setModalCat(null)}>
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
