import { useContext } from 'react';
import BackContext from '../BackContext';

function Line({ line }) {
  const { setDeleteCat, setModalCat } = useContext(BackContext);

  const handleDelete = () => {
    setDeleteCat(line);
  };

  const handleEdit = () => {
    setModalCat(line);
  };

  return (
    <li>
      <b>{line.title}</b>
      <div className="buttons">
        <button className="edit" type="button" onClick={handleEdit}>
          <svg>
            <use href="#edit" />
          </svg>
        </button>
        <button className="delete" type="button" onClick={handleDelete}>
          <svg>
            <use href="#delete" />
          </svg>
        </button>
      </div>
    </li>
  );
}

export default Line;
