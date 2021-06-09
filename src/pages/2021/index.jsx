import { Footer, Meta, Heading } from "../../components";
import FigCobaltProductionPerCountry from "./fig-cobalt-production-per-country";
import FigCobaltReservesPerCountry from "./fig-cobalt-reserves-per-country";
// import FigCobaltProductionGraph from "./fig-cobalt-production-graph";

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
              <Heading level="1" text="State of Cobalt" href="overview" />
              <p>
                Report for 2021 |{" "}
                <a href="#calls-to-action" class="link primary">
                  Calls to Action
                </a>
              </p>
            </hgroup>
          </section>

          <section>
            <hgroup>
              <Heading level="2" text="Background" />
            </hgroup>

            <p>
              At Project Cobalt, we believe that a sustainable future shouldn’t
              come at the cost of injustice.
            </p>

            <p>
              Cobalt is critical to battery technology and nearly every
              sustainable technology in production today. Phones, Electric
              Vehicles, Solar/Energy, Medical Equipment, Aviation, Agriculture,
              and industrial projects all depend on cobalt as a component to
              their efficiency and sustainability.
            </p>

            <p>
              More than half of the world’s cobalt supply comes from the
              Democratic Republic of the Congo (DRC), home to nearly 90 million
              people. A majority of cobalt is mined through larger corporations
              who operate on their own land, but about 30 percent of cobalt
              comes from artisanal and small-scale miners (ASM) who mine on
              designated mining areas called ZEAs, or Zones d’exploitation
              artisanale.
            </p>

            <p>
              This portion of cobalt production is conducted through dangerous
              and often illegal practices that put men, women and children at
              risk of serious injury, future health complications, and death.
              Cobalt is essential to the future of climate smart technology and
              responsible energy, but we can’t neglect the 150,000 people who
              make it possible. They deserve better working conditions, and
              their human rights restored.
            </p>

            <p>
              This report serves as an update to previous reports created in the
              last decade, to show the current level of dependence the world has
              on cobalt, and how it’s not the miners themselves we should be
              blaming or changing, but the responsibility and guidelines by
              which we source cobalt. Together, we can change our approach, and
              create an ethical system of sourcing, supporting a collective,
              green future and the human rights of the Congolese people.
            </p>

            <FigCobaltProductionPerCountry />
            <FigCobaltReservesPerCountry />
            {/* <FigCobaltProductionGraph /> */}
          </section>
        </article>

        <article id="calls-to-action" class="orange">
          <section class="hero flashy">
            <hgroup>
              <Heading level="1" text="Calls to Action" class="orange" />
              <p>The best course to take in 2021</p>
            </hgroup>
          </section>

          <section>
            <hgroup>
              <Heading level="2" text="Supply Chain Transparency" />
              <p>Advocate</p>
            </hgroup>

            <p>Something</p>

            <Heading level="3" text="Current Legislation" />

            <p>Something</p>

            <Heading level="3" text="Bare Minimum" />

            <p>Something</p>

            <hgroup>
              <Heading level="2" text="Organizations on the Ground" />
              <p>Support</p>
            </hgroup>

            <p>
              True impact takes time, time that many individuals won’t have. As
              the DRC is home to the largest number of displaced persons, and
              the second largest number of food insecure people, there needs to
              be an effort made to mitigate poverty, food insecurity,
              gender-based discrimination, and many other human rights abuses.
              While our long term goals are still being realized, there are
              other ways in which we can help people now. This is a list of
              organizations who work in the DRC, and are either funded by
              countries in the global North, or by local, private and public
              partners. They approach development from a standpoint of
              localization: the use of local organizations to implement
              development. While supporting some of these organizations is only
              a short term solution, it is still crucial to the mitigation of
              poverty until larger changes can be made.
            </p>

            <Heading level="3" text="PACT" />

            <p>
              PACT is a nonprofit organization that performs international
              development in 40 different countries. Since 1971, they have been
              working local groups and organizations to address problems within
              public health, environment and energy, gender based
              discrimination, mining communities, among others. Their work in
              the Democratic Republic of the Congo began in 2003, and focuses on
              helping artisanal and small-scale mining communities. Their goal
              is to remove human rights abuses, formalize the work, and overall
              make their lives safer.
            </p>

            <Heading level="3" text="Good Shepherd International" />

            <p>
              The Good SHepherd International Foundation is a nonprofit
              organization founded by the Good Shepherd SIsters, an
              international congregation of religious women present in 70
              countries. GSIF’s mission is to support programs for children,
              girls and women, who specifically live in poverty, and are living
              in poverty and face gender-based violence, trafficking, and other
              types of discrimination.
            </p>

            <Heading level="3" text="Mercy Corps (DRCongo)" />

            <p>
              Mercy corps is dedicated to addressing the root causes of problems
              through their 5600 member team in 40 different countries. They
              provide jobs to 85 percent of their members in their home
              countries.Mercy Corps is currently working towards providing
              humanitarian assistance to roughly 15.6 million people in the
              DRCongo who are in need, through cash assistance, clean water and
              sanitation, food security, and economic opportunity.
            </p>

            <Heading level="3" text="Congo Children Trust" />

            <p>
              The CCT focuses on improving the livelihoods of children living on
              the streets in the DRC. They partner specifically with Kimbilito,
              their sole partner who operates in lubumbashi. The CCT is a
              charity that works to aid the 250,000 children living on the
              streets, often due to family death. They are vulnerable, and the 5
              centers provide resources and security to these children.
            </p>

            <hgroup>
              <Heading level="3" text="Hero Women Rising" />
              <p>Synergie des Associations Feminines du Congo (SAFECO)</p>
            </hgroup>

            <p>
              SAFECO is an organization founded by Neema Namadamu, who served in
              Parliament for South Kivu, was Chief Advisor to the DRC Minister
              of Gender and Family. When she left official aid systems, she
              decided to found the Synergy of Congolese Women’s Associations
              (SAFECO) in 2012, and then Hero Women RIsing in 2014. THe goal is
              to create a system of organizations who come together to address
              gender-based discrimination and violence through programs that
              elevate women in society and business.
            </p>

            <Heading level="3" text="Wonder Foundation" />

            <p>
              The wonder foundation partners with local projects to empower
              Congolese women and children in the area. Lycée Liziba is a
              program geared towards providing high quality education to girls
              in the Congo, a crucial program given the inability of the
              government and infrastructure to provide sit. Institut Supérieur
              en Sciences Infirmières (ISSI) is a program that trains nurses and
              midwives to increase the health standards in teh Congo. They take
              part ina Master’s program in HealthCare Administration, and go on
              to train the incoming generation of health care professionals in
              the country.
            </p>

            <Heading level="3" text="World Vision International (DRCongo)" />

            <p>
              World Vision operates through sponsorship of families in the DRC,
              with a focus on financial support. Their three primary initiatives
              include education and increasing access and quality, health care
              improvements for children ages 0 to 5, and resiliency by
              increasing financial stability and recovery from disasters.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}
