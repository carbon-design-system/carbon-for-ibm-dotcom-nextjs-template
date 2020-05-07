import "../styles/global.scss";

import Altlang from "../components/altlang";
import App from "next/app";
import { DotcomShell } from "@carbon/ibmdotcom-react";
import Head from "next/head";
import packageJson from "../package.json";
import React from "react";

/**
 * Language codes for the DotcomShell for server side render
 *
 * @type {{cc: string, lc: string}}
 * @private
 */
const _defaultLang = {
  cc: "us",
  lc: "en",
};

/**
 * Gets the lang combination based on passed in query param object
 *
 * @param {object} router Router object
 * @returns {object} lang code object
 * @private
 */
function _getLang(router) {
  return router && router.query && router.query.lc
    ? {
        lc: router.query.lc,
        cc: router.query.cc,
      }
    : _defaultLang;
}

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
    const { Component, pageProps, router } = this.props;
    const useLang = _getLang(router);
    const reactVersion = packageJson.dependencies["@carbon/ibmdotcom-react"];
    const stylesVersion = packageJson.dependencies["@carbon/ibmdotcom-styles"];
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

          <script
            dangerouslySetInnerHTML={{
              __html: `
            var params = new URLSearchParams(window.location.search);
            var lang = params.has('lc') ? params.get('lc') + '-' + params.get('cc') : 'en-US';
            document.getElementsByTagName("html")[0].setAttribute("lang", lang);
           `,
            }}
          />
          <Altlang />
        </Head>
        <DotcomShell navigation="default" langCode={useLang}>
          <Component {...pageProps} />
        </DotcomShell>
        <script src="//1.www.s81c.com/common/stats/ibm-common.js"></script>
      </>
    );
  }
}
