import { useEffect, useState } from 'react';
import axios from 'axios';
import FrontContext from './FrontContext';
import List from './Movies/List';
import Categories from './Categories/List';
import Message from './Movies/Message';
import SortFilter from './SortFilter';

function Front() {
  const [movies, setMovies] = useState(null);
  const [categories, setCategories] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [rateNow, setRateNow] = useState(null);
  const [message, setMessage] = useState(null);

  //  Read movies
  useEffect(() => {
    axios
      .get('http://localhost:3003/front/movies')
      .then((res) => setMovies(res.data.map((m, i) => ({ ...m, row: i }))));
  }, [lastUpdate]);

  // Read categories
  useEffect(() => {
    axios.get('http://localhost:3003/front/categories').then((res) => {
      setCategories(res.data);
    });
  }, []);

  // Create rates
  useEffect(() => {
    if (null === rateNow) return;
    axios
      .put('http://localhost:3003/front/balsuok/' + rateNow.id, rateNow)
      .then((res) => {
        showMessage(res.data.msg);
        setLastUpdate(Date.now());
      });
  }, [rateNow]);

  // Message
  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(null), 5000);
  };

  return (
    <FrontContext.Provider
      value={{
        movies,
        setMovies,
        categories,
        setRateNow,
        message,
      }}
    >
      <div className="front">
        <h1>welcome !</h1>
        <SortFilter />
        <List />
        <Message />
      </div>
      {/* <div className="front">
        <Categories />
      </div> */}
    </FrontContext.Provider>
  );
}
export default Front;
