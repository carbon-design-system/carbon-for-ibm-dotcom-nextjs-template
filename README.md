<h1 align="center"> Carbon for IBM.com React with Next.js Template</h1>

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Things to Note](#things-to-note)
  - [Page Language](#page-language)
  - [Digital Data Object](#digital-data-object)
  - [Meta Tags & IBM.com Tag Management and Site Analytics](#meta-tags-and-analytics)

## Overview

This is a Next.js template utilizing Carbon for IBM.com React, deploying a vanilla instance of Next.js with the
[DotcomShell](https://github.com/carbon-design-system/carbon-for-ibm-dotcom/blob/main/packages/react/src/components/DotcomShell/README.stories.mdx),
along with other various patterns and components available in Carbon for IBM.com.

## Getting Started

Get the code by cloning this repo using git

```bash
git clone https://github.com/carbon-design-system/carbon-for-ibm-dotcom-nextjs-template.git
```

Once cloned, go to the project directory to install dependencies and build the project

```bash
$ yarn && yarn build
```

In order to enable features like Right-to-Left (RTL), you will
have to set environment variables in a `.env` file. Please see `.env.example`.

```
BASE_PATH=<Sets the base directory for urls and assets, default is '' >
ALTLANG_ROOT_PATH=<Sets the root path for language alternative urls, default is '/' >
ENABLE_RTL=<Boolean to enable RTL for the page, eg. false >
SASS_PATH=node_modules:src
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

## SASS compilation and `carbon-components`

There may be times pathing errors are encountered when importing certain
stylesheets (like `carbon-components`). We're working hard to fix these, but in the meantime you can add
the following to your `.env` file to resolve:

```
SASS_PATH=node_modules:src
```

> **Note:** For Windows, the syntax is slightly different
>
> ```
> SASS_PATH=./node_modules;./src
> ```

## Right-to-Left (RTL)

Right-to-left rendering is supported, to enable set the `ENABLE_RTL` environment variable to `true`.

## Things to Note

If building an IBM.com page, there are items that need to be included which can be viewed here:
[Building for IBM.com](https://github.com/carbon-design-system/carbon-for-ibm-dotcom/blob/main/docs/building-for-ibm-dotcom.md)

### Page Language

This template handles page language functionality, where the available languages are defined in
`components/data/altlang.json`. The `Altlangs` component then generates all alternate links to be injected into the
`<head>` element.

### Digital Data Object

The Digital Data Object (DDO) is a flexible, customizable collection of metadata that also provides tools and services
such as live chat and analytics to page authors. You can find more details on
[Building for IBM.com](https://github.com/carbon-design-system/carbon-for-ibm-dotcom/blob/main/docs/building-for-ibm-dotcom.md).

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
            version: 'Carbon for IBM.com',
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

The template already renders the required meta tags and IBM.com analytics script that are required for IBM.com websites.
They are located in `pages/_app.js`.These can be adjusted/removed to fit your project and needs.

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
<script src="//1.www.s81c.com/common/stats/ibm-common.js" defer></script>
```

## Upgrading from the Template

To pull latest changes from the Carbon for IBM.com NextJS template, this repo can be added as a remote to your
application repository:

```bash
git remote add template https://github.com/carbon-design-system/carbon-for-ibm-dotcom-nextjs-template.git
```

Then run `git fetch` to update the changes:

```bash
git fetch --all
```

And finally merge changes in:

```bash
git merge template/main
```
