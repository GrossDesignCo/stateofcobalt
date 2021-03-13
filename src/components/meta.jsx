import Head from "next/head";

export const Meta = ({ title, description }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta name="twitter:card" content="summary" />
  </Head>
);
