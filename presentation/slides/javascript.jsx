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
        ES2015, ES2016, ...
      </Heading>
      <Heading caps size={2} textColor="secondary">
        Version per year
      </Heading>
    </Slide>,
    <Slide transition={["zoom", "fade"]} bgColor="secondary">
      <Heading caps >Babel</Heading>
      <Heading caps size={2} textColor="primary">The Future Now</Heading>
    </Slide>,
    <Slide transition={["fade"]} bgColor="secondary" textColor="primary" bgImage={images.babel.replace("/", "")} bgDarken={0.75}>
      <List>
        <ListItem><Appear fid="1">JavaScript compiler</Appear></ListItem>
        <ListItem><Appear fid="2">JSX support out of box</Appear></ListItem>
        <ListItem><Appear fid="2">Easy to setup</Appear></ListItem>
        <ListItem><Appear fid="3">See also Google Traceur</Appear></ListItem>
      </List>
    </Slide>
  ];
};
