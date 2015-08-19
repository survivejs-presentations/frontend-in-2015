import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
  city: require("./city.jpg"),
};

preloader([images.city]);

export default class extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={800}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps textColor="black">
            Frontend
          </Heading>
          <Heading size={1} fit caps margin="-20px 0px">
            in 2015
          </Heading>
          <Heading size={2} fit caps textColor="black">
            Clear the decks
          </Heading>
{/*          <Link href="https://github.com/survivejs/frontend-in-2015">
            <Text bold caps textColor="tertiary">View on Github</Text>
          </Link>
*/}
        </Slide>
        <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
          <Appear fid="1">
            <Heading size={1} caps fit textColor="primary">
              User Experience
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={1} caps fit textColor="tertiary">
              Client Experience
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={1} caps fit textColor="primary">
              Developer Experience
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
          <Appear fid="1">
            <Heading size={2} caps fit textColor="primary">
              Inline JavaScript
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={2} caps fit textColor="tertiary">
              AJAX (async)
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={2} caps fit textColor="primary">
              Single Page Applications
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={2} caps fit textColor="tertiary">
              Universal JavaScript
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="black">
          <BlockQuote>
            <Quote>Design is the beauty of turning constraints into advantages</Quote>
            <Cite>Aza Raskin</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading caps fit>Choose Your Side</Heading>
          <Layout>
            <Fill>
              <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                Frameworks
              </Heading>
            </Fill>
            <Fill>
              <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                Libraries
              </Heading>
            </Fill>
          </Layout>
        </Slide>

        {/* frameworks */}
        <Slide transition={["slide", "spin"]} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
            Frameworks
          </Heading>
          <Heading caps fit size={1} textColor="secondary">
            Golden cages
          </Heading>
        </Slide>
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
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <CodePane
            lang="javascript"
            source={require("raw!./examples/angular.example")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <CodePane
            lang="javascript"
            source={require("raw!./examples/ember.example")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <CodePane
            lang="javascript"
            source={require("raw!./examples/backbone.example")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <CodePane
            lang="javascript"
            source={require("raw!./examples/knockout.example")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <CodePane
            lang="javascript"
            source={require("raw!./examples/meteor.example")}
            margin="20px auto"/>
        </Slide>

        {/* libraries */}
        <Slide transition={["slide", "spin"]} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
            Libraries
          </Heading>
          <Heading caps fit size={1} textColor="secondary">
            Anti-cages
          </Heading>
        </Slide>
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
              Riot.js
            </Heading>
          </Appear>
          <Appear fid="4">
            <Heading size={2} caps textColor="tertiary">
              + 100 000 more
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <CodePane
            lang="javascript"
            source={require("raw!./examples/react.example")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <CodePane
            lang="javascript"
            source={require("raw!./examples/vue.example")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <CodePane
            lang="javascript"
            source={require("raw!./examples/riot.example")}
            margin="20px auto"/>
        </Slide>

        {/* tools */}
        <Slide transition={["slide", "spin"]} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
            Tools
          </Heading>
          <Heading caps size={2} textColor="secondary">
            Hard to live without
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
          <Appear fid="1">
            <Heading size={2} caps textColor="primary">
              Make
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={2} caps textColor="tertiary">
              Grunt
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={2} caps textColor="primary">
              Gulp
            </Heading>
          </Appear>
          <Appear fid="4">
            <Heading size={2} caps textColor="tertiary">
              Browserify
            </Heading>
          </Appear>
          <Appear fid="5">
            <Heading size={2} caps textColor="primary">
              Webpack
            </Heading>
          </Appear>
          <Appear fid="6">
            <Heading size={2} caps textColor="tertiary">
              JSPM
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["slide", "spin"]} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
            Make
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <List>
            <ListItem><Appear fid="1">TODO</Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={["slide", "spin"]} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
            Grunt
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <List>
            <ListItem><Appear fid="1">TODO</Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={["slide", "spin"]} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
            Gulp
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <List>
            <ListItem><Appear fid="1">TODO</Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={["slide", "spin"]} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
            Browserify
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <List>
            <ListItem><Appear fid="1">TODO</Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={["slide", "spin"]} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
            Webpack
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <List>
            <ListItem><Appear fid="1">TODO</Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={["slide", "spin"]} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
            JSPM
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <List>
            <ListItem><Appear fid="1">TODO</Appear></ListItem>
          </List>
        </Slide>

        {/* testing */}
        <Slide transition={["slide", "spin"]} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
            Testing
          </Heading>
          <Heading caps size={2} textColor="secondary">
            To make things work for sure
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
          <Appear fid="1">
            <Heading size={2} caps textColor="primary">
              Selenium
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={2} caps textColor="tertiary">
              Protractor
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={2} caps textColor="primary">
              Jasmine
            </Heading>
          </Appear>
          <Appear fid="4">
            <Heading size={2} caps textColor="tertiary">
              Mocha
            </Heading>
          </Appear>
          <Appear fid="5">
            <Heading size={2} caps textColor="primary">
              ...
            </Heading>
          </Appear>
        </Slide>

        {/* web components */}
        <Slide transition={["slide", "spin"]} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
            Web Components
          </Heading>
          <Heading caps size={2} textColor="secondary">
            The Future?
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <List>
            <ListItem><Appear fid="1">TODO</Appear></ListItem>
          </List>
        </Slide>

        {/* conclusion */}
        <Slide transition={["slide", "spin"]} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
            Conclusion
          </Heading>
          <Heading caps size={2} textColor="secondary">
            To recap
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <List>
            <ListItem><Appear fid="1">TODO</Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={["spin", "slide"]} bgColor="tertiary">
          <Heading size={1} caps fit textColor="primary">
            Made with love in Finland by
          </Heading>
          <Link href="https://twitter.com/bebraw">
            <Heading caps fit size={2} textColor="secondary">
              Juho Vepsäläinen
            </Heading>
          </Link>
        </Slide>
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
      </Deck>
    );
  }
}
