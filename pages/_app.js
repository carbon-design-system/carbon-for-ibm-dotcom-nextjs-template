import "../styles/global.scss";

import Altlang from "../components/altlang";
import App from "next/app";
import DDO from "./data/DDO.json";
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
 * Class IbmdotcomLibrary
 */
export default class IbmdotcomLibrary extends App {
  /**
   * Loads in the initial query string parameters
   *
   * @param {object} props page props
   * @param {object} props.ctx app context
   * @returns {Promise<{pageProps}>} Returns the pageProps
   */
  static async getInitialProps({ ctx }) {
    const useLang =
      ctx.query && ctx.query.lc
        ? {
            lc: ctx.query.lc,
            cc: ctx.query.cc,
          }
        : _defaultLang;

    return { useLang, query: ctx.query };
  }
  /**
   * Renders the DotcomShell
   *
   * @returns {*} Page wrapper JSX
   */
  render() {
    const { Component, pageProps, useLang } = this.props;
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
          <Altlang />
        </Head>
        <DotcomShell
          mastheadProps={{
            navigation: "default",
          }}
          footerProps={{
            langCode: useLang,
          }}
        >
          <Component {...pageProps} />
        </DotcomShell>
        <script src="//1.www.s81c.com/common/stats/ibm-common.js"></script>
      </>
    );
  }
}
