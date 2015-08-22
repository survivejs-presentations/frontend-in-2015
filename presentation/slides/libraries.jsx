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
        Libraries
      </Heading>
      <Heading caps size={2} textColor="secondary">
        For specific problems
      </Heading>
    </Slide>,
    <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
      <Appear fid="1">
        <Heading size={2} caps textColor="primary">
          React.js
        </Heading>
      </Appear>
      <Appear fid="2">
        <Heading size={2} caps textColor="tertiary">
          Vue.js
        </Heading>
      </Appear>
      <Appear fid="3">
        <Heading size={2} caps textColor="primary">
          Ractive.js
        </Heading>
      </Appear>
      <Appear fid="4">
        <Heading size={2} caps textColor="primary">
          Cycle.js
        </Heading>
      </Appear>
      <Appear fid="5">
        <Heading size={2} caps textColor="tertiary">
          + 100 000 more
        </Heading>
      </Appear>
    </Slide>,
    <Slide transition={['zoom', 'fade']} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
      <Heading caps size={1} textColor="tertiary">
        React.js
      </Heading>
      <CodePane
        lang="html"
        source={require("raw!./examples/react.example")}
        margin="20px auto"/>
    </Slide>,
    <Slide transition={['zoom', 'fade']} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
      <Heading caps size={1} textColor="tertiary">
        Vue.js
      </Heading>
      <CodePane
        lang="html"
        source={require("raw!./examples/vue.example")}
        margin="20px auto"/>
    </Slide>,
    <Slide transition={['zoom', 'fade']} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
      <Heading caps size={1} textColor="tertiary">
        Ractive.js
      </Heading>
      <CodePane
        lang="html"
        source={require("raw!./examples/ractive.example")}
        margin="20px auto"/>
    </Slide>,
    <Slide transition={['zoom', 'fade']} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
      <Heading caps size={1} textColor="tertiary">
        Cycle.js
      </Heading>
      <CodePane
        lang="javascript"
        source={require("raw!./examples/cycle.example")}
        margin="20px auto"/>
    </Slide>,
    <Slide transition={["zoom", "fade"]} bgColor="primary">
      <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
        Comparison
      </Heading>
      <Layout>
        <Table>
          <TableRow>
            <TableHeaderItem>Library</TableHeaderItem>
            <TableHeaderItem>Description</TableHeaderItem>
          </TableRow>
          <TableRow>
            <TableItem>React.js</TableItem>
            <TableItem>Backed by Facebook, strong ecosystem</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>Vue.js</TableItem>
            <TableItem>Niche alternative</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>Ractive.js</TableItem>
            <TableItem>Reactive templates by The Guardian</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>Cycle.js</TableItem>
            <TableItem>Reactive newcomer</TableItem>
          </TableRow>
        </Table>
      </Layout>
    </Slide>
  ];
};
