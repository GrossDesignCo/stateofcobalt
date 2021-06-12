import { useState } from "react";
import { trimNumber } from "../../utils/trim-number";
import reservesData from "../../../public/cobalt-reserves-per-country.json";

export default function FigCobaltReservesByCountry() {
  const { perCountry, world } = reservesData;
  const [expanded, setExpanded] = useState(false);

  const highlightedCountries = [
    "Congo (Kinshasa)",
    "Australia",
    "Russia",
    "China",
    "United States",
  ];

  const countriesList = expanded
    ? Object.entries(perCountry)
    : highlightedCountries.map((key) => [key, perCountry[key]]);

  console.log(reservesData);

  return (
    <div class="table-wrapper">
      <table>
        <caption>
          Reserves per Country (in tons){" "}
          <button
            onClick={() => setExpanded(!expanded)}
            class="button secondary"
          >
            {expanded ? "Collapse List" : "Expand List"}
          </button>{" "}
          <a
            href="/cobalt-reserves-per-country.json"
            target="_blank"
            class="button secondary"
          >
            View raw data (json file)
          </a>
        </caption>

        <thead>
          <tr>
            <th>Country</th>
            <th>Known Reserves</th>
            <th>Estimated?</th>
          </tr>
        </thead>

        <tbody>
          {countriesList.map(([country, value]) => (
            <tr>
              <th scope="row">{country}</th>
              <td>
                <span>{trimNumber(value)}</span>{" "}
                <span class="accent small">
                  ({trimNumber((value / world).toFixed(3) * 100)}%)
                </span>
              </td>
              <td>?</td>
            </tr>
          ))}
          <tr></tr>
          <tr class="total">
            <th scope="row">World</th>
            <td>{trimNumber(world)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
