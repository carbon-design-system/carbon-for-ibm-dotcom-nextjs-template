import "../styles/global.scss";

import Altlang from "../components/altlang";
import App from "next/app";
import DDO from "./data/DDO.json";
import { DotcomShell } from "@carbon/ibmdotcom-react";
import Head from "next/head";
import packageJson from "../package.json";
import React from "react";

/**
 * Class IbmdotcomLibrary
 */
export default class IbmdotcomLibrary extends App {
  /**
   * Renders the DotcomShell
   *
   * @returns {*} Page wrapper JSX
   */
  render() {
    const { Component, pageProps } = this.props;
    const reactVersion = packageJson.dependencies["@carbon/ibmdotcom-react"];
    const stylesVersion = packageJson.dependencies["@carbon/ibmdotcom-styles"];
    const digitalData = `digitalData=${JSON.stringify(DDO)};`;

    return (
      <>
        <Head>
          <link rel="icon" href="//www.ibm.com/favicon.ico" />

          <meta name="ibmdotcom.version.react" content={reactVersion} />
          <meta name="ibmdotcom.version.styles" content={stylesVersion} />
          <meta
            name="ibmdotcom.build.time"
            content={new Date().toISOString()}
          />
          <meta name="dcterms.date" content="2015-10-01" />
          <meta name="dcterms.rights" content="© Copyright IBM Corp. 2020" />
          <meta name="geo.country" content="US" />
          <meta name="robots" content="index,follow" />

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

          {process.env.ENABLE_RTL === "true" && (
            <script
              dangerouslySetInnerHTML={{
                __html: `
            document.documentElement.dir = 'rtl';
            document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
            `,
              }}
            />
          )}

          <Altlang />
          <script src="//1.www.s81c.com/common/stats/ibm-common.js" defer />
        </Head>
        <DotcomShell
          mastheadProps={{
            navigation: "default",
          }}
        >
          <Component {...pageProps} />
        </DotcomShell>
      </>
    );
  }
}
