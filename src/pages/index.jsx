import Head from "next/head";
import { Heading } from "../components/heading";
import { IconGraph } from "../components/icon-graph";
import { IconLink } from "../components/icon-link";

/**
 * TODOs:
 * - add lang attr to html
 * - figure out aria landmarks
 */

export default function Index() {
  return (
    <>
      <Head>
        <title>State of Cobalt | 2021</title>
        {/* TODO: Create favicon */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <article id="overview">
          <section class="hero-1">
            <hgroup>
              <Heading level="1" text="State of Cobalt" href="overview" />
              <p>Authored in 2021</p>
              <p>
                Overview | <a href="#automotive">Automotive</a> |{" "}
                <a href="#consumer-tech">Consumer Tech</a>
              </p>
            </hgroup>
          </section>
        </article>

        <article id="automotive">
          <section class="hero-2">
            <hgroup>
              <Heading level="2" text="State of Automotive" href="automotive" />
              <p>State of Cobalt | 2021</p>
              <p>
                <a href="#overview">Overview</a> | Automotive |{" "}
                <a href="#consumer-tech">Consumer Tech</a>
              </p>
            </hgroup>
          </section>
        </article>

        <article id="consumer-tech">
          <section class="hero-3">
            <hgroup>
              <Heading
                level="2"
                text="State of Consumer Tech"
                href="consumer-tech"
              />
              <p>State of Cobalt | 2021</p>
              <p>
                <a href="#overview">Overview</a> |
                <a href="#automotive">Automotive</a> | Consumer Tech
              </p>
            </hgroup>
          </section>

          <section>
            <hgroup>
              <Heading level="3" text="Background" />
              <p>1.1</p>
            </hgroup>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              rutrum orci sagittis tortor interdum pellentesque. Maecenas
              malesuada erat est, eget euismod ante dapibus ac.
            </p>
            <p>
              Aenean pharetra nisl risus, sed convallis dui rutrum nec.
              Phasellus vel odio at dolor malesuada dictum non vel erat. Nulla
              sollicitudin augue ante, vulputate pulvinar felis luctus at. Nulla
              id felis tincidunt, accumsan felis quis, aliquam ipsum. Vestibulum
              ante ipsum primis in faucibus orci luctus et ultrices posuere
              cubilia curae; Nunc cursus turpis sit amet ante porta, eget
              pulvinar magna auctor. Maecenas ultrices felis enim, at dapibus
              justo porttitor sed. Aliquam pharetra at sapien at egestas. Sed
              quis nunc a sapien euismod tincidunt. Aenean vehicula gravida
              massa id dictum. Praesent id mi ullamcorper, imperdiet lacus nec,
              imperdiet quam. Nunc diam metus, facilisis sit amet dolor ut,
              lacinia hendrerit dui.
            </p>

            <p>This is an example table:</p>

            <div class="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Company</th>
                    <th>Employees</th>
                    <th>Metric Tons of Cobalt</th>
                    <th>Percent of Market Share</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Company A</td>
                    <td>50k</td>
                    <td>25</td>
                    <td>13%</td>
                  </tr>
                  <tr>
                    <td>Company B</td>
                    <td>45k</td>
                    <td>32</td>
                    <td>9%</td>
                  </tr>
                  <tr>
                    <td>Company c</td>
                    <td>10k</td>
                    <td>5</td>
                    <td>4.34%</td>
                  </tr>
                  <tr>
                    <td>Company D</td>
                    <td>2.5k</td>
                    <td>10</td>
                    <td>34.3%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>Test/Example Buttons:</p>

            <p>
              <button class="button-primary">Primary Button</button>

              <button class="button-secondary">Secondary Button</button>

              <button
                class="button-icon"
                aria-label="Press to display as Graph"
              >
                <IconGraph />
              </button>

              <a href="#" class="button-primary">
                Link as Button
              </a>

              <a
                href="#"
                class="button-icon"
                aria-label="Press to go somewhere"
              >
                <IconLink />
              </a>
            </p>

            <p>Test/Example Links:</p>

            <p>
              <a href="#" class="link">
                Default Link
              </a>
            </p>

            <p>
              Quisque rhoncus, turpis quis semper ornare, metus nunc auctor
              tortor, et facilisis lorem nisl ac enim. Suspendisse potenti.
              Curabitur facilisis luctus laoreet. Etiam finibus tellus vitae
              tincidunt maximus. Phasellus tempor condimentum faucibus.
              Suspendisse eget quam nec est placerat bibendum a in risus. Donec
              interdum eu est sed euismod. Cras aliquam, justo ut molestie
              rutrum, ex nunc mollis lectus, sit amet tempus felis ipsum vitae
              justo. Donec sodales augue neque, non posuere leo condimentum eu.
              Nam aliquam mollis placerat. Etiam sagittis finibus tortor et
              blandit. Sed varius mi augue, quis lacinia ipsum imperdiet ut. In
              volutpat est quam, sit amet tempor lorem molestie sit amet. In a
              nulla et dui lobortis sagittis. Donec pulvinar laoreet sem.
            </p>
          </section>
        </article>
      </main>

      <footer>
        <nav>
          <a target="_blank" href="#">
            About
          </a>
        </nav>
      </footer>
    </>
  );
}
