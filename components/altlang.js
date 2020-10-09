import altlangs from "./data/altlang.json";
import React from "react";

/**
 * Sets the root path of the alternative urls
 * Learn more about configuring alternative languages at:
 * https://github.com/carbon-design-system/carbon-for-ibm-dotcom/blob/master/docs/building-for-ibm-dotcom.md
 *
 * @type {string|string}
 * @private
 */
const _rootPath = process.env.ALTLANG_ROOT_PATH || "/";

/**
 * Renders the list of altlang items
 *
 * @returns {Array} altlang elements
 * @private
 */
const _renderAltLangs = () => {
  let langs = [];
  altlangs.forEach((alt, i) => {
    langs.push(
      <link
        key={i}
        rel="alternate"
        hrefLang={`${alt.lc}-${alt.cc}`}
        href={`${_rootPath}?cc=${alt.cc}&lc=${alt.lc}`}
      />
    );
  });
  return langs;
};

/**
 * Altlang elements to include into the head tag
 *
 * @returns {*} altlang markup
 */
const AltLangs = () => {
  return (
    <>
      <link rel="alternate" hrefLang="x-default" href={_rootPath} />
      {_renderAltLangs()}
    </>
  );
};

export default AltLangs;
