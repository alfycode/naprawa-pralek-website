import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

import Script from "next/script";
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
      <Html>
        <Head>
          <meta charset='utf-8' />
          <link rel='icon' href='/favicon.ico' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='theme-color' content='#000000' />
          <meta
            name='description'
            content='Naprawa pralek wszystkie typy Lublin. Darmowe porady telefoniczne. Rachunki-Gwarancja. Tel: 603 663 053'
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
          <title>Naprawa Pralek i AGD Zenon Szalast</title>
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
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
