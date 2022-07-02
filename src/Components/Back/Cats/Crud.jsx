import Nav from '../Nav';
import Create from './Create';
import Edit from './Edit';
import List from './List';

function Crud() {
  return (
    <>
      <Nav />
      <div className="categories">
        <Create />
        <List />
      </div>
      <Edit />
    </>
  );
}
export default Crud;
