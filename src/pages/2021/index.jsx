import { Footer, Meta, Heading } from '../../components';
import FigCobaltProductionPerCountry from './fig-cobalt-production-per-country';
import FigCobaltReservesPerCountry from './fig-cobalt-reserves-per-country';
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
              <Heading level="1" href="overview">
                The State of Cobalt
              </Heading>
              <p>Report for 2021</p>
            </hgroup>
          </section>

          <section>
            <hgroup>
              <Heading level="2">Background</Heading>
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
              This report serves as an update to previous reporting efforts over
              the last decade, to show the dependence we all have on cobalt, and
              that it’s not the miners themselves that are problematic, but the
              responsibility and guidelines by which we source cobalt. Together,
              we can change our approach, and create an ethical system of
              sourcing, supporting a collective, green future and the human
              rights of the Congolese people.
            </p>

            <Heading level="3">The Democratic Republic of the Congo</Heading>

            <p>
              More than half of the world’s cobalt supply comes from the
              Democratic Republic of the Congo (DRC), home to nearly 90 million
              people. A majority of cobalt is mined through larger corporations
              who operate on their own land, but about 30% of cobalt comes from
              artisanal and small-scale miners (ASM) who mine either on
              designated mining areas called Zones d’Exploitation Artisanale
              (ZEAs), or without permits wherever they can.
            </p>

            <FigCobaltProductionPerCountry />

            <p>
              This portion of cobalt production happens through dangerous (and
              often illegal) practices that put men, women and children at risk
              of serious injury, future health complications, and death. Cobalt
              is essential to the future of climate-smart technology and
              responsible energy, but we can’t neglect the 150,000 people who
              make it possible. They deserve better working conditions, dignity,
              and their human rights.
            </p>

            <p>
              The DRC is a large country in sub-saharan Africa, afflicted with
              foreign intervention since before its independence, and continues
              to struggle with disease outbreaks, poor medical treatment,
              economic disparity, political and military corruption, and a
              massive influx of migrants fleeing crises from neighboring states.
            </p>

            <p>
              During the early 1990s and late 2000s, militant groups, power
              grabs, and political unrest caused the region to destabilize, and
              a dependence on the mining of cobalt & other minerals came to
              provide a stable source of income for the opportunists who put
              their lives in harm’s way.
            </p>

            <p>
              Today, the region has fallen victim to power structures, abuses of
              human rights like gender violence against women and girls and
              ethnic violence, as well as war crimes committed during civil wars
              between the DRC and neighboring countries. This creates a country,
              rich in resources, and yet struggling to provide constitutionally
              guaranteed education, because the deficit is too large.
            </p>

            <FigCobaltReservesPerCountry />
          </section>
        </article>

        <article id="global-need" class="slate">
          <section class="hero flashy">
            <hgroup>
              <Heading level="1" noAnchor>
                The Global Need
              </Heading>
              <p>Cobalt demand and the tech boom</p>
            </hgroup>
          </section>

          <section>
            <p>
              As green tech & energy-storage boom over the 2020s, cobalt demand
              is expected to skyrocket. Some companies are already investing in
              cobalt alternatives, but those efforts aren’t likely to outweigh
              the increase in global demand.
            </p>

            <p>
              Cobalt is predominantly used in lithium-ion batteries, or
              rechargeable batteries that hold a higher charge due to the
              chemical structure of cobalt allowing larger amounts of energy to
              be stored in a smaller space (energy density) and degrading less
              over time & energy transferred (longer shelf-life) than nearly
              every alternative. These are at the heart of modern technologies,
              from phones to the electric vehicles.
            </p>

            <p>
              Even large-scale green infrastructure projects that are essential
              for sustainable energy require massive, utility-scale batteries
              like the Tesla Megapack currently require cobalt, although
              alternative materials look promising in this field. Stationary
              batteries don’t have the same energy-density requirements as
              vehicles or consumer electronics, meaning that they can take
              advantage of relatively cheaper (but heavier & larger) materials.
            </p>

            <p>
              Cobalt’s high energy density and low degradation means higher
              potential for its applications, because it can go longer, be
              smaller, and weigh less, than alternatives like Iron, Nickel, or
              Manganese. Cobalt itself is also highly resistant to high heat and
              wear over time, making it a prime choice for jet engines.
            </p>

            <Heading level="2">Applications</Heading>

            <p>
              The below represents a brief overview of the applications & fields
              cobalt supports.
            </p>

            <Heading level="3">Energy</Heading>

            <ul>
              <li>
                Large-scale Lithium-ion batteries (electric vehicles, green
                infrastructure)
              </li>
              <li>Consumer electronics (phones, laptops, etc.)</li>
              <li>Solar panels and other photovoltaic cells</li>
              <li>
                Clean fuel technologies (the catalytic properties of cobalt
                allow it to desulphurize hydrocarbons, producing cleaner fuel.)
              </li>
              <li>Removal of nitrous oxide, mitigating greenhouse gasses.</li>
            </ul>

            <Heading level="3">Manufacturing & Industry</Heading>
            <ul>
              <li>
                Creates effective tools for cutting hard materials (ie.
                Diamonds)
              </li>
              <li>
                Cobalt-chloride can be used as an alloy with other metals to
                increase durability and wear, especially in hot, pressurized, or
                acidic environments.
              </li>
              <li>Magnets</li>
              <li>Electroplating</li>
              <li>Jet turbines and gas turbine generators</li>
            </ul>
            <Heading level="3">Medicine</Heading>

            <ul>
              <li>
                Nanoparticles used to enhance imaging and sensors (eg. MRIs)
              </li>
              <li>Site-specific drug delivery for cancer treatments</li>
              <li>
                Radioactive Cobalt-60 is a source of gamma rays used in
                radiation-therapies for cancer treatment, to sterilize medical
                supplies, and to preserve food
              </li>
              <li>Compact medical electronics (eg. hearing aids)</li>
              <li>
                Orthopedic implants (eg. cobalt-chrome femoral stems, used in
                hip-replacements)
              </li>
            </ul>

            <Heading level="3">Militaries</Heading>

            <ul>
              <li>
                Absorbs high frequency millimeter waves, visible light and
                infrared.
              </li>
              <li>Aerospace parts</li>
            </ul>

            <Heading level="3">Agriculture</Heading>
            <ul>
              <li>
                Cobalt can be added to nutrient-poor soil, increasing cobalt in
                animal consumption, preventing “wasting disease.”
              </li>
            </ul>

            <p>
              Given the prevalence of cobalt in so many applications of our
              daily lives, we as an organization came to the conclusion that we
              can’t simply turn to an alternative mineral to source. Perhaps the
              tech industry could switch to alternatives quickly, but medical,
              agriculture, and other fields don’t have the ability to change
              production and their research and development as fast.
            </p>

            <p>
              This led us to determine is sourcing cobalt could be changed to
              require the disclosure of supply chains in our business practices,
              to create awareness of the child labor and horrible conditions
              that are used to power our lives, and to eventually create a
              demand for change.
            </p>

            <Heading level="2">Usage & Trends</Heading>

            <p>
              Phones & laptops are a relatively saturated market already, but
              account for [a large portion] of cobalt required each year. EVs
              are expected to explode over the next decade as automakers
              globally move from fossil-fuel-based to electric fleets.
              Infrastructure batteries are the relative newcomers, and are
              likewise expected to grow dramatically, as countries increasingly
              pursue renewable energy.
            </p>
          </section>
        </article>

        <article id="supply-chain" class="slate">
          <section class="hero flashy">
            <hgroup>
              <Heading level="1" noAnchor>
                The Supply Chain
              </Heading>
              <p>
                Dirt {'>'} ??? {'>'} Proft
              </p>
            </hgroup>
          </section>

          <section>
            <p>
              When it first came into the public spotlight in 2016, the cobalt
              pipeline essentially looked like all mines and operations sold
              their cobalt to Chinese buyers, then was shipped off to refiners
              and smelters operated by “Large scale mining” corporations.
            </p>

            <p>
              In 2020 & 2021, the supply chain has diversified and shifted power
              to other countries; so, while China continues to hold a large
              stake in the field, we are all responsible for what happens
              through the transfer of cobalt from mine to final product.
            </p>

            <Heading level="2">Raw Production</Heading>

            <p>
              The cobalt supply chain is roughly divided into two categories --
              large scale mining corporations and artisanal mining, roughly a
              70/30 split between the two.
            </p>

            <Heading level="3">The largest mining corporations</Heading>

            <p>
              These purchase raw cobalt ore from suppliers or source directly
              from mining lands they own.
            </p>

            <Heading level="4">Glencore</Heading>

            <p>
              An Anglo-Swiss multinational corporation, Glencore owns some of
              the largest copper/cobalt mines in the DRC. In 2020, they produced
              just under{' '}
              <a
                class="link"
                href="https://www.reuters.com/article/us-glencore-outlook-idINKBN2A30UI"
              >
                28,000
              </a>{' '}
              tons of cobalt, despite closures of their largest mine, Mutanda
              due to Covid-19.
            </p>

            <Heading level="4">Gecamines</Heading>

            <p>
              State owned Congolese mining company, who owns a 20 percent stake
              in the Tenke Fungurume mine. Most recently in{' '}
              <a
                href="https://www.spglobal.com/platts/en/market-insights/latest-news/metals/033121-state-company-to-buy-all-drc-artisanally-mined-cobalt-partners-with-trafigura#:~:text=Its%20production%20of%2094%2C000%20mt,Takis%20said%20on%20the%20webinar."
                class="link"
              >
                April of 2021
              </a>
              , a subsidiary Entreprise Générale du Cobalt (EGC), partnered with
              the Trafigura Group for a five year contract to purchase all
              artisanally mined cobalt in the DRC. Gecamines produced just over
              15,000 tons of cobalt in 2020.
            </p>

            <Heading level="4">China Molybdenum</Heading>

            <p>
              The Chinese company owns a majority of the Tenke fungurume mine in
              the DRC, and produced{' '}
              <a
                href="https://www.reuters.com/article/cmoc-results/china-moly-boosts-q3-cobalt-output-by-around-20-from-previous-quarter-idUSL4N2HJ2K7"
                class="link"
              >
                10,500 tons
              </a>{' '}
              of cobalt in the first 3 quarters of 2020.
            </p>

            <Heading level="4">Vale</Heading>

            <p>
              A brazilian mining company with operations predominantly located
              in Canadian nickel mines, produced nearly{' '}
              <a href="https://www.statista.com/statistics/1172053/vale-cobalt-production/#:~:text=The%20Brazilian%20mining%20company%20Vale,New%20Caledonia%20and%20other%20locadtions">
                5,000 tons
              </a>{' '}
              of cobalt as a byproduct of nickel production.
            </p>

            <Heading level="4">Congo DongFang (CDM)</Heading>

            <p>
              A subsidiary of Zhejiang Huayou Cobalt, one of the few licensed
              buyers of cobalt from artisanal miners in Kolwezi or Lubumbashi.
              Artisanal Miners will go to the market in Musumpo, sell their
              cobalt to anyone who will pay, and often CDM is the client of
              unlicensed* buying houses in the DRC. Historically, CDM sources
              from towns where Amnesty International has documented child labor,
              or the handling of raw ore by children directly, or in contact
              through water sources.
            </p>

            <Heading level="3">Artisan Miners</Heading>

            <p>
              Of the 100,000 tons of cobalt produced in the DRC each year,
              artisanal mining accounts for around{' '}
              <a
                href="https://www.spglobal.com/platts/en/market-insights/latest-news/metals/033121-state-company-to-buy-all-drc-artisanally-mined-cobalt-partners-with-trafigura#:~:text=Its%20production%20of%2094%2C000%20mt,Takis%20said%20on%20the%20webinar."
                class="link"
              >
                15-30,000
              </a>{' '}
              of that number. Approximately 150,000 miners source that amount of
              cobalt by mining land owned by the large companies, from ZEAs, or
              from homemade mine shafts around their living situations.
            </p>

            <p>
              From these mines, artisanal miners take it to markets, where
              cobalt is bought by licensed buyers, and taken either to larger
              corporations who then transfer it back to China or other nearby
              countries to be refined and transformed into usable products.{' '}
            </p>

            <Heading level="2">Smelters & Refiners</Heading>

            <p>
              The Responsible Minerals Initiative (RMI) maintains a set of
              guidelines on cobalt sourcing, as well as a list of Smelters &
              Refiners that adhere to those guidelines. Conformant smelters are
              subject to inspections every 1-3 years for cobalt sourcing
              transparency and labor conditions. RMI also maintains a list of
              smelters that are currently actively refining cobalt.
            </p>

            <p>
              Of the 26 who are currently active in May 2021, none of them are
              on the conformant list, which means none of them can (or care to)
              trace where their cobalt comes from according to RMI’s RMAP
              guidelines So, we are all complicit in the current crisis.
            </p>

            <p>
              For a full list of smelters and refiners, whether active,
              conformant, or no longer operating, see{' '}
              <a
                href="http://www.responsiblemineralsinitiative.org/smelters-refiners-lists/#mineralchart"
                class="link"
              >
                Smelters & Refiners Lists
              </a>
            </p>

            <p>
              The refined cobalt is shipped abroad to companies in the Global
              North who use them in final goods (phones, laptops, EVs, etc).
              Buyers, Smelters and Refiners, and large corporations hold massive
              stakes in what we like to call “bottlenecks:” areas where they
              hold most of the power and control where cobalt goes from there.
            </p>

            <p>
              China owns a large stake in the mines and buying houses, but
              larger corporations control the smelting and refinement process.
              We are all accountable for the aspects of the supply chain we
              control, and it’s up to us to make our actions fall within a more
              responsible framework.
            </p>

            <Heading level="2">Manufacturers</Heading>

            <p>
              Refined cobalt is then shipped all over the world to
              component-level manufacturers, where the refined material is
              stamped, spun, fabricated, casted and inlaid into nearly every
              product in the modern world.
            </p>
          </section>
        </article>

        <article id="calls-to-action" class="orange">
          <section class="hero flashy">
            <hgroup>
              <Heading level="1" noAnchor>
                Calls to Action
              </Heading>
              <p>The best course to take in 2021</p>
            </hgroup>
          </section>

          <section>
            <hgroup>
              <Heading level="2">Supply Chain Transparency</Heading>
              <p>Advocate</p>
            </hgroup>

            <p>
              Why are we focusing on supply chain transparency? Simply put,
              there isn’t any currently. Corporations, refineries, and countries
              are not required to disclose where their cobalt comes from. This
              is not helped by countries like China, who don’t enforce any
              current legislation regarding the matter. The current system
              provides very little insight into cobalt sourcing, and quite
              frankly responsible sourcing is not high on anyone’s agenda.
            </p>

            <p>
              Internally, our organization is developing a program to explore
              the pursuit of legislation that supports supply chain transparency
              and the disclosure of cobalt sourcing for companies operating in
              the industry. Our goal is to find out the best ways in which a
              policy could be passed with the future goals being to eliminate:
            </p>

            <ol>
              <li>child mining</li>
              <li>unsafe working conditions</li>
              <li>
                inadequate compensation for artisanal and small-scale miners.
              </li>
            </ol>

            <p>
              There is legislation around the world that regulates the sourcing
              and mining or certain materials, but cobalt is left off the list.
            </p>

            <Heading level="3">Current Legislation</Heading>

            <ul>
              <li>European Union - Regulation 2017/821</li>
              <li>
                OECD - Due Diligence Guidance for Responsible Supply CHains of
                Minerals from Conflict-Affected and High Risk Areas
              </li>
              <li>
                United States - Dodd Frank Wall Street Reform and Consumer
                Protection Act, Section 1502
              </li>
              <li>
                International Tin Association - Member-based organization that
                enforces a responsible sourcing “code of conduct”
              </li>
              <li>
                Responsible Minerals Initiative / RMAP - member-based
                organization that enforces and regulate responsible sourcing
                practices and audits refiners and smelters
              </li>
            </ul>

            <p>
              In the European Union, in regulation 2017/821, article 1, it
              creates a Union system to support supply chain “due diligence,”
              regarding the sourcing and use of tin, tantalum, tungsten and
              gold, or any ores or materials containing such materials, as a
              means for armed militias and security forces to trade and
              perpetuate conflict as a result.
            </p>

            <p>
              The Organization for Economic Development and Cooperation also has
              their own
              <em>
                Due Diligence Guidance for Responsible Supply Chains of Minerals
                from Conflict-Affected and High-Risk Areas
              </em>
              , that provides business guidance on how to ethically and
              sustainably source the 3Ts and gold without promoting unethical
              practices or conflict in areas already at high risk for
              instability and violence. Since 2016, their documentation provides
              guidelines for sourcing minerals, as well as business plans for
              how to create internal systems that support this idea of due
              diligence.
            </p>

            <p>
              In the United States in 2010, Congress passed and amendment to
              section 13 of the Securities Exchange Act of 1934. In the
              “Dodd-Frank Wall Street Reform and Consumer Protection Act,”
              section 1502, subsection b discusses the disclosure of minerals
              originating from the DRC, and require businesses to disclose their
              due diligence measures in a report audited by an independent body
              in the private sector, within 270 days or sourcing. The goal with
              this amendment was to curb the indirect financial support to armed
              groups who are enacting “extreme levels of violence… particularly
              sexual and gender-based violence, and contributing to an emergency
              humanitarian situation therein.”
            </p>

            <p>
              Independent organizations that are working on this problem include
              PACT, and the International Tin Association (ITA). The ITA is a UK
              based organization that promotes the Tin industry and its use, but
              it also has a “Code of Conduct” for its members which requires
              them to be constantly innovating and evolving to be more
              sustainable, and more ethical in their sourcing of tin, and the
              workers and processes they employ. PACT implements their supply
              chain initiative, which promotes the traceability for tungsten,
              tantalum, and of course, tin.{' '}
            </p>

            <Heading level="3">Bare Minimum</Heading>

            <p>
              These laws and organizations are setting a precedent for supply
              chain due diligence, but given the complexity of the supply chain,
              the intersection between public and private sector legislation,
              and volatile international relations and power dynamics, it
              becomes very difficult to bring companies who profit off of cobalt
              on board with regulating their supply chains. While companies like
              Apple and Tesla have committed to finding alternatives or
              investigating their supply chains, there isn’t a way to hold them
              accountable to supply chain transparency regarding cobalt
              sourcing, and this is putting lives at risk every day.
            </p>

            <p>
              The current legislation presents a problem because it only
              accounts for the bare minimum. It provides for systems and groups
              to investigate and find ways to better source these minerals, but
              there is no accountability, and no guarantee that due diligence is
              actually happening. Even if there was, consumers aren’t aware of
              what exactly goes into their products, and subsequently can’t
              demand change. We need to go further with legislation, and require
              that our products are not unintentionally putting people at risk,
              just so we can claim to be moving in the right direction
              environmentally speaking.
            </p>

            <p>
              As it stand right now, our organization is in conversation and
              building relationships with local legislators here in Washington
              state to understand the legislative systems closest to us, and to
              find the best route for implementing transparency, that not only
              accomplishes our three goals, but also raises awareness to
              consumers of the reality that our products put men, women and
              children at risk of injury, extreme poverty and death.
            </p>

            <hgroup>
              <Heading level="2">Organizations on the Ground</Heading>
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

            <Heading level="3">PACT</Heading>

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

            <Heading level="3">Good Shepherd International</Heading>

            <p>
              The Good SHepherd International Foundation is a nonprofit
              organization founded by the Good Shepherd SIsters, an
              international congregation of religious women present in 70
              countries. GSIF’s mission is to support programs for children,
              girls and women, who specifically live in poverty, and are living
              in poverty and face gender-based violence, trafficking, and other
              types of discrimination.
            </p>

            <Heading level="3">Mercy Corps (DRCongo)</Heading>

            <p>
              Mercy corps is dedicated to addressing the root causes of problems
              through their 5600 member team in 40 different countries. They
              provide jobs to 85 percent of their members in their home
              countries.Mercy Corps is currently working towards providing
              humanitarian assistance to roughly 15.6 million people in the
              DRCongo who are in need, through cash assistance, clean water and
              sanitation, food security, and economic opportunity.
            </p>

            <Heading level="3">Congo Children Trust</Heading>

            <p>
              The CCT focuses on improving the livelihoods of children living on
              the streets in the DRC. They partner specifically with Kimbilito,
              their sole partner who operates in lubumbashi. The CCT is a
              charity that works to aid the 250,000 children living on the
              streets, often due to family death. They are vulnerable, and the 5
              centers provide resources and security to these children.
            </p>

            <hgroup>
              <Heading level="3">Hero Women Rising</Heading>
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

            <Heading level="3">Wonder Foundation</Heading>

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

            <Heading level="3">World Vision International (DRCongo)</Heading>

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

      <Footer>
        <a href="#overview" class="link">
          Overview
        </a>{' '}
        |{' '}
        <a href="#global-need" class="link">
          The Global Need
        </a>{' '}
        |{' '}
        <a href="#supply-chain" class="link">
          The Suppply Chain
        </a>{' '}
        |{' '}
        <a href="#calls-to-action" class="link">
          Calls to Action
        </a>{' '}
      </Footer>
    </>
  );
}
