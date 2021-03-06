import Head from "next/head";
import { Heading, IconLink, Button } from "../components";

export default () => {
  return (
    <>
      <Head>
        <title>State of Cobalt | Report Design</title>
        <meta
          name="description"
          content="Annual report advocating for human rights within the Cobalt Mining
          industry."
        />
        <meta property="og:title" content="State of Cobalt | Report Design" />
      </Head>

      <main>
        {/* Start */}
        <article id="overview" class="cobalt">
          <section class="hero">
            <hgroup>
              <Heading level="1" text="State of Cobalt" href="overview" />
              <p>Report Design - Main Hero</p>
              <p>
                Overview |{" "}
                <a class="link primary" href="#automotive">
                  Automotive
                </a>{" "}
                |{" "}
                <a class="link primary" href="#consumer-tech">
                  Consumer Tech
                </a>
              </p>
            </hgroup>
          </section>

          <section>
            <p>Test/Example Buttons:</p>

            <p>
              <Button
                level="primary"
                text="Primary Button"
                onClick={() => alert("You clicked the primary button!")}
              />{" "}
              <Button
                level="secondary"
                text="Secondary Button"
                onClick={() => alert("You clicked the secondary button!")}
              />
            </p>
          </section>
        </article>

        {/* Auto */}
        <article id="automotive" class="slate">
          <section class="hero">
            <hgroup>
              <Heading level="2" text="State of Automotive" href="automotive" />
              <p>Example Muted Hero, H2</p>
              <p>
                <a class="link primary" href="#overview">
                  Overview
                </a>{" "}
                | Automotive |{" "}
                <a class="link primary" href="#consumer-tech">
                  Consumer Tech
                </a>
              </p>
            </hgroup>
          </section>

          <section>
            <p>Test/Example Buttons:</p>

            <p>
              <Button
                level="primary"
                text="Primary Button"
                onClick={() => alert("You clicked the primary button!")}
              />{" "}
              <Button
                level="secondary"
                text="Secondary Button"
                onClick={() => alert("You clicked the secondary button!")}
              />
            </p>
          </section>
        </article>

        {/* Tech */}
        <article id="consumer-tech" class="orange">
          <section class="hero flashy">
            <hgroup>
              <Heading
                level="2"
                text="State of Consumer Tech"
                href="consumer-tech"
              />
              <p>Example Flashy Hero, H2</p>
              <p>
                <a class="link primary" href="#overview">
                  Overview
                </a>{" "}
                |{" "}
                <a class="link primary" href="#automotive">
                  Automotive
                </a>{" "}
                | Consumer Tech
              </p>
            </hgroup>
          </section>

          <section>
            <hgroup>
              <Heading level="3" text="Background" />
              <p>1.1 (H3)</p>
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
              <Button
                level="primary"
                text="Primary Button"
                onClick={() => alert("You clicked the primary button!")}
              />{" "}
              <Button
                level="secondary"
                text="Secondary Button"
                onClick={() => alert("You clicked the secondary button!")}
              />
            </p>

            <p>
              <Button
                level="primary"
                text="Pimary Button w/ Icon"
                icon={<IconLink />}
                onClick={() => alert("You clicked the button with an icon!")}
              />{" "}
              <Button
                level="secondary"
                icon={<IconLink />}
                href="#overview"
                aria-label="Go Somewhere"
              />
            </p>

            <p>
              <Button text="Link as primary" level="primary" href="#overview" />{" "}
              <Button
                text="Link as secondary"
                level="secondary"
                href="#overview"
              />
            </p>

            <hr />

            <p>Test/Example Links:</p>

            <p>
              <a href="#">Unstyled Anchor</a> <button>Unstyled Button</button>
            </p>

            <p>
              <a href="#" class="link primary">
                Primary Link
              </a>{" "}
              <button href="#" class="link primary">
                Button as Primary Link
              </button>
            </p>

            <p>
              <a href="#" class="link secondary">
                Secondary Link
              </a>{" "}
              <button href="#" class="link secondary">
                Button as Secondary Link
              </button>
            </p>

            <hr />

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
          <a class="link primary" href="/about">
            About
          </a>
        </nav>
      </footer>
    </>
  );
};
