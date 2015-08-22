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
        Linting
      </Heading>
      <Heading caps size={2} textColor="secondary">
        To keep bugs at bay
      </Heading>
    </Slide>,
    <Slide transition={["zoom", "fade"]} bgColor="primary" bgImage={images.lint.replace("/", "")} bgDarken={0.75}>
      <Heading caps >ESLint</Heading>
      <Heading caps size={2} textColor="primary">Pluggable linting for JavaScript</Heading>
    </Slide>,
    <Slide transition={["zoom", "fade"]} bgColor="primary" bgImage={images.lint.replace("/", "")} bgDarken={0.75}>
      <Heading caps >csslint</Heading>
      <Heading caps size={2} textColor="primary">Similar for CSS</Heading>
    </Slide>
  ];
};
