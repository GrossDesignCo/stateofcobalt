import Head from "next/head";
import { Heading } from "../components/heading";

export default () => {
  return (
    <>
      <Head>
        <title>State of Cobalt | About</title>
        <meta name="description" content="About the Project Cobalt group" />
        <meta property="og:title" content="State of Cobalt | About" />
        <meta name="twitter:card" content="summary" />
      </Head>

      <main>
        <article>
          <section>
            <hgroup>
              <Heading level="1" text="About" href={null} />
              <p>State of Cobalt | 2021</p>
              <p>
                Advocating for human rights within the Cobalt Mining industry.
              </p>
            </hgroup>
          </section>
        </article>
      </main>

      <footer>
        <nav>
          <a class="link secondary" href="/">
            2021 Report
          </a>
        </nav>
      </footer>
    </>
  );
};
