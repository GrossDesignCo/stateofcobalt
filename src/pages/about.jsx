import { Footer, Heading, Meta } from "../components";

export default function About() {
  return (
    <>
      <Meta
        title="About | State of Cobalt"
        description="Annual report advocating for human rights within the Cobalt Mining
          industry."
      />

      <main>
        <article>
          <section>
            <hgroup>
              <Heading level="1" href={null}>
                About
              </Heading>
              <p>State of Cobalt | 2021</p>
              <p>
                Advocating for human rights within the Cobalt Mining industry.
              </p>
            </hgroup>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}
