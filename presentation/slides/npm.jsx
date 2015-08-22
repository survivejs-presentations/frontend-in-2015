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
        NPM
      </Heading>
      <Heading caps size={2} textColor="secondary">
        To keep things together
      </Heading>
    </Slide>,
    <Slide transition={["fade"]} bgColor="secondary" textColor="primary" bgImage={images.boxing.replace("/", "")} bgDarken={0.75}>
      <List>
        <ListItem><Appear fid="1">176k+ packages and growing fast</Appear></ListItem>
        <ListItem><Appear fid="2">Dependency management</Appear></ListItem>
        <ListItem><Appear fid="3">Package authoring</Appear></ListItem>
        <ListItem><Appear fid="4">Both front-end/back-end</Appear></ListItem>
      </List>
    </Slide>,
    <Slide transition={['zoom', 'fade']} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
      <Heading size={1} textColor="tertiary">
        package.json
      </Heading>
      <CodePane
        lang="json"
        source={require("raw!./examples/npm.example")}
        margin="20px auto"/>
    </Slide>
  ];
};
