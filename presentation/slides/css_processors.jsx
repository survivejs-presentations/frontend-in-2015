import React from "react/addons";
import {
  Appear, BlockQuote, Cite, CodePane, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text,
  Table, TableRow, TableHeaderItem, TableItem
} from "../../src/spectacle";

export default (images) => {
  return [
    <Slide transition={["slide", "spin"]} bgColor="primary">
      <Heading caps fit size={1} textColor="tertiary">
        CSS Processors
      </Heading>
      <Heading caps size={2} textColor="secondary">
        Because Vanilla Isn't Enough
      </Heading>
    </Slide>,
    <Slide transition={["zoom", "fade"]} bgColor="primary" bgImage={images.style.replace("/", "")} bgDarken={0.75}>
      <Heading caps >BEM, OOCSS, SMACSS</Heading>
      <Heading caps size={2} textColor="primary">Solving CSS within CSS</Heading>
    </Slide>,
    <Slide transition={["zoom", "fade"]} bgColor="primary" bgImage={images.style.replace("/", "")} bgDarken={0.75}>
      <Heading caps >SASS, Less, Stylus</Heading>
      <Heading caps size={2} textColor="primary">Better languages</Heading>
    </Slide>,
    <Slide transition={["zoom", "fade"]} bgColor="primary" bgImage={images.style.replace("/", "")} bgDarken={0.75}>
      <Heading caps >PostCSS, cssnext</Heading>
      <Heading caps size={2} textColor="primary">Extensions</Heading>
    </Slide>,
    <Slide transition={["zoom", "fade"]} bgColor="primary" bgImage={images.style.replace("/", "")} bgDarken={0.75}>
      <Heading caps >Inline CSS (React)</Heading>
      <Heading caps size={2} textColor="primary">Back to the future?</Heading>
    </Slide>,
    <Slide transition={["zoom", "fade"]} bgColor="primary" bgImage={images.style.replace("/", "")} bgDarken={0.75}>
      <Heading caps >CSS Modules</Heading>
      <Heading caps size={2} textColor="primary">Eliminates globals, modularity++</Heading>
    </Slide>
  ];
};
