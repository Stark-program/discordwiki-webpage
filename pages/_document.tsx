import { Html, Head, Main, NextScript } from 'next/document';
import Document from 'next/document';

export default function Application() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Montserrat:wght@400;700&family=Work+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <meta property="og:title" content="Discord Wiki" />
        <meta property="og:image" content="https://imgur.com/a/W3XYCAk" />
        <meta
          property="og:description"
          content="Discord Wiki is a community driven server browser aimed to give users an ability to see what communities are like, seamlessly and easily. You can checkout text channels and browse the content posted by that server!"
        />
        <meta property="og:url" content="https://discordwiki.us" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Discord Wiki" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@discordwiki" />
        <meta name="twitter:creator" content="@discordwiki" />
        <meta name="twitter:title" content="Discord Wiki" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
