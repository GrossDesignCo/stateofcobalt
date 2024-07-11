import Link from 'next/link';
import { Heading, Meta } from '../components';

export default function Index() {
  return (
    <>
      <Meta
        title="State of Cobalt"
        description="Annual report advocating for human rights within the Cobalt Mining
          industry."
      />

      <main>
        <article id="overview" class="cobalt fullscreen">
          <section class="hero">
            <hgroup>
              <Heading level="1" noAnchor>
                State of Cobalt
              </Heading>
              <p>
                Advocating for human rights within the Cobalt Mining industry.
              </p>
              <p>
                <Link className="link primary" href="/2021">
                  View Report for 2021
                </Link>
              </p>
            </hgroup>
          </section>
        </article>
      </main>
    </>
  );
}
