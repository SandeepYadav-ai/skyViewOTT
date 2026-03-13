import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";

// let age = 19;
// const canWatch = () => {
//   if (age >= 18) return "Watch Now";
//   return "Not Available";
// };

export const SkyviewSeries = () => {
  return (
    <ul className="grid">
      {seriesData.map((apiValue, ind, arr) => {
        return (
          <SeriesCard key={apiValue.id} apiValue={apiValue} />
        );
      })}
    </ul>
  );
}; 

// export const Footer = () => {
//     return <p>copyright @sandeep</p>
// }
export default SkyviewSeries;