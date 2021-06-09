// import { trimNumber } from "../../utils/trim-number";
import productionData from "../../../public/cobalt-production-per-country-by-year.json";

export default function FigCobaltProductionGraph() {
  const { perCountry, world } = productionData;

  const percentages = Object.entries(perCountry).map(([country, data]) => [
    country,
    data.map((value, i) => {
      if (value) {
        const x = ((i / data.length) * 100).toFixed(2);
        const y = (100 - (value / world[i]) * 100).toFixed(2);

        return [x, y];
      }
    }),
  ]);

  return (
    <svg
      viewBox="0 0 100 100"
      height="500px"
      width="1000px"
      xmlns="http://www.w3.org/2000/svg"
    >
      {percentages.map(([country, data]) => (
        <polyline
          fill="none"
          class={country}
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={data.join(" ")}
        />
      ))}
    </svg>
  );
}
