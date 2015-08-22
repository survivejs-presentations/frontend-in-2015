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
        Build Tools
      </Heading>
      <Heading caps size={2} textColor="secondary">
        Hard to live without
      </Heading>
    </Slide>,
    <Slide transition={["zoom", "fade"]} bgColor="primary">
      <Layout>
        <Fill>
          <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
            1st Gen.
          </Heading>
          <List>
            <ListItem><Appear fid="1">Make</Appear></ListItem>
          </List>
        </Fill>
        <Fill>
          <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
            2nd Gen.
          </Heading>
          <List>
            <ListItem><Appear fid="2">Grunt</Appear></ListItem>
            <ListItem><Appear fid="3">Gulp</Appear></ListItem>
            <ListItem><Appear fid="4">Broccoli</Appear></ListItem>
          </List>
        </Fill>
        <Fill>
          <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
            3rd Gen.
          </Heading>
          <List>
            <ListItem><Appear fid="5">Browserify</Appear></ListItem>
            <ListItem><Appear fid="6">Webpack</Appear></ListItem>
            <ListItem><Appear fid="7">JSPM</Appear></ListItem>
          </List>
        </Fill>
      </Layout>
    </Slide>
  ];
};
