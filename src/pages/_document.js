import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import StructuredDataContainer from "../helpers/StructuredDataContainer";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    const page = renderPage(
      (App) => (props) => sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <Html className='no-fouc' lang='pl'>
        <Head>
          <meta charset='utf-8' />
          <title>Naprawa Pralek i AGD Lublin Szalast Zenon</title>
          <link rel='icon' href='/favicon.ico' />
          <link rel='canonical' href='https://www.naprawapralek-lublin.pl' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='theme-color' content='#000000' />
          <meta
            name='description'
            content='Naprawa pralek Lublin wszystkie typy. Serwis urządzeń AGD Lublin. Darmowe porady telefoniczne. Rachunki-Gwarancja. Tel: 603 663 053'
            key='desc'
          />
          <meta
            name='keywords'
            content='naprawa pralek lublin, serwis pralek lublin, zepsuta pralka lublin, agd naprawa pralek lublin, agd serwis lublin, naprawa agd lublin, agd naprawa lublin, usługi naprawa pralek lublin, naprawa pralek whirpool lublin, naprawa pralek ariston lublin, naprawa pralek zanussi lublin, naprawa pralek brandt lublin, naprawa pralek candy lublin, naprawa pralek polar lublin, naprawa pralek amica lublin, naprawa pralek ardo lublin, naprawa pralek aeg lublin, naprawa pralek simens lublin, naprawa pralek indesit lublin, naprawa pralek bosch lublin'
          />
          <meta name='Robots' content='all, index, follow' />
          <meta
            name='google-site-verification'
            content='lrFYB09_tTvmpmm-ir0kTDCv4kgRjCsat50-xdCPngA'
          />
          <meta name='Classification' content='global,all' />
          <meta name='revisit-after' content='1 day' />
          <style>
            {`.no-fouc {
            visibility: hidden;
            opacity: 0;
          }
          .fouc {
            visibility: visible;
            opacity: 1;
          }`}
          </style>
        </Head>
        <body>
          <div id='fb-root'></div>
          <div id='fb-customer-chat' class='fb-customerchat'></div>
          <script
            dangerouslySetInnerHTML={{
              __html: `           
      var chatbox = document.getElementById("fb-customer-chat");
      chatbox.setAttribute("page_id", "195644990828561");
      chatbox.setAttribute("attribution", "biz_inbox");
            
      window.fbAsyncInit = function () {
        FB.init({
          xfbml: true,
          version: "v13.0",
        });
      };

      (function (d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/pl_PL/sdk/xfbml.customerchat.js";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");
      
      
      `,
            }}
          />
          <StructuredDataContainer
            innerHTML={`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Naprawa pralek i AGD - Zenon Szalast",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "20857 Lublin Voivodeship Lublin Harnasie 17",
                "addressLocality": "Lublin, Poland",
                "addressRegion": "Lublin Voivodeship",
                "postalCode": "20857",
                "addressCountry": "PL"
              },
              "aggregateRating": {
              "@type": "AggregateRating",
              "bestRating": "5",
              "ratingValue": "4.8",
              "reviewCount": "61"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 51.27584,
                "longitude": 22.54572
              },
              "url": "https://www.naprawapralek-lublin.pl",
              "telephone": "+48603663053",
              "priceRange": "$",
            
                        "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "08:00",
                  "closes": "21:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Saturday"
                  ],
                  "opens": "09:00",
                  "closes": "20:00"
                }
              ]
  }
          `}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
