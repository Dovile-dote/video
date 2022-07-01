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
      <p>
        <b>{line.title}</b> {line.price} {line.category}
      </p>
      <div className="buttons">
        <button type="button" onClick={handleEdit}>
          Edit
        </button>
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default Line;
