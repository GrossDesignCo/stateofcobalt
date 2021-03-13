import { Footer, Heading, Meta } from "../components";

export default function Page404() {
  return (
    <>
      <Meta title="State of Cobalt | 404 Not Found" />

      <main>
        <article id="overview" class="fullscreen">
          <section class="hero">
            <hgroup>
              <Heading level="1" text="404" href={null} />
              <p>Look's like something's missing here...</p>
              <p>
                <a href="/" class="link primary">
                  Home
                </a>
              </p>
            </hgroup>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}
