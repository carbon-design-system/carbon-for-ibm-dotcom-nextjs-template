<h1 align="center"> IBM.com Library React with Next.js Template</h1>

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Things to Note](#things-to-note)
  - [Page Language](#page-language)
  - [Digital Data Object](#digital-data-object)
  - [Meta Tags & IBM.com Tag Management and Site Analytics](#meta-tags-and-analytics)
- [Locale / Language Page Detection](#locale--language-page-detection)

## Overview

This is a Next.js template utilizing the IBM.com React Library, deploying a vanilla instance of Next.js with the [DotcomShell](https://github.com/carbon-design-system/ibm-dotcom-library/blob/master/packages/react/src/components/DotcomShell/README.md),
along with other various patterns and components available in the IBM.com Library.

## Getting Started

Get the code by cloning this repo using git

```bash
git clone https://github.com/carbon-design-system/ibm-dotcom-library-nextjs-template.git
```

Once cloned, go to the project directory and install dependencies

```bash
$ yarn install
```

In order for certain services to work such as fetching the masthead/footer menu data in the `<DotcomShell>`, you will have to set environment variables in a `.env` file. Please see `.env.example`.

```
CORS_PROXY=<Sets the proxy for fetching the masthead/footer translation data, e.g. https://myproxy.com/>
ROOT_PATH=<Sets the root path for language alternative urls, default is '/' >
```

Then start the application:

```bash
$ yarn dev
```

To export to a static site, run the following:

```bash
$ yarn build-export
```

Then the contents of the `out` folder can be uploaded to your production environment.

## Things to Note

If building an IBM.com page, there are items that need to be included which can be viewed here: [Building for IBM.com](https://github.com/carbon-design-system/ibm-dotcom-library/blob/master/docs/building-for-ibm-dotcom.md)

### Page Language

This template handles page language functionality, where the available languages are defined in `components/data/altlang.json`. The `Altlangs` component then generates all alternate links to be injected into the `<head>` element.

### Digital Data Object

The Digital Data Object (DDO) is a flexible, customizable collection of metadata that also provides tools and services such as live chat and analytics to page authors. You can find more details on [Building for IBM.com](https://github.com/carbon-design-system/ibm-dotcom-library/blob/master/docs/building-for-ibm-dotcom.md).

The template has a placeholder DDO you can define located in `pages/data/DDO.json. Example values shown below:

```javascript
<script>
  digitalData = {
    page: {
        category: {
            primaryCategory: '' // e.g. SB03
        },
        pageInfo: {
            effectiveDate: '', // e.g. 2014-11-19
            expiryDate: '', // e.g. 2017-11-19
            language: '', // e.g. en-US
            publishDate: '', // e.g. 2014-11-19
            publisher: '', // e.g. IBM Corporation
            version: '', // e.g. dds.v1.0.0. NOTE: This is dynamically set by the IBM.com Library
            ibm: {
                contentDelivery: '', // e.g. ECM/Filegen
                contentProducer: '', // e.g. ECM/IConS Adopter 34 - GS83J2343G3H3ERG - 11/19/2014 05:14:02 PM
                country: '', // e.g. US
                industry: '', // e.g. B,U
                owner: '', // e.g. Some Person/City/IBM
                siteID: '', // e.g. MySiteID
                subject: '', // e.g. SW492
                type: '' // e.g CT305
            }
        }
    }
  };
</script>
```

### Meta Tags and Analytics

The template already renders the required meta tags and IBM.com analytics script that are required for IBM.com websites. They are located in `pages/_app.js`.These can be adjusted/removed to fit your project and needs.

Meta Tags:

```html
<meta charset="UTF-8" />

<link rel="icon" href="//www.ibm.com/favicon.ico" />

<meta name="dcterms.date" content="YYYY-MM-DD" />
<meta name="dcterms.rights" content="© Copyright IBM Corp. 2016" />
<meta name="geo.country" content="US" />
<meta name="robots" content="index,follow" />
```

IBM.com Tag Management and Site Analytics Script

```html
<!-- IBM Tag Management and Site Analytics -->
<script src="//1.www.s81c.com/common/stats/ibm-common.js"></script>
```

## Locale / Language Page Detection

The template uses `_document.js` to dynamically change the html `lang` attribute that is used for the Locale Selector services. This is currently NextJS's only documented way of augmenting the document markup. There are some caveats with this approach - one being that the `lang` does not get updated when you export your app to static HTML. We suggest moving the `lang` swapping logic out to client side if you wish to export to a static site.
