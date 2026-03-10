import seriesData from "../api/seriesData.json";

// let age = 19;
// const canWatch = () => {
//   if (age >= 18) return "Watch Now";
//   return "Not Available";
// };

export const SkyviewSeries = () => {
  return (
    <ul>
      {seriesData.map((apiValue, ind, arr) => {
        return (
          <li key={apiValue.id}>
            <div>
              <img
                src={apiValue.img_url}
                alt={apiValue.name}
                width="40%"
                height="40%"
              />
            </div>

            <h2>Name: {apiValue.name}</h2>
            <h3>Rating: {apiValue.rating}</h3>
            <p>Summary: {apiValue.summary}</p>
            <p>Description: {apiValue.description}</p>
            <p>Cast: {apiValue.cast}</p>
            <p>Genre: {apiValue.genre}</p>

            <a
              href={apiValue.watch_url}
              target="_blank"
              
            >
              <button>Watch Now</button>
            </a>
          </li>
        );
      })}
    </ul>
  );
}; 

// export const Footer = () => {
//     return <p>copyright @sandeep</p>
// }
export default SkyviewSeries;