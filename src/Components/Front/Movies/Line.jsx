import { useState } from 'react';

function Line({ line }) {
  const [rate, setRate] = useState('5');

  const rateIt = (e) => {
    setRate(e.target.value);
  };

  return (
    <li>
      <div>
        <h3>{line.title}</h3>
        <p>
          Price: {line.price}eu <i>{line.category}</i>
        </p>
      </div>
      {line.rate_sum
        ? 'rate: ' + (line.rate_sum / line.rates).toFixed(2)
        : 'no rates yet'}
      <label>Rate it!</label>
      <select value={rate} onChange={rateIt}>
        {[...Array(10)].map((_, i) => (
          <option key={i} value={10 - i}>
            {10 - i}
          </option>
        ))}
      </select>
    </li>
  );
}

export default Line;
