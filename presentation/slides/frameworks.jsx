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
        Frameworks
      </Heading>
      <Heading caps size={2} textColor="secondary">
        Swiss knives
      </Heading>
    </Slide>,
    <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
      <Appear fid="1">
        <Heading size={2} caps textColor="primary">
          AngularJS
        </Heading>
      </Appear>
      <Appear fid="2">
        <Heading size={2} caps textColor="tertiary">
          Ember.js
        </Heading>
      </Appear>
      <Appear fid="3">
        <Heading size={2} caps textColor="primary">
          Backbone.js
        </Heading>
      </Appear>
      <Appear fid="4">
        <Heading size={2} caps textColor="tertiary">
          Knockout.js
        </Heading>
      </Appear>
      <Appear fid="5">
        <Heading size={2} caps textColor="primary">
          Meteor
        </Heading>
      </Appear>
    </Slide>,
    <Slide transition={['zoom', 'fade']} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
      <Heading caps size={1} textColor="tertiary">
        AngularJS
      </Heading>
      <CodePane
        lang="html"
        source={require("raw!./examples/angular.example")}
        margin="20px auto"/>
    </Slide>,
    <Slide transition={['zoom', 'fade']} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
      <Heading caps size={1} textColor="tertiary">
        Ember.js
      </Heading>
      <CodePane
        lang="handlebars"
        source={require("raw!./examples/ember.example")}
        margin="20px auto"/>
    </Slide>,
    <Slide transition={['zoom', 'fade']} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
      <Heading caps size={1} textColor="tertiary">
        Backbone.js
      </Heading>
      <CodePane
        lang="html"
        source={require("raw!./examples/backbone.example")}
        margin="20px auto"/>
    </Slide>,
    <Slide transition={['zoom', 'fade']} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
      <Heading caps size={1} textColor="tertiary">
        Knockout.js
      </Heading>
      <CodePane
        lang="html"
        source={require("raw!./examples/knockout.example")}
        margin="20px auto"/>
    </Slide>,
    <Slide transition={['zoom', 'fade']} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
      <Heading caps size={1} textColor="tertiary">
        Meteor
      </Heading>
      <CodePane
        lang="html"
        source={require("raw!./examples/meteor.example")}
        margin="20px auto"/>
    </Slide>,
    <Slide transition={["zoom", "fade"]} bgColor="primary">
      <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
        Comparison
      </Heading>
      <Layout>
        <Table>
          <TableRow>
            <TableHeaderItem>Framework</TableHeaderItem>
            <TableHeaderItem>Description</TableHeaderItem>
          </TableRow>
          <TableRow>
            <TableItem>AngularJS</TableItem>
            <TableItem>Google backed, full featured, v2 in sight</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>Ember.js</TableItem>
            <TableItem>Niche, popular with rubists</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>Backbone.js</TableItem>
            <TableItem>Used to be popular, still in use</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>Knockout.js</TableItem>
            <TableItem>MVVM, niche</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>Meteor</TableItem>
            <TableItem>Both front-end and back-end</TableItem>
          </TableRow>
        </Table>
      </Layout>
    </Slide>
  ];
};
