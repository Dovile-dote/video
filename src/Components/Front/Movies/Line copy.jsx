import { useContext } from 'react';
import { useState } from 'react';
import FrontContext from '../FrontContext';

function Line({ line }) {
  const { setRateNow } = useContext(FrontContext);
  const [rate, setRate] = useState(5);

  const rateIt = (e) => {
    setRate(e.target.value);
    setRateNow({
      rate: parseInt(e.target.value),
      id: line.id,
    });
    console.log(line.id);
    console.log('turimi duomenys');
    console.log(line);
  };

  // console.log('rates yra: ' + rate);
  return (
    <li>
      <div>
        <h3>
          {line.title} <i>{line.category}</i>
        </h3>

        <p>Price: {line.price} Eu</p>
      </div>
      <div>
        {line.rate_sum
          ? 'Rate: ' + (line.rate_sum / line.rates).toFixed(2)
          : 'no rates yet'}
        {/* <label>Rate it!</label> */}
        <select value={rate} onChange={rateIt}>
          {[...Array(10)].map((_, i) => (
            <option key={i} value={10 - i}>
              {10 - i}
            </option>
          ))}
        </select>
        {/* <div className="radio-buttons">
          {[...Array(5)].map((_, i) => (
            <div className="radio" key={i}>
              <input
                type="radio"
                name="r"
                id={i}
                value={1 + i}
                onChange={rateIt}
                checked={rate}
              ></input>
              <label htmlFor={i}>
                <span>{1 + i}</span>
                <svg>
                  <use href="#star" />
                </svg>
              </label>
            </div>
          ))}
        </div> */}
      </div>
    </li>
  );
}

export default Line;
