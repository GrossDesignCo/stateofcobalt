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
      </Head>

      <main>
        <article id="overview">
          <section class="hero-1">
            <hgroup>
              <Heading level="1" text="State of Cobalt" href="overview" />
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
