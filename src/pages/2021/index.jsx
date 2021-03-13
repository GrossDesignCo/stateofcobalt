import { Footer, Meta, Heading } from "../../components";
import FigCobaltProductionByCountry from "./fig-cobalt-production-by-country";

export default function Index2021() {
  return (
    <>
      <Meta
        title="State of Cobalt | 2021"
        description="The State of Cobalt report for 2021"
      />

      <main>
        <article id="overview" class="cobalt">
          <section class="hero">
            <hgroup>
              <Heading level="1" text="State of Cobalt" href="#overview" />
              <p>Report for 2021</p>
            </hgroup>
          </section>

          <section>
            <hgroup>
              <Heading level="3" text="Background" />
              <p>1.1</p>
            </hgroup>

            <p>This is the start of the overview section.</p>

            <FigCobaltProductionByCountry />
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}
