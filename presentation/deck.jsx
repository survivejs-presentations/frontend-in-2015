import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text,
  Table, TableRow, TableHeaderItem, TableItem
} from "../src/spectacle";

import Interactive from "./interactive.jsx";

import preloader from "../src/utils/preloader";

const images = {
  city: require("./images/city.jpg"),
  cheese: require("./images/cheese.jpg"),
  boxing: require("./images/boxing.jpg"),
  babel: require("./images/babel.jpg"),
  lint: require("./images/lint.jpg"),
  style: require("./images/style.jpg"),
  jobs: require("./images/jobs.png"),
  redmonk: require("./images/redmonk.png"),
  moduleCounts: require("./images/module_counts.png"),
};

preloader([images.city, images.cheese]);

export default class extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={800}>
        {/* intro */}
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
          <Link href="https://github.com/survivejs/frontend-in-2015">
            <Text bold caps textColor="tertiary">View on Github</Text>
          </Link>
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
        <Slide transition={["slide"]} bgColor="black">
          <BlockQuote>
            <Quote>Always bet on JS!</Quote>
            <Cite>Brendan Eich</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
            JavaScript Usage
          </Heading>
          <Layout>
            <Table>
              <TableRow>
                <TableHeaderItem></TableHeaderItem>
                <TableHeaderItem>2011</TableHeaderItem>
                <TableHeaderItem>2013</TableHeaderItem>
                <TableHeaderItem>2015</TableHeaderItem>
              </TableRow>
              <TableRow>
                <TableItem>None</TableItem>
                <TableItem>61.8%</TableItem>
                <TableItem>39.6%</TableItem>
                <TableItem>35.0%</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>jQuery</TableItem>
                <TableItem>28.3%</TableItem>
                <TableItem>54.5%</TableItem>
                <TableItem>61.5%</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>Modernizr</TableItem>
                <TableItem></TableItem>
                <TableItem></TableItem>
                <TableItem>7.2%</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>Bootstrap</TableItem>
                <TableItem></TableItem>
                <TableItem></TableItem>
                <TableItem>5.9%</TableItem>
              </TableRow>
            </Table>
          </Layout>
          <Layout>
            <Text>
              <Link href="http://w3techs.com/technologies/history_overview/javascript_library/all/y">W3Techs</Link>
            </Text>
          </Layout>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Layout>
            <Link href="http://redmonk.com/jgovernor/2015/07/31/programming-language-rankings-summer-2015/">
              <Image src={images.redmonk.replace("/", "")} />
            </Link>
          </Layout>
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
        <Slide transition={["zoom", "fade"]} bgColor="primary" bgImage={images.cheese.replace("/", "")} bgDarken={0.75}>
          <Heading caps fit>Pick your poison</Heading>
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
          <Heading caps size={2} textColor="secondary">
            Swiss knives
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
          <Heading caps size={1} textColor="tertiary">
            AngularJS
          </Heading>
          <CodePane
            lang="html"
            source={require("raw!./examples/angular.example")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading caps size={1} textColor="tertiary">
            Ember.js
          </Heading>
          <CodePane
            lang="handlebars"
            source={require("raw!./examples/ember.example")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading caps size={1} textColor="tertiary">
            Backbone.js
          </Heading>
          <CodePane
            lang="html"
            source={require("raw!./examples/backbone.example")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading caps size={1} textColor="tertiary">
            Knockout.js
          </Heading>
          <CodePane
            lang="html"
            source={require("raw!./examples/knockout.example")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading caps size={1} textColor="tertiary">
            Meteor
          </Heading>
          <CodePane
            lang="html"
            source={require("raw!./examples/meteor.example")}
            margin="20px auto"/>
        </Slide>
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

        {/* libraries */}
        <Slide transition={["slide", "spin"]} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
            Libraries
          </Heading>
          <Heading caps size={2} textColor="secondary">
            For specific problems
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
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} caps fit textColor="tertiary">
            Cat Counter in React.js
          </Heading>
          <Interactive/>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading caps size={1} textColor="tertiary">
            Cat Code
          </Heading>
          <CodePane
            lang="javascript"
            source={require("raw!./examples/cat.example")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading caps size={1} textColor="tertiary">
            React.js
          </Heading>
          <CodePane
            lang="html"
            source={require("raw!./examples/react.example")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading caps size={1} textColor="tertiary">
            Vue.js
          </Heading>
          <CodePane
            lang="html"
            source={require("raw!./examples/vue.example")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading caps size={1} textColor="tertiary">
            Ractive.js
          </Heading>
          <CodePane
            lang="html"
            source={require("raw!./examples/ractive.example")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading caps size={1} textColor="tertiary">
            Cycle.js
          </Heading>
          <CodePane
            lang="javascript"
            source={require("raw!./examples/cycle.example")}
            margin="20px auto"/>
        </Slide>
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

        {/* jobs (usage) */}
        <Slide transition={['zoom', 'fade']} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading size={1} textColor="tertiary">
            Job Trends
          </Heading>
          <Layout>
            <Image src={images.jobs.replace("/", "")} padding="20px" />
          </Layout>
          <Layout>
            <Text>
              <Link href="http://www.indeed.com/jobtrends?q=Angularjs%2C+React.js%2C+Knockout%2C+Backbone.js&l=">Indeed</Link>
            </Text>
          </Layout>
        </Slide>

        {/* npm */}
        <Slide transition={["slide", "spin"]} bgColor="primary">
          <Heading fit size={1} textColor="tertiary">
            npm
          </Heading>
          <Heading caps size={2} textColor="secondary">
            For keeping things together
          </Heading>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading size={1} textColor="tertiary">
            Module Counts
          </Heading>
          <Layout>
            <Image src={images.moduleCounts.replace("/", "")} padding="20px" />
          </Layout>
          <Layout>
            <Text>
              <Link href="http://www.modulecounts.com/">modulecounts.com</Link>
            </Text>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} textColor="primary" bgImage={images.boxing.replace("/", "")} bgDarken={0.75}>
          <List>
            <ListItem><Appear fid="1">176k+ packages and growing fast</Appear></ListItem>
            <ListItem><Appear fid="2">Dependency management</Appear></ListItem>
            <ListItem><Appear fid="3">Package authoring</Appear></ListItem>
            <ListItem><Appear fid="4">Both front-end/back-end</Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading size={1} textColor="tertiary">
            package.json
          </Heading>
          <CodePane
            lang="json"
            source={require("raw!./examples/npm.example")}
            margin="20px auto"/>
        </Slide>

        {/* build tools */}
        <Slide transition={["slide", "spin"]} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
            Build Tools
          </Heading>
          <Heading caps size={2} textColor="secondary">
            Hard to live without
          </Heading>
        </Slide>
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

        {/* productivity tools */}
        <Slide transition={["slide", "spin"]} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
            Productivity
          </Heading>
          <Heading caps size={2} textColor="secondary">
            For fun and profit
          </Heading>
        </Slide>
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

        {/* css processors */}
        <Slide transition={["slide", "spin"]} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
            CSS Processors
          </Heading>
          <Heading caps size={2} textColor="secondary">
            Because Vanilla Isn't Enough
          </Heading>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" bgImage={images.style.replace("/", "")} bgDarken={0.75}>
          <Heading caps >BEM, OOCSS, SMACSS</Heading>
          <Heading caps size={2} textColor="primary">Solving CSS within CSS</Heading>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" bgImage={images.style.replace("/", "")} bgDarken={0.75}>
          <Heading caps >SASS, Less, Stylus</Heading>
          <Heading caps size={2} textColor="primary">Better languages</Heading>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" bgImage={images.style.replace("/", "")} bgDarken={0.75}>
          <Heading caps >PostCSS, cssnext</Heading>
          <Heading caps size={2} textColor="primary">Extensions</Heading>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" bgImage={images.style.replace("/", "")} bgDarken={0.75}>
          <Heading caps >Inline CSS (React)</Heading>
          <Heading caps size={2} textColor="primary">Back to the future?</Heading>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" bgImage={images.style.replace("/", "")} bgDarken={0.75}>
          <Heading caps >CSS Modules</Heading>
          <Heading caps size={2} textColor="primary">Eliminates globals, modularity++</Heading>
        </Slide>

        {/* javascript */}
        <Slide transition={["slide", "spin"]} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
            ES2015, ES2016, ...
          </Heading>
          <Heading caps size={2} textColor="secondary">
            Version per year
          </Heading>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="secondary">
          <Heading caps >Babel</Heading>
          <Heading caps size={2} textColor="primary">The Future Now</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary" bgImage={images.babel.replace("/", "")} bgDarken={0.75}>
          <List>
            <ListItem><Appear fid="1">JavaScript compiler</Appear></ListItem>
            <ListItem><Appear fid="2">JSX support out of box</Appear></ListItem>
            <ListItem><Appear fid="2">Easy to setup</Appear></ListItem>
            <ListItem><Appear fid="3">See also Google Traceur</Appear></ListItem>
          </List>
        </Slide>

        {/* linting */}
        <Slide transition={["slide", "spin"]} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
            Linting
          </Heading>
          <Heading caps size={2} textColor="secondary">
            To keep bugs at bay
          </Heading>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" bgImage={images.lint.replace("/", "")} bgDarken={0.75}>
          <Heading caps >ESLint</Heading>
          <Heading caps size={2} textColor="primary">Pluggable linting for JavaScript</Heading>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" bgImage={images.lint.replace("/", "")} bgDarken={0.75}>
          <Heading caps >csslint</Heading>
          <Heading caps size={2} textColor="primary">Similar for CSS</Heading>
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