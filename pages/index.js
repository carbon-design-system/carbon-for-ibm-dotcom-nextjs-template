/* eslint-disable jsx-a11y/anchor-has-content */
import { Desktop, Pattern, Touch } from "@carbon/pictograms-react";
import {
  TableOfContents,
  LeadSpace,
  Layout,
  ContentBlockMedia,
  LinkList,
  ContentBlockMixed,
  ContentBlockSegmented,
  ContentBlockSimple,
  CardSectionImages,
  CardSectionSimple,
} from "@carbon/ibmdotcom-react";
import { ArrowRight20 } from "@carbon/icons-react";
import React from "react";

/**
 * Homepage
 *
 * @returns {*} JSX for Homepage
 */
const Home = () => (
  <>
    <LeadSpace
      type="centered"
      theme="g100"
      title="Lead space title"
      copy="Use this area for a short line of copy to support the title"
      gradient={true}
      // buttons={buttons}
      image={{
        sources: [
          {
            src: "https://dummyimage.com/320x370/ee5396/161616",
            breakpoint: "sm",
          },
          {
            src: "https://dummyimage.com/672x400/ee5396/161616",
            breakpoint: "md",
          },
        ],
        defaultSrc: "https://dummyimage.com/1056x480/ee5396/161616",
        alt: "Image alt text",
      }}
    />
    <TableOfContents menuLabel="Jump to" theme="white" stickyOffset={48}>
      <a name="content-block-mixed" data-title="Content Block - Mixed Groups" />
      <ContentBlockMixed
        heading="Content Block - Mixed Groups"
        copy="Lorem ipsum *dolor* sit amet, consectetur adipiscing elit. Aenean et ultricies est.
          Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales
          nulla quis, *consequat* libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero."
        cta={{
          cta: {
            href: "https://www.example.com",
          },
          style: "card",
          type: "local",
          copy: "Lorem ipsum dolor sit ametttt",
        }}
        items={[
          {
            type: "ContentGroupCards",
            heading: "Content Group - with Cards",
            items: [
              {
                heading:
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt",
                copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                cta: {
                  href: "https://www.example.com",
                },
              },
              {
                heading:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                cta: {
                  href: "https://www.example.com",
                },
              },
              {
                heading:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                copy: "Lorem ipsum dolor sit amet",
                cta: {
                  href: "https://www.example.com",
                },
              },
              {
                heading:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
                cta: {
                  href: "https://www.example.com",
                },
              },
            ],
          },
          {
            type: "ContentGroupPictograms",
            heading: "Content Group - with Pictograms",
            items: [
              {
                heading: "Aliquam condimentum interdum",
                copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.",
                cta: {
                  href: "https://www.example.com",
                  type: "local",
                  copy: "Lorem ipsum dolor",
                },
                pictogram: {
                  src: Desktop,
                  "aria-label": "Desktop",
                },
              },
              {
                heading: "Aliquam condimentum interdum",
                copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.",
                cta: {
                  href: "https://www.example.com",
                  type: "local",
                  copy: "Lorem ipsum dolor",
                },
                pictogram: {
                  src: Pattern,
                  "aria-label": "Pattern",
                },
              },
              {
                heading: "Aliquam condimentum interdum",
                copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.",
                cta: {
                  href: "https://www.example.com",
                  type: "local",
                  copy: "Lorem ipsum dolor",
                },
                pictogram: {
                  src: Touch,
                  "aria-label": "Touch",
                },
              },
            ],
          },
          {
            type: "ContentGroupSimple",
            mediaType: "image",
            mediaData: {
              heading: "Lorem ipsum dolor sit amet.",
              image: {
                sources: [
                  {
                    src: "https://dummyimage.com/320x180/ee5396/161616&text=16:9",
                    breakpoint: 320,
                  },
                  {
                    src: "https://dummyimage.com/400x225/ee5396/161616&text=16:9",
                    breakpoint: 400,
                  },
                  {
                    src: "https://dummyimage.com/672x378/ee5396/161616&text=16:9",
                    breakpoint: 672,
                  },
                ],
                alt: "Image alt text",
                defaultSrc:
                  "https://dummyimage.com/672x378/ee5396/161616&text=16:9",
              },
            },
            heading: "Content Group - Simple",
            items: [
              {
                heading: "Lorem ipsum dolor sit amet.",
                copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.",
              },
              {
                heading: "Lorem ipsum dolor sit amet.",
                copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.",
              },
            ],
          },
        ]}
        aside={{
          items: (
            <LinkList
              heading="Tutorials"
              items={[
                {
                  type: "local",
                  copy: "Containerization A Complete Guide",
                  cta: {
                    href: "https://ibm.com",
                  },
                },
                {
                  type: "external",
                  copy: "Why should you use microservices and containers",
                  cta: {
                    href: "https://ibm.com",
                  },
                },
              ]}
            />
          ),
          border: false,
        }}
      />
      <Layout nested={true} type="2-1" border={true}>
        <div>
          <a
            name="content-block-segmented"
            data-title="Content Block - Segmented"
          />
          <ContentBlockSegmented
            copy="Lorem ipsum *dolor* sit amet, consectetur adipiscing elit. Aenean et ultricies est.
          Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales
          nulla quis, *consequat* libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit."
            cta={{
              cta: {
                href: "https://www.example.com",
              },
              style: "card",
              type: "local",
              copy: "Lorem ipsum dolor",
            }}
            heading="Content Block - Segmented"
            image={{
              heading: "Mauris iaculis eget dolor nec hendrerit.",
              image: {
                sources: [
                  {
                    src: "https://dummyimage.com/320x180/ee5396/161616&text=16:9",
                    breakpoint: 320,
                  },
                  {
                    src: "https://dummyimage.com/400x225/ee5396/161616&text=16:9",
                    breakpoint: 400,
                  },
                  {
                    src: "https://dummyimage.com/672x378/ee5396/161616&text=16:9",
                    breakpoint: 672,
                  },
                ],
                alt: "Image alt text",
                defaultSrc:
                  "https://dummyimage.com/672x378/ee5396/161616&text=16:9",
              },
            }}
            items={[
              {
                heading: "Lorem ipsum dolor sit amet.",
                copy: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.`,
              },
              {
                heading: "Lorem ipsum dolor sit amet.",
                image: {
                  heading: "Mauris iaculis eget dolor nec hendrerit.",
                  image: {
                    sources: [
                      {
                        src: "https://dummyimage.com/320x180/ee5396/161616&text=16:9",
                        breakpoint: 320,
                      },
                      {
                        src: "https://dummyimage.com/400x225/ee5396/161616&text=16:9",
                        breakpoint: 400,
                      },
                      {
                        src: "https://dummyimage.com/672x378/ee5396/161616&text=16:9",
                        breakpoint: 672,
                      },
                    ],
                    alt: "Image alt text",
                    defaultSrc:
                      "https://dummyimage.com/672x378/ee5396/161616&text=16:9",
                  },
                },
                copy: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.`,
              },
            ]}
          />
        </div>
        <div></div>
      </Layout>
      <Layout nested={true} type="2-1" border={true}>
        <div>
          <a name="content-block-simple" data-title="Content Block - Simple" />
          <ContentBlockSimple
            copy="Lorem ipsum *dolor* sit amet, consectetur adipiscing elit. Aenean et ultricies est.
          Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales
          nulla quis, *consequat* libero. Here are
          some common categories:

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero."
            heading="Content Block - Simple"
            image={{
              heading:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              image: {
                sources: [
                  {
                    src: "https://dummyimage.com/320x180/ee5396/161616&text=16:9",
                    breakpoint: 320,
                  },
                  {
                    src: "https://dummyimage.com/400x225/ee5396/161616&text=16:9",
                    breakpoint: 400,
                  },
                  {
                    src: "https://dummyimage.com/672x378/ee5396/161616&text=16:9",
                    breakpoint: 672,
                  },
                ],
                alt: "Image alt text",
                defaultSrc:
                  "https://dummyimage.com/672x378/ee5396/161616&text=16:9",
              },
            }}
            cta={{
              cta: {
                href: "https://www.ibm.com",
              },
              style: "card",
              type: "external",
              heading: "Lorem ipsum dolor sit amet",
              copy: "Lorem ipsum dolor sit ametttt",
            }}
          />
        </div>
        <div></div>
      </Layout>
      <Layout nested={true} type="2-1" border={true}>
        <div>
          <a
            name="content-block-media"
            data-title="Content Block - with Media"
          />
          <ContentBlockMedia
            copy="Lorem ipsum *dolor* sit amet, consectetur adipiscing elit. Aenean
            et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at
            elit sollicitudin, sodales nulla quis, *consequat* libero. Phasellus at
            elit sollicitudin, sodales nulla quis, consequat libero."
            heading="Content Block - with Media"
            items={[
              {
                mediaType: "image",
                mediaData: {
                  heading: "Lorem ipsum dolor sit amet.",
                  image: {
                    sources: [
                      {
                        src: "https://dummyimage.com/320x180/ee5396/161616&text=16:9",
                        breakpoint: 320,
                      },
                      {
                        src: "https://dummyimage.com/400x225/ee5396/161616&text=16:9",
                        breakpoint: 400,
                      },
                      {
                        src: "https://dummyimage.com/672x378/ee5396/161616&text=16:9",
                        breakpoint: 672,
                      },
                    ],
                    alt: "Image alt text",
                    defaultSrc:
                      "https://dummyimage.com/672x378/ee5396/161616&text=16:9",
                  },
                },
                heading: "Lorem ipsum dolor sit amet",
                items: [
                  {
                    heading: "Lorem ipsum dolor sit amet.",
                    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.",
                  },
                  {
                    heading: "Lorem ipsum dolor sit amet.",
                    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.",
                  },
                ],
                cta: {
                  cta: {
                    href: "https://www.example.com",
                  },
                  style: "card",
                  type: "local",
                  copy: "Lorem ipsum dolor sit ametttt",
                },
              },
              {
                mediaType: "image",
                mediaData: {
                  heading: "Lorem ipsum dolor sit amet.",
                  image: {
                    sources: [
                      {
                        src: "https://dummyimage.com/320x180/ee5396/161616&text=16:9",
                        breakpoint: 320,
                      },
                      {
                        src: "https://dummyimage.com/400x225/ee5396/161616&text=16:9",
                        breakpoint: 400,
                      },
                      {
                        src: "https://dummyimage.com/672x378/ee5396/161616&text=16:9",
                        breakpoint: 672,
                      },
                    ],
                    alt: "Image alt text",
                    defaultSrc:
                      "https://dummyimage.com/672x378/ee5396/161616&text=16:9",
                  },
                },
                heading: "Lorem ipsum dolor sit amet",
                items: [
                  {
                    heading: "Lorem ipsum dolor sit amet.",
                    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.",
                  },
                  {
                    heading: "Lorem ipsum dolor sit amet.",
                    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.",
                  },
                ],
                cta: {
                  cta: {
                    href: "https://www.example.com",
                  },
                  style: "card",
                  type: "local",
                  copy: "Lorem ipsum dolor sit ametttt",
                },
              },
            ]}
            cta={{
              type: "feature",
              heading: "Feature Card",
              card: {
                cta: {
                  href: "https://www.example.com",
                  icon: {
                    src: ArrowRight20,
                  },
                },
                heading: "Consectetur adipisicing elit",
                image: {
                  defaultSrc:
                    "https://dummyimage.com/672x672/ee5396/161616&text=1x1",
                  alt: "Image alt text",
                },
              },
            }}
          />
        </div>
        <div></div>
      </Layout>
    </TableOfContents>

    <CardSectionImages
      heading="Card Section - with Images"
      theme="g10"
      cards={[
        {
          image: {
            defaultSrc: "https://dummyimage.com/1056x480/ee5396/161616",
            alt: "Image alt text",
          },
          eyebrow: "Topic",
          heading: "Natural language processing.",
          cta: {
            href: "https://www.example.com",
          },
        },
        {
          image: {
            defaultSrc: "https://dummyimage.com/1056x480/ee5396/161616",
            alt: "Image alt text",
          },
          eyebrow: "Blog",
          heading: "Natural language processing.",
          cta: {
            href: "https://www.example.com",
          },
        },
        {
          image: {
            defaultSrc: "https://dummyimage.com/1056x480/ee5396/161616",
            alt: "Image alt text",
          },
          eyebrow: "Topic",
          heading: "Natural language processing.",
          cta: {
            href: "https://www.example.com",
          },
        },
        {
          image: {
            defaultSrc: "https://dummyimage.com/1056x480/ee5396/161616",
            alt: "Image alt text",
          },
          eyebrow: "Blog",
          heading:
            "Serving society ethically in the age of Artificial Intelligence.",
          cta: {
            href: "https://www.example.com",
          },
        },
        {
          image: {
            defaultSrc: "https://dummyimage.com/1056x480/ee5396/161616",
            alt: "Image alt text",
          },
          eyebrow: "Topic",
          heading:
            "Serving society ethically in the age of Artificial Intelligence.",
          cta: {
            href: "https://www.example.com",
          },
        },
      ]}
    />

    <CardSectionSimple
      heading="Card Section - Simple"
      theme="g10"
      cards={[
        {
          heading: "Nunc convallis lobortis",
          copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.",
          cta: {
            href: "https://www.example.com",
          },
        },
        {
          heading: "Fusce gravida eu arcu",
          copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.",
          cta: {
            href: "https://www.example.com",
          },
        },
        {
          heading: "Interdum et malesuada",
          copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.",
          cta: {
            href: "https://www.example.com",
          },
        },
        {
          heading: "Nunc convallis loborti",
          copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.",
          cta: {
            href: "https://www.example.com",
          },
        },
        {
          heading: "Nunc convallis lbortis",
          copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.",
          cta: {
            href: "https://www.example.com",
          },
        },
      ]}
      cta={{
        heading: "Top level card link",
        cta: {
          href: "https://www.example.com",
        },
      }}
    />
  </>
);

export default Home;
