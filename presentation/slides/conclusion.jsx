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
        Conclusion
      </Heading>
      <Heading caps size={2} textColor="secondary">
        To recap
      </Heading>
    </Slide>,
    <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
      <List>
        <ListItem><Appear fid="1">TODO</Appear></ListItem>
      </List>
    </Slide>,
    <Slide transition={["spin", "slide"]} bgColor="tertiary">
      <Heading size={1} caps fit textColor="primary">
        Made with love in Finland by
      </Heading>
      <Link href="https://twitter.com/bebraw">
        <Heading caps fit size={2} textColor="secondary">
          Juho Vepsäläinen
        </Heading>
      </Link>
    </Slide>,
    <Slide transition={["slide", "spin"]} bgColor="primary">
      <Appear fid="1">
        <Heading caps fit size={1} textColor="tertiary">
          Questions?
        </Heading>
      </Appear>
      <Appear fid="2">
        <Heading caps size={2} textColor="secondary">
          Nope
        </Heading>
      </Appear>
    </Slide>
  ];
};
