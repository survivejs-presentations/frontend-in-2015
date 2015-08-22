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
        Productivity
      </Heading>
      <Heading caps size={2} textColor="secondary">
        For fun and profit
      </Heading>
    </Slide>,
    <Slide transition={["zoom", "fade"]} bgColor="primary">
      <Layout>
        <Fill>
          <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
            Classic Era
          </Heading>
          <List>
            <ListItem><Appear fid="1">Ctrl-R</Appear></ListItem>
          </List>
        </Fill>
        <Fill>
          <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
            Automatic Era
          </Heading>
          <List>
            <ListItem><Appear fid="2">LiveReload</Appear></ListItem>
            <ListItem><Appear fid="3">Browsersync</Appear></ListItem>
          </List>
        </Fill>
        <Fill>
          <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
            Live Editing
          </Heading>
          <List>
            <ListItem><Appear fid="4">React Hot Loader</Appear></ListItem>
            <ListItem><Appear fid="5">LiveReactload</Appear></ListItem>
          </List>
        </Fill>
      </Layout>
    </Slide>
  ];
};
