import Head from "next/head";
import { Heading } from "../components/heading";

export default function Index() {
  return (
    <>
      <Head>
        <title>State of Cobalt | 2021</title>
        <meta
          name="description"
          content="Annual report advocating for human rights within the Cobalt Mining
          industry."
        />
        <meta property="og:title" content="State of Cobalt | 2021" />
        <meta name="twitter:card" content="summary" />
      </Head>

      <main>
        <article id="overview">
          <section class="hero">
            <hgroup>
              <Heading level="1" text="State of Cobalt" href={null} />
              <p>Authoring in 2021</p>
              <p>
                Advocating for human rights within the Cobalt Mining industry.
              </p>
            </hgroup>
          </section>
        </article>
      </main>
    </>
  );
}
