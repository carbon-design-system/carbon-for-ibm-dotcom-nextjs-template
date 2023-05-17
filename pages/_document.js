import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import DDO from "./data/DDO.json";

/**
 * Class CarbonForIBMDotcomDocument
 */
class CarbonForIBMDotcomDocument extends Document {
  /**
   * Declares the digitalData object
   *
   * @returns {*} Page wrapper JSX
   */
  render() {
    const digitalData = `digitalData=${JSON.stringify(DDO)};`;
    return (
      <Html>
        <Head>
          <script dangerouslySetInnerHTML={{ __html: digitalData }} />

          <script
            dangerouslySetInnerHTML={{
              __html: `
              var params = new URLSearchParams(window.location.search);

              if(params.has('lc') && params.has('cc')) {
                var lang = params.get('lc') + '-' + params.get('cc').toUpperCase();
                document.getElementsByTagName("html")[0].setAttribute("lang", lang);
                digitalData.page.pageInfo.language = lang;
                digitalData.page.pageInfo.ibm.country = params.get('cc').toUpperCase();
              }
							`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CarbonForIBMDotcomDocument;
