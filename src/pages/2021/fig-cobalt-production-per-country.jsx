import { useState } from "react";
import { trimNumber } from "../../utils/trim-number";
import productionData from "../../../public/cobalt-production-per-country-by-year.json";

export default function FigCobaltProductionByCountry() {
  const { perCountry, world, years } = productionData;
  const [expanded, setExpanded] = useState(false);

  // Controls which countries are shown by default
  const highlightedCountries = [
    "Congo (Kinshasa)",
    "Australia",
    "Russia",
    "China",
    "United States",
  ];

  const countriesList = expanded
    ? Object.entries(perCountry) // returns [key, value] for each key on the object
    : highlightedCountries.map((key) => [key, perCountry[key]]);

  return (
    <div class="table-wrapper">
      <table>
        <caption>
          Mine Production per Country (in tons){" "}
          <button
            onClick={() => setExpanded(!expanded)}
            class="button secondary"
          >
            {expanded ? "Collapse List" : "Expand List"}
          </button>{" "}
          <a
            href="/cobalt-production-per-country-by-year.json"
            target="_blank"
            class="button secondary"
          >
            View raw data (json file)
          </a>
        </caption>

        <thead>
          <tr>
            <th>Country</th>
            {years.map((year) => (
              <th key={year}>{year}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {countriesList.map(([key, data]) => {
            if (expanded || highlightedCountries.includes(key)) {
              return (
                <tr key={key}>
                  <th scope="row">{key}</th>
                  {data.map((item, i) => {
                    const percent = (item / world[i]) * 100;

                    return (
                      <td>
                        {item ? (
                          <>
                            <span>{trimNumber(item)}</span>{" "}
                            <span class="accent small">
                              ({percent.toFixed(0)}%)
                            </span>
                          </>
                        ) : (
                          <span class="accent">—</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            } else {
              return null;
            }
          })}

          <tr class="total">
            <th>World</th>
            {world.map((item) => (
              <td key={item}>
                {trimNumber(item) ?? <span class="accent">—</span>}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
