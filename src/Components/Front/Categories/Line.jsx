function Line({ line }) {
  const handleFilter = () => {
    console.log(line.movie_titles);
  };

  return (
    <li>
      <div>
        <h3 onClick={handleFilter}>{line.title}</h3>
        {/* <ul>
          {line.movie_titles
            ? line.movie_titles.split(',').map((mov, i) => (
                <li key={i}>
                  {mov}
                </li>
              ))
            : null}
        </ul> */}
      </div>
    </li>
  );
}

export default Line;
