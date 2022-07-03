import { useContext } from 'react';
import BackContext from '../BackContext';

function Line({ line }) {
  const { setDeleteMovie, setModalMovie } = useContext(BackContext);

  const handleDelete = () => {
    setDeleteMovie(line);
  };

  const handleEdit = () => {
    setModalMovie(line);
  };

  return (
    <li>
      <div>
        <h3>{line.title}</h3>
        <p>
          Price: {line.price}eu <i>{line.category}</i>
        </p>
      </div>
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
