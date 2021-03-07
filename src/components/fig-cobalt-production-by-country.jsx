import { trimNumber } from "../utils/number-to-sigfig";
import productionData from "../../public/cobalt-production-by-year.json";

export const FigCobaltProductionByCountry = () => {
  // TODO: Filter list to top 5 cobalt producers
  // Add remaining countries to "Other"

  return (
    <div class="table-wrapper">
      <table>
        <caption>
          Mine Production by Country (in tons).{" "}
          <a href="/cobalt-production-by-year.json" class="link secondary">
            View raw data
          </a>
        </caption>
        <thead>
          <tr>
            <th>Country</th>
            {productionData.years.map((year) => (
              <th>{year}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.entries(productionData["per-country"]).map(([key, data]) => {
            return (
              <tr key={key}>
                <td>{key}</td>
                {data.map((item, i) => {
                  const percent = (item / productionData.world[i]) * 100;

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
          })}
          <tr class="total">
            <td>World</td>
            {productionData.world.map((item) => (
              <td>{trimNumber(item) ?? <span class="accent">—</span>}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
