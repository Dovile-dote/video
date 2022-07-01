import Nav from '../Nav';
import Create from './Create';
import Edit from './Edit';
import List from './List';

function Crud() {
  return (
    <>
      <Nav />
      <div>
        <div>
          <Create />
        </div>
        <div>
          <List />
        </div>
      </div>
      <Edit />
    </>
  );
}
export default Crud;
