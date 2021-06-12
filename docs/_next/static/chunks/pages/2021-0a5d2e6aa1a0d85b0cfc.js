(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[951],{3391:function(e,n,t){"use strict";function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],i=!0,r=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(i=(o=s.next()).done)&&(t.push(o.value),!n||t.length!==n);i=!0);}catch(l){r=!0,a=l}finally{try{i||null==s.return||s.return()}finally{if(r)throw a}}return t}}(e,n)||function(e,n){if(e){if("string"===typeof e)return i(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(n,{Z:function(){return r}})},3232:function(e,n,t){"use strict";t.d(n,{zx:function(){return h},$_:function(){return g},X6:function(){return m},JH:function(){return d},h_:function(){return b}});var i=t(5893),r=t(6156),a=t(7375),o=t(4184),s=t.n(o);function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var h=function(e){var n,t=e.text,o=e.href,l=e.level,h=e.icon,d=(0,a.Z)(e,["text","href","level","icon"]),u=o?"a":"button";return(0,i.jsxs)(u,c(c({href:o,class:s()("button",(n={},(0,r.Z)(n,"".concat(l),l),(0,r.Z)(n,"flashy","primary"===l),n))},d),{},{children:[h,h&&t?(0,i.jsx)("span",{children:t}):t]}))},d=function(){return(0,i.jsx)("svg",{viewBox:"0 0 21 21",xmlns:"http://www.w3.org/2000/svg",class:"icon icon-link",children:(0,i.jsx)("path",{fill:"none",fillRule:"evenodd",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"M9.5 7.5l1-1a2.828 2.828 0 114 4l-1 1m-2 2l-2 2a2.828 2.828 0 11-4-4l2-2M7.5 13.5l5-5"})})},u=t(9980),p=function(e){return navigator.clipboard.writeText("".concat(window.location.origin,"#").concat(e))},m=function(e){var n=e.level,t=e.children,r=e.href,a=void 0===r?(0,u.o)(t.toString()):r,o=e.noAnchor,s="h".concat(n);return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(s,{children:[!o&&(0,i.jsx)("a",{href:"#".concat(a),class:"permalink",onClick:p,"aria-label":"Copy permalink",children:(0,i.jsx)(d,{})}),t]})})},g=function(e){var n=e.children;return(0,i.jsx)("footer",{children:(0,i.jsxs)("nav",{children:[n,n?"| ":"",(0,i.jsx)("a",{class:"link primary",href:"/about",children:"About"})]})})},f=t(9008),b=function(e){var n=e.title,t=e.description;return(0,i.jsxs)(f.default,{children:[(0,i.jsx)("title",{children:n}),(0,i.jsx)("meta",{name:"description",content:t}),(0,i.jsx)("meta",{property:"og:title",content:n}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary"})]})}},791:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var i=t(5893),r=t(3391),a=t(7294),o=t(44),s=t(4334);function l(){var e=s.mF,n=s.rr,t=s.gQ,l=(0,a.useState)(!1),c=l[0],h=l[1],d=["Congo (Kinshasa)","Australia","Russia","China","United States"],u=c?Object.entries(e):d.map((function(n){return[n,e[n]]}));return(0,i.jsx)("div",{class:"table-wrapper",children:(0,i.jsxs)("table",{children:[(0,i.jsxs)("caption",{children:["Mine Production per Country (in tons)"," ",(0,i.jsx)("button",{onClick:function(){return h(!c)},class:"button secondary",children:c?"Collapse List":"Expand List"})," ",(0,i.jsx)("a",{href:"/cobalt-production-per-country-by-year.json",target:"_blank",class:"button secondary",children:"View raw data (json file)"})]}),(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Country"}),t.map((function(e){return(0,i.jsx)("th",{children:e},e)}))]})}),(0,i.jsxs)("tbody",{children:[u.map((function(e){var t=(0,r.Z)(e,2),a=t[0],s=t[1];return c||d.includes(a)?(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:a}),s.map((function(e,t){var r=e/n[t]*100;return(0,i.jsx)("td",{children:e?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{children:(0,o._)(e)})," ",(0,i.jsxs)("span",{class:"accent small",children:["(",r.toFixed(0),"%)"]})]}):(0,i.jsx)("span",{class:"accent",children:"\u2014"})})}))]},a):null})),(0,i.jsxs)("tr",{class:"total",children:[(0,i.jsx)("td",{children:"World"}),n.map((function(e){var n;return(0,i.jsx)("td",{children:null!==(n=(0,o._)(e))&&void 0!==n?n:(0,i.jsx)("span",{class:"accent",children:"\u2014"})},e)}))]})]})]})})}},575:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var i=t(3391),r=t(5893),a=t(7294),o=t(44),s=JSON.parse('{"notes":["Data copied from US Geological Survey: https://www.usgs.gov/centers/nmic/cobalt-statistics-and-information","Data specifically pulled from 2021 Cobalt Statistics Pub: https://pubs.usgs.gov/periodicals/mcs2021/mcs2021-cobalt.pdf"],"world":7100000,"perCountry":{"Australia":1400000,"Canada":220000,"China":80000,"Congo (Kinshasa)":3600000,"Cuba":500000,"Madagascar":100000,"Morocco":14000,"Papua New Guinea":51000,"Philippines":260000,"Russia":250000,"South Africa":40000,"United States":53000,"Other":560000}}');function l(){var e=s.perCountry,n=s.world,t=(0,a.useState)(!1),l=t[0],c=t[1],h=l?Object.entries(e):["Congo (Kinshasa)","Australia","Russia","China","United States"].map((function(n){return[n,e[n]]}));return console.log(s),(0,r.jsx)("div",{class:"table-wrapper",children:(0,r.jsxs)("table",{children:[(0,r.jsxs)("caption",{children:["Reserves per Country (in tons)"," ",(0,r.jsx)("button",{onClick:function(){return c(!l)},class:"button secondary",children:l?"Collapse List":"Expand List"})," ",(0,r.jsx)("a",{href:"/cobalt-reserves-per-country.json",target:"_blank",class:"button secondary",children:"View raw data (json file)"})]}),(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Country"}),(0,r.jsx)("th",{children:"Known Reserves"}),(0,r.jsx)("th",{children:"Estimated?"})]})}),(0,r.jsxs)("tbody",{children:[h.map((function(e){var t=(0,i.Z)(e,2),a=t[0],s=t[1];return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:a}),(0,r.jsxs)("td",{children:[(0,r.jsx)("span",{children:(0,o._)(s)})," ",(0,r.jsxs)("span",{class:"accent small",children:["(",(0,o._)(100*(s/n).toFixed(3)),"%)"]})]}),(0,r.jsx)("td",{children:"?"})]})})),(0,r.jsx)("tr",{}),(0,r.jsxs)("tr",{class:"total",children:[(0,r.jsx)("td",{children:"World"}),(0,r.jsx)("td",{children:(0,o._)(n)})]})]})]})})}},4701:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return s}});var i=t(5893),r=t(3232),a=t(791),o=t(575);function s(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h_,{title:"State of Cobalt | 2021",description:"The State of Cobalt report for 2021"}),(0,i.jsxs)("main",{children:[(0,i.jsxs)("article",{id:"overview",class:"cobalt",children:[(0,i.jsx)("section",{class:"hero",children:(0,i.jsxs)("hgroup",{children:[(0,i.jsx)(r.X6,{level:"1",href:"overview",children:"State of Cobalt"}),(0,i.jsx)("p",{children:"Report for 2021"})]})}),(0,i.jsxs)("section",{children:[(0,i.jsx)("hgroup",{children:(0,i.jsx)(r.X6,{level:"2",children:"Background"})}),(0,i.jsx)("p",{children:"At Project Cobalt, we believe that a sustainable future shouldn\u2019t come at the cost of injustice."}),(0,i.jsx)("p",{children:"Cobalt is critical to battery technology and nearly every sustainable technology in production today. Phones, Electric Vehicles, Solar/Energy, Medical Equipment, Aviation, Agriculture, and industrial projects all depend on cobalt as a component to their efficiency and sustainability."}),(0,i.jsx)("p",{children:"This report serves as an update to previous reporting efforts over the last decade, to show the dependence we all have on cobalt, and that it\u2019s not the miners themselves that are problematic, but the responsibility and guidelines by which we source cobalt. Together, we can change our approach, and create an ethical system of sourcing, supporting a collective, green future and the human rights of the Congolese people."}),(0,i.jsx)(r.X6,{level:"3",children:"The Democratic Republic of the Congo"}),(0,i.jsx)("p",{children:"More than half of the world\u2019s cobalt supply comes from the Democratic Republic of the Congo (DRC), home to nearly 90 million people. A majority of cobalt is mined through larger corporations who operate on their own land, but about 30% of cobalt comes from artisanal and small-scale miners (ASM) who mine either on designated mining areas called Zones d\u2019Exploitation Artisanale (ZEAs), or without permits wherever they can."}),(0,i.jsx)(a.default,{}),(0,i.jsx)("p",{children:"This portion of cobalt production happens through dangerous (and often illegal) practices that put men, women and children at risk of serious injury, future health complications, and death. Cobalt is essential to the future of climate-smart technology and responsible energy, but we can\u2019t neglect the 150,000 people who make it possible. They deserve better working conditions, dignity, and their human rights."}),(0,i.jsx)("p",{children:"The DRC is a large country in sub-saharan Africa, afflicted with foreign intervention since before its independence, and continues to struggle with disease outbreaks, poor medical treatment, economic disparity, political and military corruption, and a massive influx of migrants fleeing crises from neighboring states."}),(0,i.jsx)("p",{children:"During the early 1990s and late 2000s, militant groups, power grabs, and political unrest caused the region to destabilize, and a dependence on the mining of cobalt & other minerals came to provide a stable source of income for the opportunists who put their lives in harm\u2019s way."}),(0,i.jsx)("p",{children:"Today, the region has fallen victim to power structures, abuses of human rights like gender violence against women and girls and ethnic violence, as well as war crimes committed during civil wars between the DRC and neighboring countries. This creates a country, rich in resources, and yet struggling to provide constitutionally guaranteed education, because the deficit is too large."}),(0,i.jsx)(o.default,{})]})]}),(0,i.jsxs)("article",{id:"global-need",class:"slate",children:[(0,i.jsx)("section",{class:"hero flashy",children:(0,i.jsxs)("hgroup",{children:[(0,i.jsx)(r.X6,{level:"1",noAnchor:!0,children:"The Global Need"}),(0,i.jsx)("p",{children:"The best course to take in 2021"})]})}),(0,i.jsxs)("section",{children:[(0,i.jsx)("p",{children:"As green tech & energy-storage boom over the 2020s, cobalt demand is expected to skyrocket. Some companies are already investing in cobalt alternatives, but those efforts aren\u2019t likely to outweigh the increase in global demand."}),(0,i.jsx)("p",{children:"Cobalt is predominantly used in lithium-ion batteries, or rechargeable batteries that hold a higher charge due to the chemical structure of cobalt allowing larger amounts of energy to be stored in a smaller space (energy density) and degrading less over time & energy transferred (longer shelf-life) than nearly every alternative. These are at the heart of modern technologies, from phones to the electric vehicles."}),(0,i.jsx)("p",{children:"Even large-scale green infrastructure projects that are essential for sustainable energy require massive, utility-scale batteries like the Tesla Megapack currently require cobalt, although alternative materials look promising in this field. Stationary batteries don\u2019t have the same energy-density requirements as vehicles or consumer electronics, meaning that they can take advantage of relatively cheaper (but heavier & larger) materials."}),(0,i.jsx)("p",{children:"Cobalt\u2019s high energy density and low degradation means higher potential for its applications, because it can go longer, be smaller, and weigh less, than alternatives like Iron, Nickel, or Manganese. Cobalt itself is also highly resistant to high heat and wear over time, making it a prime choice for jet engines."}),(0,i.jsx)(r.X6,{level:"2",children:"Applications"}),(0,i.jsx)("p",{children:"The below represents a brief overview of the applications & fields cobalt supports."}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("div",{children:(0,i.jsx)("strong",{children:"Energy"})}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Large-scale Lithium-ion batteries (electric vehicles, green infrastructure)"}),(0,i.jsx)("li",{children:"Consumer electronics (phones, laptops, etc.)"}),(0,i.jsx)("li",{children:"Solar panels and other photovoltaic cells"}),(0,i.jsx)("li",{children:"Clean fuel technologies (the catalytic properties of cobalt allow it to desulphurize hydrocarbons, producing cleaner fuel.)"}),(0,i.jsx)("li",{children:"Removal of nitrous oxide, mitigating greenhouse gasses."})]})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("div",{children:(0,i.jsx)("strong",{children:"Manufacturing & Industry"})}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Creates effective tools for cutting hard materials (ie. Diamonds)"}),(0,i.jsx)("li",{children:"Cobalt-chloride can be used as an alloy with other metals to increase durability and wear, especially in hot, pressurized, or acidic environments."}),(0,i.jsx)("li",{children:"Magnets"}),(0,i.jsx)("li",{children:"Electroplating"}),(0,i.jsx)("li",{children:"Jet turbines and gas turbine generators"})]})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("div",{children:(0,i.jsx)("strong",{children:"Medicine"})}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Nanoparticles used to enhance imaging and sensors (eg. MRIs)"}),(0,i.jsx)("li",{children:"Site-specific drug delivery for cancer treatments"}),(0,i.jsx)("li",{children:"Radioactive Cobalt-60 is a source of gamma rays used in radiation-therapies for cancer treatment, to sterilize medical supplies, and to preserve food"}),(0,i.jsx)("li",{children:"Compact medical electronics (eg. hearing aids)"}),(0,i.jsx)("li",{children:"Orthopedic implants (eg. cobalt-chrome femoral stems, used in hip-replacements)"})]})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("div",{children:(0,i.jsx)("strong",{children:"Militaries"})}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Absorbs high frequency millimeter waves, visible light and infrared."}),(0,i.jsx)("li",{children:"Aerospace parts"})]})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("div",{children:(0,i.jsx)("strong",{children:"Agriculture"})}),(0,i.jsx)("ul",{children:(0,i.jsx)("li",{children:"Cobalt can be added to nutrient-poor soil, increasing cobalt in animal consumption, preventing \u201cwasting disease.\u201d"})})]})]}),(0,i.jsx)("p",{children:"Given the prevalence of cobalt in so many applications of our daily lives, we as an organization came to the conclusion that we can\u2019t simply turn to an alternative mineral to source. Perhaps the tech industry could switch to alternatives quickly, but medical, agriculture, and other fields don\u2019t have the ability to change production and their research and development as fast."}),(0,i.jsx)("p",{children:"This led us to determine is sourcing cobalt could be changed to require the disclosure of supply chains in our business practices, to create awareness of the child labor and horrible conditions that are used to power our lives, and to eventually create a demand for change."}),(0,i.jsx)(r.X6,{level:"2",children:"Usage & Trends"}),(0,i.jsx)("p",{children:"Phones & laptops are a relatively saturated market already, but account for [a large portion] of cobalt required each year. EVs are expected to explode over the next decade as automakers globally move from fossil-fuel-based to electric fleets. Infrastructure batteries are the relative newcomers, and are likewise expected to grow dramatically, as countries increasingly pursue renewable energy."})]})]}),(0,i.jsxs)("article",{id:"supply-chain",class:"slate",children:[(0,i.jsx)("section",{class:"hero flashy",children:(0,i.jsx)("hgroup",{children:(0,i.jsx)(r.X6,{level:"1",noAnchor:!0,children:"The Supply Chain"})})}),(0,i.jsxs)("section",{children:[(0,i.jsx)("p",{children:"When it first came into the public spotlight in 2016, the cobalt pipeline essentially looked like all mines and operations sold their cobalt to Chinese buyers, then was shipped off to refiners and smelters operated by \u201cLarge scale mining\u201d corporations."}),(0,i.jsx)("p",{children:"In 2020 & 2021, the supply chain has diversified and shifted power to other countries; so, while China continues to hold a large stake in the field, we are all responsible for what happens through the transfer of cobalt from mine to final product."}),(0,i.jsx)(r.X6,{level:"2",children:"Raw Production"}),(0,i.jsx)("p",{children:"The cobalt supply chain is roughly divided into two categories -- large scale mining corporations and artisanal mining, roughly a 70/30 split between the two."}),(0,i.jsx)(r.X6,{level:"3",children:"The largest mining corporations"}),(0,i.jsx)("p",{children:"These purchase raw cobalt ore from suppliers or source directly from mining lands they own."}),(0,i.jsx)(r.X6,{level:"4",children:"Glencore"}),(0,i.jsxs)("p",{children:["An Anglo-Swiss multinational corporation, Glencore owns some of the largest copper/cobalt mines in the DRC. In 2020, they produced just under"," ",(0,i.jsx)("a",{class:"link",href:"https://www.reuters.com/article/us-glencore-outlook-idINKBN2A30UI",children:"28,000"})," ","tons of cobalt, despite closures of their largest mine, Mutanda due to Covid-19."]}),(0,i.jsx)(r.X6,{level:"4",children:"Gecamines"}),(0,i.jsxs)("p",{children:["State owned Congolese mining company, who owns a 20 percent stake in the Tenke Fungurume mine. Most recently in"," ",(0,i.jsx)("a",{href:"https://www.spglobal.com/platts/en/market-insights/latest-news/metals/033121-state-company-to-buy-all-drc-artisanally-mined-cobalt-partners-with-trafigura#:~:text=Its%20production%20of%2094%2C000%20mt,Takis%20said%20on%20the%20webinar.",class:"link",children:"April of 2021"}),", a subsidiary Entreprise G\xe9n\xe9rale du Cobalt (EGC), partnered with the Trafigura Group for a five year contract to purchase all artisanally mined cobalt in the DRC. Gecamines produced just over 15,000 tons of cobalt in 2020."]}),(0,i.jsx)(r.X6,{level:"4",children:"China Molybdenum"}),(0,i.jsxs)("p",{children:["The Chinese company owns a majority of the Tenke fungurume mine in the DRC, and produced"," ",(0,i.jsx)("a",{href:"https://www.reuters.com/article/cmoc-results/china-moly-boosts-q3-cobalt-output-by-around-20-from-previous-quarter-idUSL4N2HJ2K7",class:"link",children:"10,500 tons"})," ","of cobalt in the first 3 quarters of 2020."]}),(0,i.jsx)(r.X6,{level:"4",children:"Vale"}),(0,i.jsxs)("p",{children:["A brazilian mining company with operations predominantly located in Canadian nickel mines, produced nearly"," ",(0,i.jsx)("a",{href:"https://www.statista.com/statistics/1172053/vale-cobalt-production/#:~:text=The%20Brazilian%20mining%20company%20Vale,New%20Caledonia%20and%20other%20locadtions",children:"5,000 tons"})," ","of cobalt as a byproduct of nickel production."]}),(0,i.jsx)(r.X6,{level:"4",children:"Congo DongFang (CDM)"}),(0,i.jsx)("p",{children:"A subsidiary of Zhejiang Huayou Cobalt, one of the few licensed buyers of cobalt from artisanal miners in Kolwezi or Lubumbashi. Artisanal Miners will go to the market in Musumpo, sell their cobalt to anyone who will pay, and often CDM is the client of unlicensed* buying houses in the DRC. Historically, CDM sources from towns where Amnesty International has documented child labor, or the handling of raw ore by children directly, or in contact through water sources."}),(0,i.jsx)(r.X6,{level:"3",children:"Artisan Miners"}),(0,i.jsxs)("p",{children:["Of the 100,000 tons of cobalt produced in the DRC each year, artisanal mining accounts for around"," ",(0,i.jsx)("a",{href:"https://www.spglobal.com/platts/en/market-insights/latest-news/metals/033121-state-company-to-buy-all-drc-artisanally-mined-cobalt-partners-with-trafigura#:~:text=Its%20production%20of%2094%2C000%20mt,Takis%20said%20on%20the%20webinar.",class:"link",children:"15-30,000"})," ","of that number. Approximately 150,000 miners source that amount of cobalt by mining land owned by the large companies, from ZEAs, or from homemade mine shafts around their living situations."]}),(0,i.jsxs)("p",{children:["From these mines, artisanal miners take it to markets, where cobalt is bought by licensed buyers, and taken either to larger corporations who then transfer it back to China or other nearby countries to be refined and transformed into usable products."," "]}),(0,i.jsx)(r.X6,{level:"2",children:"Smelters & Refiners"}),(0,i.jsx)("p",{children:"The Responsible Minerals Initiative (RMI) maintains a set of guidelines on cobalt sourcing, as well as a list of Smelters & Refiners that adhere to those guidelines. Conformant smelters are subject to inspections every 1-3 years for cobalt sourcing transparency and labor conditions. RMI also maintains a list of smelters that are currently actively refining cobalt."}),(0,i.jsx)("p",{children:"Of the 26 who are currently active in May 2021, none of them are on the conformant list, which means none of them can (or care to) trace where their cobalt comes from according to RMI\u2019s RMAP guidelines So, we are all complicit in the current crisis."}),(0,i.jsxs)("p",{children:["For a full list of smelters and refiners, whether active, conformant, or no longer operating, see"," ",(0,i.jsx)("a",{href:"http://www.responsiblemineralsinitiative.org/smelters-refiners-lists/#mineralchart",class:"link",children:"Smelters & Refiners Lists"})]}),(0,i.jsx)("p",{children:"The refined cobalt is shipped abroad to companies in the Global North who use them in final goods (phones, laptops, EVs, etc). Buyers, Smelters and Refiners, and large corporations hold massive stakes in what we like to call \u201cbottlenecks:\u201d areas where they hold most of the power and control where cobalt goes from there."}),(0,i.jsx)("p",{children:"China owns a large stake in the mines and buying houses, but larger corporations control the smelting and refinement process. We are all accountable for the aspects of the supply chain we control, and it\u2019s up to us to make our actions fall within a more responsible framework."})]})]}),(0,i.jsxs)("article",{id:"calls-to-action",class:"orange",children:[(0,i.jsx)("section",{class:"hero flashy",children:(0,i.jsxs)("hgroup",{children:[(0,i.jsx)(r.X6,{level:"1",noAnchor:!0,children:"Calls to Action"}),(0,i.jsx)("p",{children:"The best course to take in 2021"})]})}),(0,i.jsxs)("section",{children:[(0,i.jsxs)("hgroup",{children:[(0,i.jsx)(r.X6,{level:"2",children:"Supply Chain Transparency"}),(0,i.jsx)("p",{children:"Advocate"})]}),(0,i.jsx)("p",{children:"Why are we focusing on supply chain transparency? Simply put, there isn\u2019t any currently. Corporations, refineries, and countries are not required to disclose where their cobalt comes from. This is not helped by countries like China, who don\u2019t enforce any current legislation regarding the matter. The current system provides very little insight into cobalt sourcing, and quite frankly responsible sourcing is not high on anyone\u2019s agenda."}),(0,i.jsx)("p",{children:"Internally, our organization is developing a program to explore the pursuit of legislation that supports supply chain transparency and the disclosure of cobalt sourcing for companies operating in the industry. Our goal is to find out the best ways in which a policy could be passed with the future goals being to eliminate:"}),(0,i.jsxs)("ol",{children:[(0,i.jsx)("li",{children:"child mining"}),(0,i.jsx)("li",{children:"unsafe working conditions"}),(0,i.jsx)("li",{children:"inadequate compensation for artisanal and small-scale miners."})]}),(0,i.jsx)("p",{children:"There is legislation around the world that regulates the sourcing and mining or certain materials, but cobalt is left off the list."}),(0,i.jsx)(r.X6,{level:"3",children:"Current Legislation"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"European Union - Regulation 2017/821"}),(0,i.jsx)("li",{children:"OECD - Due Diligence Guidance for Responsible Supply CHains of Minerals from Conflict-Affected and High Risk Areas"}),(0,i.jsx)("li",{children:"United States - Dodd Frank Wall Street Reform and Consumer Protection Act, Section 1502"}),(0,i.jsx)("li",{children:"International Tin Association - Member-based organization that enforces a responsible sourcing \u201ccode of conduct\u201d"}),(0,i.jsx)("li",{children:"Responsible Minerals Initiative / RMAP - member-based organization that enforces and regulate responsible sourcing practices and audits refiners and smelters"})]}),(0,i.jsx)("p",{children:"In the European Union, in regulation 2017/821, article 1, it creates a Union system to support supply chain \u201cdue diligence,\u201d regarding the sourcing and use of tin, tantalum, tungsten and gold, or any ores or materials containing such materials, as a means for armed militias and security forces to trade and perpetuate conflict as a result."}),(0,i.jsxs)("p",{children:["The Organization for Economic Development and Cooperation also has their own",(0,i.jsx)("em",{children:"Due Diligence Guidance for Responsible Supply Chains of Minerals from Conflict-Affected and High-Risk Areas"}),", that provides business guidance on how to ethically and sustainably source the 3Ts and gold without promoting unethical practices or conflict in areas already at high risk for instability and violence. Since 2016, their documentation provides guidelines for sourcing minerals, as well as business plans for how to create internal systems that support this idea of due diligence."]}),(0,i.jsx)("p",{children:"In the United States in 2010, Congress passed and amendment to section 13 of the Securities Exchange Act of 1934. In the \u201cDodd-Frank Wall Street Reform and Consumer Protection Act,\u201d section 1502, subsection b discusses the disclosure of minerals originating from the DRC, and require businesses to disclose their due diligence measures in a report audited by an independent body in the private sector, within 270 days or sourcing. The goal with this amendment was to curb the indirect financial support to armed groups who are enacting \u201cextreme levels of violence\u2026 particularly sexual and gender-based violence, and contributing to an emergency humanitarian situation therein.\u201d"}),(0,i.jsxs)("p",{children:["Independent organizations that are working on this problem include PACT, and the International Tin Association (ITA). The ITA is a UK based organization that promotes the Tin industry and its use, but it also has a \u201cCode of Conduct\u201d for its members which requires them to be constantly innovating and evolving to be more sustainable, and more ethical in their sourcing of tin, and the workers and processes they employ. PACT implements their supply chain initiative, which promotes the traceability for tungsten, tantalum, and of course, tin."," "]}),(0,i.jsx)(r.X6,{level:"3",children:"Bare Minimum"}),(0,i.jsx)("p",{children:"These laws and organizations are setting a precedent for supply chain due diligence, but given the complexity of the supply chain, the intersection between public and private sector legislation, and volatile international relations and power dynamics, it becomes very difficult to bring companies who profit off of cobalt on board with regulating their supply chains. While companies like Apple and Tesla have committed to finding alternatives or investigating their supply chains, there isn\u2019t a way to hold them accountable to supply chain transparency regarding cobalt sourcing, and this is putting lives at risk every day."}),(0,i.jsx)("p",{children:"The current legislation presents a problem because it only accounts for the bare minimum. It provides for systems and groups to investigate and find ways to better source these minerals, but there is no accountability, and no guarantee that due diligence is actually happening. Even if there was, consumers aren\u2019t aware of what exactly goes into their products, and subsequently can\u2019t demand change. We need to go further with legislation, and require that our products are not unintentionally putting people at risk, just so we can claim to be moving in the right direction environmentally speaking."}),(0,i.jsx)("p",{children:"As it stand right now, our organization is in conversation and building relationships with local legislators here in Washington state to understand the legislative systems closest to us, and to find the best route for implementing transparency, that not only accomplishes our three goals, but also raises awareness to consumers of the reality that our products put men, women and children at risk of injury, extreme poverty and death."}),(0,i.jsxs)("hgroup",{children:[(0,i.jsx)(r.X6,{level:"2",children:"Organizations on the Ground"}),(0,i.jsx)("p",{children:"Support"})]}),(0,i.jsx)("p",{children:"True impact takes time, time that many individuals won\u2019t have. As the DRC is home to the largest number of displaced persons, and the second largest number of food insecure people, there needs to be an effort made to mitigate poverty, food insecurity, gender-based discrimination, and many other human rights abuses. While our long term goals are still being realized, there are other ways in which we can help people now. This is a list of organizations who work in the DRC, and are either funded by countries in the global North, or by local, private and public partners. They approach development from a standpoint of localization: the use of local organizations to implement development. While supporting some of these organizations is only a short term solution, it is still crucial to the mitigation of poverty until larger changes can be made."}),(0,i.jsx)(r.X6,{level:"3",children:"PACT"}),(0,i.jsx)("p",{children:"PACT is a nonprofit organization that performs international development in 40 different countries. Since 1971, they have been working local groups and organizations to address problems within public health, environment and energy, gender based discrimination, mining communities, among others. Their work in the Democratic Republic of the Congo began in 2003, and focuses on helping artisanal and small-scale mining communities. Their goal is to remove human rights abuses, formalize the work, and overall make their lives safer."}),(0,i.jsx)(r.X6,{level:"3",children:"Good Shepherd International"}),(0,i.jsx)("p",{children:"The Good SHepherd International Foundation is a nonprofit organization founded by the Good Shepherd SIsters, an international congregation of religious women present in 70 countries. GSIF\u2019s mission is to support programs for children, girls and women, who specifically live in poverty, and are living in poverty and face gender-based violence, trafficking, and other types of discrimination."}),(0,i.jsx)(r.X6,{level:"3",children:"Mercy Corps (DRCongo)"}),(0,i.jsx)("p",{children:"Mercy corps is dedicated to addressing the root causes of problems through their 5600 member team in 40 different countries. They provide jobs to 85 percent of their members in their home countries.Mercy Corps is currently working towards providing humanitarian assistance to roughly 15.6 million people in the DRCongo who are in need, through cash assistance, clean water and sanitation, food security, and economic opportunity."}),(0,i.jsx)(r.X6,{level:"3",children:"Congo Children Trust"}),(0,i.jsx)("p",{children:"The CCT focuses on improving the livelihoods of children living on the streets in the DRC. They partner specifically with Kimbilito, their sole partner who operates in lubumbashi. The CCT is a charity that works to aid the 250,000 children living on the streets, often due to family death. They are vulnerable, and the 5 centers provide resources and security to these children."}),(0,i.jsxs)("hgroup",{children:[(0,i.jsx)(r.X6,{level:"3",children:"Hero Women Rising"}),(0,i.jsx)("p",{children:"Synergie des Associations Feminines du Congo (SAFECO)"})]}),(0,i.jsx)("p",{children:"SAFECO is an organization founded by Neema Namadamu, who served in Parliament for South Kivu, was Chief Advisor to the DRC Minister of Gender and Family. When she left official aid systems, she decided to found the Synergy of Congolese Women\u2019s Associations (SAFECO) in 2012, and then Hero Women RIsing in 2014. THe goal is to create a system of organizations who come together to address gender-based discrimination and violence through programs that elevate women in society and business."}),(0,i.jsx)(r.X6,{level:"3",children:"Wonder Foundation"}),(0,i.jsx)("p",{children:"The wonder foundation partners with local projects to empower Congolese women and children in the area. Lyc\xe9e Liziba is a program geared towards providing high quality education to girls in the Congo, a crucial program given the inability of the government and infrastructure to provide sit. Institut Sup\xe9rieur en Sciences Infirmi\xe8res (ISSI) is a program that trains nurses and midwives to increase the health standards in teh Congo. They take part ina Master\u2019s program in HealthCare Administration, and go on to train the incoming generation of health care professionals in the country."}),(0,i.jsx)(r.X6,{level:"3",children:"World Vision International (DRCongo)"}),(0,i.jsx)("p",{children:"World Vision operates through sponsorship of families in the DRC, with a focus on financial support. Their three primary initiatives include education and increasing access and quality, health care improvements for children ages 0 to 5, and resiliency by increasing financial stability and recovery from disasters."})]})]})]}),(0,i.jsxs)(r.$_,{children:[(0,i.jsx)("a",{href:"#overview",class:"link",children:"Overview"})," ","|"," ",(0,i.jsx)("a",{href:"#global-need",class:"link",children:"The Global Need"})," ","|"," ",(0,i.jsx)("a",{href:"#supply-chain",class:"link",children:"The Suppply Chain"})," ","|"," ",(0,i.jsx)("a",{href:"#calls-to-action",class:"link",children:"Calls to Action"})," "]})]})}},44:function(e,n,t){"use strict";t.d(n,{_:function(){return i}});var i=function(e){return e?new Intl.NumberFormat("en-US",{maximumSignificantDigits:3,notation:"compact"}).format(e).toLocaleLowerCase():null}},2031:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/2021",function(){return t(4701)}])},4334:function(e){"use strict";e.exports=JSON.parse('{"gQ":[2021,2020,2019,2018,2017,2016,2015],"rr":[null,140000,144000,140000,120000,123000,126000],"mF":{"Australia":[null,5700,5740,4700,5030,5100,6000],"Canada":[null,3200,3340,3800,3870,7300,6900],"China":[null,2300,2500,3100,3100,7700,7700],"Congo (Kinshasa)":[null,95000,100000,90000,73000,66000,63000],"Cuba":[null,3600,3800,4900,5000,4200,4300],"Madagascar":[null,700,3400,3500,3500,3300,3700],"Morocco":[null,1900,2300,2300,2200,null,null],"Papua New Guinea":[null,2800,2910,3200,3310,null,null],"New Caledonia":[null,null,null,null,null,3300,3680],"Philippines":[null,4700,5100,4600,4600,3500,4300],"Russia":[null,6300,6300,5900,5900,6200,6200],"South Africa":[null,1800,2100,2200,2300,3000,3000],"United States":[null,600,500,500,640,690,760],"Other":[null,6400,6320,7000,7650,8300,11600]}}')}},function(e){e.O(0,[774,785],(function(){return n=2031,e(e.s=n);var n}));var n=e.O();_N_E=n}]);