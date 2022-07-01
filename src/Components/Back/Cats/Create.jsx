import { useContext, useState } from 'react';
import BackContext from '../BackContext';

function Create() {
  const { setCreateCat } = useContext(BackContext);

  const [title, setTitle] = useState('');

  const handleCreate = () => {
    const data = { title };
    setCreateCat(data);
    console.log(title);
    setTitle('');
  };

  return (
    <>
      <h2>Create new Category</h2>
      <div>
        <label>Title</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <button type="button" onClick={handleCreate}>
        Create
      </button>
    </>
  );
}

export default Create;
