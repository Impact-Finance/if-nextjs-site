import Head from 'next/head';

const SiteHeader = () => {
  return (
    <Head>
      <meta
        httpEquiv="X-UA-Compatible"
        content="IE=edge,chrome=1"
      />
      <title>Impact Finance</title>
      <link
        rel="icon"
        href="/company/if.ico"
      />
      <meta
        name="description"
        content="Impact Finance builds interactive digital economies to support high-impact causes. They build solutions for decentralized science, sustainable public goods, and climate action x web3."
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <meta
        name="author"
        content="Impact Finance"
      />

      {/* <!-- Twitter card  --> */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        name="twitter:site"
        content="@DeSci_Impact"
      />
      <meta
        name="twitter:creator"
        content="@DeSci_Impact"
      />
      <meta
        name="twitter:title"
        content="Impact Finance"
      />
      <meta
        name="twitter:description"
        content="Impact Finance builds interactive digital economies to support high-impact causes. They build solutions for decentralized science, sustainable public goods, and climate action x web3."
      />
      <meta
        name="twitter:image"
        content="https://www.impact-finance.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmeta-image.a6da3db7.jpg&w=3840&q=75"
      />

      {/* <!-- Open Graph Meta Tags --> */}
      <meta
        property="og:title"
        content="Impact Finance"
      />
      <meta
        property="og:type"
        content="website"
      />
      <meta
        property="og:site_name"
        content="Impact Finance"
      />
      <meta
        property="og:description"
        content="Impact Finance builds interactive digital economies to support high-impact causes. They build solutions for decentralized science, sustainable public goods, and climate action x web3."
      />
      <meta
        property="og:url"
        content="https://www.impact-finance.io/"
      />
      <meta
        property="og:image"
        content="https://www.impact-finance.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmeta-image.a6da3db7.jpg&w=3840&q=75"
      />
    </Head>
  );
};

export default SiteHeader;
