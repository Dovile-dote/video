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
      <div className="cat-create">
        <h2>Create new Category</h2>
        {/* <label>Title</label> */}
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="enter new category here"
        />
        <button type="button" onClick={handleCreate}>
          Create
        </button>{' '}
      </div>
    </>
  );
}

export default Create;
