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
        Web Components
      </Heading>
      <Heading caps size={2} textColor="secondary">
        The Future?
      </Heading>
    </Slide>,
    <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
      <List>
        <ListItem><Appear fid="1">TODO</Appear></ListItem>
      </List>
    </Slide>
  ];
};
