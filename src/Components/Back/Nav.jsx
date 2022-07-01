import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <>
      <nav className="nav">
        <NavLink
          to="/admin/"
          className="nav-link"
          style={({ isActive }) =>
            isActive
              ? {
                  color: 'crimson',
                }
              : { color: 'azure' }
          }
        >
          <span className="nav-hover">BACK</span>
        </NavLink>
        <NavLink
          to="/admin/cats"
          className="nav-link"
          style={({ isActive }) =>
            isActive
              ? {
                  color: 'crimson',
                }
              : { color: 'azure' }
          }
        >
          <span className="nav-hover">Categories</span>
        </NavLink>
        <NavLink
          to="/admin/movies"
          className="nav-link"
          style={({ isActive }) =>
            isActive
              ? {
                  color: 'crimson',
                }
              : { color: 'azure' }
          }
        >
          <span className="nav-hover">Movies</span>
        </NavLink>
      </nav>
    </>
  );
}

export default Nav;
