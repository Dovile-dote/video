import { useState, useEffect } from 'react';
import axios from 'axios';
import BackContext from './BackContext';
import Nav from './Nav';
import CatsCrud from './Cats/Crud';
import MoviesCrud from './Movies/Crud';

function Back({ show }) {
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  const [cats, setCats] = useState(null);
  const [createCat, setCreateCat] = useState(null);
  const [deleteCat, setDeleteCat] = useState(null);
  const [editCat, setEditCat] = useState(null);
  const [modalCat, setModalCat] = useState(null);

  const [movies, setMovies] = useState(null);
  const [createMovie, setCreateMovie] = useState(null);
  const [deleteMovie, setDeleteMovie] = useState(null);
  const [editMovie, setEditMovie] = useState(null);
  const [modalMovie, setModalMovie] = useState(null);

  // Read categories
  useEffect(() => {
    axios
      .get('http://localhost:3003/admin/cats')
      .then((res) => setCats(res.data));
  }, [lastUpdate]);

  // Read movies
  useEffect(() => {
    axios
      .get('http://localhost:3003/admin/movies')
      .then((res) => setMovies(res.data));
  }, [lastUpdate]);

  // Create categories
  useEffect(() => {
    if (null === createCat) return;
    axios.post('http://localhost:3003/admin/cats', createCat).then((_) => {
      setLastUpdate(Date.now());
    });
  }, [createCat]);

  // Create movies
  useEffect(() => {
    if (null === createMovie) return;
    axios.post('http://localhost:3003/admin/movies', createMovie).then((_) => {
      setLastUpdate(Date.now());
    });
  }, [createMovie]);

  // Delete categories
  useEffect(() => {
    if (null === deleteCat) return;
    axios
      .delete('http://localhost:3003/admin/cats/' + deleteCat.id)
      .then((_) => {
        setLastUpdate(Date.now());
      });
  }, [deleteCat]);

  // Delete movies
  useEffect(() => {
    if (null === deleteMovie) return;
    axios
      .delete('http://localhost:3003/admin/movies/' + deleteMovie.id)
      .then((_) => {
        setLastUpdate(Date.now());
      });
  }, [deleteMovie]);

  // Edit categories
  useEffect(() => {
    if (null === editCat) return;
    axios
      .put('http://localhost:3003/admin/cats/' + editCat.id, editCat)
      .then((_) => {
        setLastUpdate(Date.now());
      });
  }, [editCat]);

  // Edit movies
  useEffect(() => {
    if (null === editMovie) return;
    axios
      .put('http://localhost:3003/admin/movies/' + editMovie.id, editMovie)
      .then((_) => {
        setLastUpdate(Date.now());
      });
  }, [editMovie]);

  return (
    <div className="back">
      <BackContext.Provider
        value={{
          setCreateCat,
          cats,
          setDeleteCat,
          setEditCat,
          setModalCat,
          modalCat,
          setCreateMovie,
          movies,
          setDeleteMovie,
          setEditMovie,
          setModalMovie,
          modalMovie,
        }}
      >
        {show === 'admin' ? (
          <>
            <Nav />
            <div>
              <h1>BACK</h1>
              <ul>
                {movies
                  ? movies.map((movie) => (
                      <li key={movie.id}>
                        <b>{movie.title}</b> {movie.category}{' '}
                        <i>{movie.price}</i>
                      </li>
                    ))
                  : null}
              </ul>
            </div>
          </>
        ) : show === 'cats' ? (
          <CatsCrud />
        ) : show === 'movies' ? (
          <MoviesCrud />
        ) : null}
      </BackContext.Provider>
    </div>
  );
}
export default Back;
