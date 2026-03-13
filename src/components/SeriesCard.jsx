export const SeriesCard = ({ apiValue }) => {
  const { img_url, name, rating, summary, cast, genre, watch_url } = apiValue;

  return (
    <li className="movie-card">
      <div className="poster">
        <img src={img_url} alt={name} />
      </div>

      <div className="movie-info">
        <h2>{name}</h2>
        <p className="rating">⭐ {rating}</p>
        <p className="summary">{summary}</p>
        <p><b>Cast:</b> {cast}</p>
        <p><b>Genre:</b> {genre}</p>

        <a href={watch_url} target="_blank" rel="noopener noreferrer">
          <button className="watch-btn">▶ Watch Now</button>
        </a>
      </div>
    </li>
  );
};