import type { NextPage } from "next";
import Head from "next/head";

type SeoProps = {
  title: string;
};

const Seo: NextPage<SeoProps> = ({ title = "Home" }) => (
  <Head>
    <title>{title} | Codico</title>
    <meta
      name="description"
      content="Award winning Singapore based mobile app development company. iOS, Android, Web, Social, Games, UI, UX &amp; SEO. 300 apps developed since 2010."
    />
    <meta
      name="keywords"
      content="Award winning Singapore based mobile app development company. iOS, Android, Web, Social, Games, UI, UX &amp; SEO. 300 apps developed since 2010."
    />
    <link rel="icon" href="/logo-codico-red.svg" />
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
    <meta property="og:image" content="https://www.codigo.co/img/social.jpg" />
    <link rel="shortcut icon" href="favicon.ico" />
    <meta name="pinterest" content="nopin" />
    <base href="/" />
  </Head>
);

export default Seo;
