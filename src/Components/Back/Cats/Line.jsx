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

  console.log(line);
  return (
    <li>
      <b>{line.title}</b>
      <div className="buttons">
        <button className="edit" type="button" onClick={handleEdit}>
          <svg>
            <use href="#edit" />
          </svg>
        </button>
        {line.movies_total ? (
          <div className="movies-count">
            You have: <span>{line.movies_total}</span> movies in this categorie.
          </div>
        ) : (
          <button className="delete" type="button" onClick={handleDelete}>
            <svg>
              <use href="#delete" />
            </svg>
          </button>
        )}
      </div>
    </li>
  );
}

export default Line;
