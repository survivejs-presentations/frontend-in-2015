import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text,
  Table, TableRow, TableHeaderItem, TableItem
} from "../src/spectacle";

import Interactive from "./interactive.jsx";

import preloader from "../src/utils/preloader";
import images from "./images";

const BG_OPACITY = 0.6;

preloader([images.city, images.cheese]);

export default class extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={800} progress={'bar'}>
        {/* intro */}
        <Slide transition={["zoom"]} bgColor="primary"
          notes="<ul><li>Hello!</li><li>Let's clear the decks!</li></ul>">
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
        <Slide transition={["slide"]} bgImage={images.city} bgDarken={BG_OPACITY}
          notes="<ul><li>Three dimensions</li><li>What to compromise?</li></ul>">
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
        <Slide transition={["slide"]} bgColor="black"
          notes="<ul><li>JavaScript is not a joke!</li><li>It's the future nobody anticipated.</li></ul>">
          <BlockQuote>
            <Quote>Always bet on JS!</Quote>
            <Cite>Brendan Eich</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary"
          notes="<ul><li>Increasing usage</li><li>Hard to find sites without any</li></ul>">
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
        <Slide transition={['zoom', 'fade']} bgColor="primary"
          notes="<ul><li>Popular</li><li>Same goes for AltJS</li></ul>">
          <Layout>
            <Link href="http://redmonk.com/jgovernor/2015/07/31/programming-language-rankings-summer-2015/">
              <Image src={images.redmonk} />
            </Link>
          </Layout>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgImage={images.html}
          notes="<ul><li>In the beginning there was swamp, a HTML editor and John</li><li>And life was simple</li></ul>">
        </Slide>
        <Slide transition={['zoom', 'fade']} bgImage={images.tablet}
          notes="<ul><li>Now it's not.</li><li>JavaScript is everywhere.</li></ul>">
        </Slide>
        <Slide transition={["slide"]} bgImage={images.city} bgDarken={BG_OPACITY}
          notes="<ul><li>Started from inline, got AJAX, SPAs and finally universal JavaScript.</li><li>The pendulum swung back.</li></ul>">
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
        <Slide transition={["zoom", "fade"]} bgColor="primary" bgImage={images.cheese} bgDarken={BG_OPACITY}
          notes="<ul><li>Frameworks or libraries?</li><li>Now that's the question.</li></ul>">
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
        <Slide transition={['zoom', 'fade']} bgColor="secondary"
          notes="<ul><li>As it's easier to compare through an example, let's use TodoMVC.</li><li>It's enough.</li></ul>">
          <Layout>
            <Link href="http://todomvc.com/">
              <Image src={images.todomvc} padding="20px"  />
            </Link>
          </Layout>
        </Slide>

        {/* frameworks */}
        <Slide transition={["slide", "spin"]} bgColor="primary"
          notes="<ul><li>Want to get opinionated?</li><li>Pick a framework.</li></ul>">
          <Heading caps fit size={1} textColor="tertiary">
            Frameworks
          </Heading>
          <Heading caps size={2} textColor="secondary">
            Swiss knives
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.city} bgDarken={BG_OPACITY}
          notes="<ul><li>Plenty to choose from.</li><li>Explosion of alternatives.</li></ul>">
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
              Polymer
            </Heading>
          </Appear>
          <Appear fid="6">
            <Heading size={2} caps textColor="tertiary">
              Meteor
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary"
          notes="<ul><li>Angular 1.0 in 2012</li><li>Directives! Testability. Dependency Injection.</li></ul>">
          <Layout>
            <Image src={images.angular} />
          </Layout>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary"
          notes="<ul><li>Custom syntax through directives.</li><li>DSL which you develop. Rethinking approach and going towards 2.0.</li></ul>">
          <CodePane
            lang="html"
            source={require("raw!./examples/angular.example")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary"
          notes="<ul><li>Ember 1.0 in 2013</li><li>Handlebars? You got it.</li></ul>">
          <Layout>
            <Image src={images.ember} />
          </Layout>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary"
          notes="<ul><li>Convention over Configuration</li><li>Router and data layer included</li></ul>">
          <CodePane
            lang="handlebars"
            source={require("raw!./examples/ember.example")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary"
          notes="<ul><li>A light-weight solution for data management</li><li>Not that opinionated. More of a starting point (Marionette etc.).</li></ul>">
          <Layout>
            <Image src={images.backbone} />
          </Layout>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary"
          notes="<ul><li>You fill in the blanks.</li><li>Backbone deals just with data.</li></ul>">
          <CodePane
            lang="html"
            source={require("raw!./examples/backbone.example")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary"
          notes="<ul><li>MVVM pattern.</li><li>Easy data bindings.</li></ul>">
          <Layout>
            <Image src={images.knockout} />
          </Layout>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary"
          notes="<ul><li>Lots of bindings!</li><li>ViewModel below.</li></ul>">
          <CodePane
            lang="html"
            source={require("raw!./examples/knockout.example")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary"
          notes="<ul><li>A sneak peek at the future?</li><li>Web Components!</li></ul>">
          <Layout>
            <Image src={images.polymer} />
          </Layout>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary"
          notes="<ul><li>Pushing logic to Web Components.</li><li>The standard approach.</li></ul>">
          <CodePane
            lang="html"
            source={require("raw!./examples/polymer.example")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary"
          notes="<ul><li>Want both front-end and back-end?</li><li>Try Meteor.</li></ul>">
          <Layout>
            <Image src={images.meteor} />
          </Layout>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary"
          notes="<ul><li>Simple view with templating.</li><li>Full, well-funded solution.</li></ul>">
          <CodePane
            lang="html"
            source={require("raw!./examples/meteor.example")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary"
          notes="<ul><li>Each have their strengths and ecosystem.</li><li>Particularly Angular is popular. Giant compared to the rest.</li></ul>">
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
                <TableItem>Google backed, full featured, 2.0 in sight</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>Ember.js</TableItem>
                <TableItem>Niche, popular with rubists, reached 2.0 recently</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>Backbone.js</TableItem>
                <TableItem>Used to be popular, still in use, focus on model</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>Knockout.js</TableItem>
                <TableItem>MVVM, niche, focus on data binding</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>Polymer</TableItem>
                <TableItem>Web Components</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>Meteor</TableItem>
                <TableItem>Both front-end and back-end</TableItem>
              </TableRow>
            </Table>
          </Layout>
        </Slide>

        {/* libraries */}
        <Slide transition={["slide", "spin"]} bgColor="primary"
          notes="<ul><li>Frameworks aren't the only solution</li><li>A library based approach can work as well.</li></ul>">
          <Heading caps fit size={1} textColor="tertiary">
            Libraries
          </Heading>
          <Heading caps size={2} textColor="secondary">
            For specific problems
          </Heading>
        </Slide>
        <Slide transition={["slide", "spin"]} bgColor="primary"
          notes="<ul><li>There are multiple solutions for the view layer.</li><li>Pick other libraries to complement as needed.</li></ul>">
          <Heading caps fit size={1} textColor="tertiary">
            View Libraries
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.city} bgDarken={BG_OPACITY}
          notes="<ul><li>A lot to choose from.</li><li>Same as with frameworks. Too many to learn them all.</li></ul>">
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
            <Heading size={2} caps textColor="tertiary">
              Cycle.js
            </Heading>
          </Appear>
          <Appear fid="5">
            <Heading size={2} caps textColor="primary">
              + 1 000 more
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary"
          notes="<ul><li>Facebook's React has taken the world by storm.</li><li>It will inspire the next generation of frameworks.</li></ul>">
          <Layout>
            <Image src={images.react} />
          </Layout>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary"
          notes="<ul><li>A growing technology.</li><li>Gets more popular day by day.</li></ul>">
          <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
            Overview of React
          </Heading>
          <List>
            <ListItem><Appear fid="1">Virtual DOM</Appear></ListItem>
            <ListItem><Appear fid="2">Component oriented!</Appear></ListItem>
            <ListItem><Appear fid="3">state, props, lifecycle</Appear></ListItem>
            <ListItem><Appear fid="4"><Link href="https://facebook.github.io/react-native/">React Native</Link></Appear></ListItem>
            <ListItem><Appear fid="5"><Link href="https://github.com/Yomguithereal/react-blessed">react-blessed</Link></Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary"
          notes="<ul><li>This presentation was made in React.</li><li>Let's count cats.</li></ul>">
          <Heading size={1} caps fit textColor="tertiary">
            Cat Counter
          </Heading>
          <Interactive/>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary"
          notes="<ul><li>Note JSX (compiled to JS) and how we treat data!</li><li>A step beyond templating. Runtime checks against structure!</li></ul>">
          <CodePane
            lang="javascript"
            source={require("raw!./examples/cat.example")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary"
          notes="<ul><li>Note how attributes map to DOM.</li><li>Reads quite well beyond that.</li></ul>">
          <CodePane
            lang="html"
            source={require("raw!./examples/react.example")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary"
          notes="<ul><li>Reactive alternative.</li><li>Not as popular, though.</li></ul>">
          <Layout>
            <Image src={images.vue} />
          </Layout>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary"
          notes="<ul><li>See 'v-' prefix</li><li>Reminds me of something.</li></ul>">
          <CodePane
            lang="html"
            source={require("raw!./examples/vue.example")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary"
          notes="<ul><li>More templating!</li></ul>">
          <Layout>
            <Image src={images.ractive} />
          </Layout>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary"
          notes="<ul><li>Similar ideas as before./li></ul>">
          <CodePane
            lang="html"
            source={require("raw!./examples/ractive.example")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary"
          notes="<ul><li>Up and coming alternative.</li><li>human(), computer()</li></ul>">
          <Layout>
            <Image src={images.cycle} />
          </Layout>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary"
          notes="<ul><li>Reactive flow.</li><li>The next step from React?</li></ul>">
          <CodePane
            lang="javascript"
            source={require("raw!./examples/cycle.example")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary"
          notes="<ul><li>Many alternatives. React stands out. See also Riot.</li></ul>">
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
        <Slide transition={["slide", "spin"]} bgColor="primary"
          notes="<ul><li>With libraries you are building it bit by bit. Another part, router.</li></ul>">
          <Heading caps fit size={1} textColor="tertiary">
            Routers
          </Heading>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary"
          notes="<ul><li>Again, a lot to choose from.</li></ul>">
          <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
            Routers
          </Heading>
          <List>
            <ListItem><Appear fid="1"><Link href="https://github.com/rackt/react-router">react-router</Link> - React</Appear></ListItem>
            <ListItem><Appear fid="2"><Link href="https://github.com/christianalfoni/reactive-router">reactive-router</Link>  - React</Appear></ListItem>
            <ListItem><Appear fid="3"><Link href="https://github.com/kadirahq/flow-router">flow-router</Link> - Meteor</Appear></ListItem>
            <ListItem><Appear fid="4"><Link href="https://router5.github.io/">router5</Link></Appear></ListItem>
          </List>
        </Slide>

        {/* jobs (usage) */}
        <Slide transition={['zoom', 'fade']} bgColor="primary"
          notes="<ul><li>Angular dominates the work market.</li><li>Early signs of React.</li></ul>">
          <Heading size={1} textColor="tertiary">
            Job Trends
          </Heading>
          <Layout>
            <Image src={images.jobs} padding="20px" />
          </Layout>
          <Layout>
            <Text>
              <Link href="http://www.indeed.com/jobtrends?q=Angularjs%2C+React.js%2C+Knockout%2C+Backbone.js&l=">Indeed</Link>
            </Text>
          </Layout>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary"
          notes="<ul><li>Also job titles change.</li><li>Increasing demand for full stack developers.</li></ul>">
          <Heading size={1} textColor="tertiary">
            Job Trends II
          </Heading>
          <Layout>
            <Image src={images.jobTitles} padding="20px" />
          </Layout>
          <Layout>
            <Text>
              <Link href="http://www.indeed.com/jobanalytics/jobtrends?q=frontend%2C+backend%2C+full+stack&l=">Indeed</Link>
            </Text>
          </Layout>
        </Slide>

        {/* architecture */}
        <Slide transition={["slide", "spin"]} bgColor="primary"
          notes="<ul><li>What's modern frontend architecture like?</li></ul>">
          <Heading caps fit size={1} textColor="tertiary">
            Architecture
          </Heading>
          <Heading caps size={2} textColor="secondary">
            The Art of Wasting Space
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.city} bgDarken={BG_OPACITY}
          notes="<ul><li>Started from static sites, went to dynamic, RESTful, app specific.</li><li>Earlier solutions are relevant still but the future is more custom.</li></ul>">
          <Appear fid="1">
            <Heading size={2} caps textColor="primary">
              Static Sites
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={2} caps textColor="tertiary">
              Dynamic Sites
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={2} caps textColor="primary">
              REST
            </Heading>
          </Appear>
          <Appear fid="4">
            <Heading size={2} caps textColor="tertiary">
              Relay/Falcor
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="black"
          notes="<ul><li>Let's leave site design to AI?</li><li>Why not? Easier to optimize.</li></ul>">
          <Heading caps size={1} textColor="tertiary">
            The Grid
          </Heading>
          <Layout>
            <Link href="https://thegrid.io/">
              <Image src={images.thegrid} />
            </Link>
          </Layout>
        </Slide>

        {/* interlude */}
        <Slide transition={["slide"]} bgColor="black"
          notes="<ul><li>In the end it's about making good decisions based on constraints.</li></ul>">
          <BlockQuote>
            <Quote>Design is the beauty of turning constraints into advantages</Quote>
            <Cite>Aza Raskin</Cite>
          </BlockQuote>
        </Slide>

        {/* npm */}
        <Slide transition={["slide", "spin"]} bgColor="primary"
          notes="<ul><li>Need package management? Leave it to npm.</li></ul>">
          <Heading fit size={1} textColor="tertiary">
            npm
          </Heading>
          <Heading caps size={2} textColor="secondary">
            For keeping things together
          </Heading>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary"
          notes="<ul><li>Amazing growth rate.</li><li>At this rate bigger than others combined.</li></ul>">
          <Heading size={1} textColor="tertiary">
            Module Counts
          </Heading>
          <Layout>
            <Image src={images.moduleCounts} padding="20px" />
          </Layout>
          <Layout>
            <Text>
              <Link href="http://www.modulecounts.com/">modulecounts.com</Link>
            </Text>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} textColor="primary" bgImage={images.boxing} bgDarken={BG_OPACITY}
          notes="<ul><li>For both frontend and backend?</li><li>No reason not to use.</li></ul>">
          <List>
            <ListItem><Appear fid="1">182k+ packages and growing fast</Appear></ListItem>
            <ListItem><Appear fid="2">Dependency management</Appear></ListItem>
            <ListItem><Appear fid="3">Package authoring</Appear></ListItem>
            <ListItem><Appear fid="4">Both frontend/backend</Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary"
          notes="<ul><li>Relies on package.json.</li><li>Useful for running tasks as well.</li></ul>">
          <Heading size={1} textColor="tertiary">
            package.json
          </Heading>
          <CodePane
            lang="json"
            source={require("raw!./examples/npm.example")}
            margin="20px auto"/>
        </Slide>

        {/* build tools */}
        <Slide transition={["slide", "spin"]} bgColor="primary"
          notes="<ul><li>Getting something visible to the client is important. Hence build tools are needed.</li></ul>">
          <Heading caps fit size={1} textColor="tertiary">
            Build Tools
          </Heading>
          <Heading caps size={2} textColor="secondary">
            Hard to live without
          </Heading>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary"
          notes="<ul><li>Split based on generations. From task runners to bundlers.</li></ul>">
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
        <Slide transition={['zoom', 'fade']} bgColor="primary"
          notes="<ul><li>The classic starting point.</li></ul>">
          <Heading caps size={1} textColor="tertiary">
            Make
          </Heading>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary"
          notes="<ul><li>Still valid.</li></ul>">
          <CodePane
            lang="html"
            source={require("raw!./examples/make.example")}
            margin="20px auto"/>
          <Layout>
            <Text>
              <Link href="https://blog.jcoglan.com/2014/02/05/building-javascript-projects-with-make/">Building JavaScript projects with Make</Link>
            </Text>
          </Layout>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary"
          notes="<ul><li>Very popular for a while due to plugins.</li><li>Gruntfiles became difficult to maintain.</li></ul>">
          <Layout>
            <Image src={images.grunt} />
          </Layout>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary"
          notes="<ul><li>Plugins!</li><li>But they hide the complexity making Gruntfiles difficult to maintain.</li></ul>">
          <CodePane
            lang="javascript"
            source={require("raw!./examples/grunt.example")}
            margin="20px auto"/>
          <Layout>
            <Text>
              <Link href="http://gruntjs.com/sample-gruntfile">Grunt documentation</Link>
            </Text>
          </Layout>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary"
          notes="<ul><li>The next step.</li><li>Streaming alternative. More power.</li></ul>">
          <Layout>
            <Image src={images.gulp} />
          </Layout>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary"
          notes="<ul><li>Streams in action.</li><li>A step towards something better even if some manual work is required.</li></ul>">
          <CodePane
            lang="javascript"
            source={require("raw!./examples/gulp.example")}
            margin="20px auto"/>
          <Layout>
            <Text>
              <Link href="https://github.com/gulpjs/gulp">Gulp README</Link>
            </Text>
          </Layout>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary"
          notes="<ul><li>Niche alternative</li><li>Instead of pipes/sink we have trees.</li></ul>">
          <Layout>
            <Image src={images.broccoli} />
          </Layout>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary"
          notes="<ul><li>You build trees.</li><li>And operate based on those.</li></ul>">
          <CodePane
            lang="javascript"
            source={require("raw!./examples/broccoli.example")}
            margin="20px auto"/>
          <Layout>
            <Text>
              <Link href="https://github.com/broccolijs/broccoli-sample-app/blob/master/Brocfile.js">broccoli-sample-app</Link>
            </Text>
          </Layout>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary"
          notes="<ul><li>Modular bundler based on NPM.</li><li>Lots of small tools.</li></ul>">
          <Layout>
            <Image src={images.browserify} />
          </Layout>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary"
          notes="<ul><li>Just this. Pipe together to build what you need.</li></ul>">
          <CodePane
            lang="html"
            source={require("raw!./examples/browserify.example")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary"
          notes="<ul><li>Configuration driven approach.</li><li>Hard to pick up but powerful.</li></ul>">
          <Layout>
            <Image src={images.webpack} />
          </Layout>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary"
          notes="<ul><li>Input, output, module loaders, plugins.</li></ul>">
          <CodePane
            lang="javascript"
            source={require("raw!./examples/webpack.example")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary"
          notes="<ul><li>Push it all to browser!</li><li>The next big thing?</li></ul>">
          <Layout>
            <Image src={images.jspm} />
          </Layout>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary"
          notes="<ul><li>Based on SystemJS module loader.</li><li>Still developing and in some ways immature.</li></ul>">
          <CodePane
            lang="html"
            source={require("raw!./examples/jspm.example")}
            margin="20px auto"/>
          <Layout>
            <Text>
              <Link href="https://github.com/jspm/jspm-cli/wiki/Getting-Started">JSPM - Getting Started</Link>
            </Text>
            <Text>
              <Link href="https://www.youtube.com/watch?v=iukBMY4apvI">Glen Maddern's video tutorial</Link>
            </Text>
          </Layout>
          <Layout>
            <Text>HTTP2</Text>
          </Layout>
        </Slide>

        {/* productivity tools */}
        <Slide transition={["slide", "spin"]} bgColor="primary"
          notes="<ul><li>Not just ctrl-r anymore</li></ul>">
          <Heading caps fit size={1} textColor="tertiary">
            Productivity
          </Heading>
          <Heading caps size={2} textColor="secondary">
            For fun and profit
          </Heading>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary"
          notes="<ul><li>Pushing towards better tooling (time travel!).</li></ul>">
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
        <Slide transition={["slide", "spin"]} bgColor="primary"
          notes="<ul><li>Vanilla CSS gets you only so far.</li></ul>">
          <Heading caps fit size={1} textColor="tertiary">
            CSS Processors
          </Heading>
          <Heading caps size={2} textColor="secondary">
            Because Vanilla Isn't Enough
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" bgImage={images.style} bgDarken={BG_OPACITY}
          notes="<ul><li>Solving CSS through conventions.</li></ul>">
          <Heading caps >BEM, OOCSS, SMACSS</Heading>
          <Heading caps size={2} textColor="primary">Solving CSS within CSS</Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" bgImage={images.style} bgDarken={BG_OPACITY}
          notes="<ul><li>Solving CSS through better languages.</li></ul>">
          <Heading caps >SASS, Less, Stylus</Heading>
          <Heading caps size={2} textColor="primary">Better languages</Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" bgImage={images.style} bgDarken={BG_OPACITY}
          notes="<ul><li>Solving CSS through plugins (new features as needed!).</li></ul>">
          <Heading caps >PostCSS, cssnext</Heading>
          <Heading caps size={2} textColor="primary">Extensions</Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary"
          notes="<ul><li>Hard to separate preprocessors from postprocessors, better talk about processors.</li></ul>">
          <Layout>
            <Image src={images.cssProcessors} padding="20px" />
          </Layout>
          <Layout>
            <Text>
              <Link href="https://medium.com/@ddprrt/deconfusing-pre-and-post-processing-d68e3bd078a3">Deconfusing Pre- and Post-processing</Link>
            </Text>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" bgImage={images.style} bgDarken={BG_OPACITY}
          notes="<ul><li>Going inline was a fad (still?) in React circles</li></ul>">
          <Heading caps >Inline CSS (React)</Heading>
          <Heading caps size={2} textColor="primary">Back to the future?</Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" bgImage={images.style} bgDarken={BG_OPACITY}
          notes="<ul><li>Going local by default might be a better idea. Composition works as well!</li></ul>">
          <Heading caps >CSS Modules</Heading>
          <Heading caps size={2} textColor="primary">Eliminates globals, modularity++</Heading>
        </Slide>

        {/* javascript */}
        <Slide transition={["slide", "spin"]} bgColor="primary"
          notes="<ul><li>JavaScript will never be the same again.</li></ul>">
          <Heading caps fit size={1} textColor="tertiary">
            ES2015, ES2016, ...
          </Heading>
          <Heading caps size={2} textColor="secondary">
            Version per year
          </Heading>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="secondary"
          notes="<ul><li>Get future now through Babel.</li></ul>">
          <Heading caps >Babel</Heading>
          <Heading caps size={2} textColor="primary">The Future Now</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary" bgImage={images.babel} bgDarken={BG_OPACITY}
          notes="<ul><li>Tons of features, JSX out of box, easy to set up.</li></ul>">
          <List>
            <ListItem><Appear fid="1">JavaScript compiler</Appear></ListItem>
            <ListItem><Appear fid="2">JSX support out of box</Appear></ListItem>
            <ListItem><Appear fid="3">Easy to set up</Appear></ListItem>
            <ListItem><Appear fid="4">See also Google Traceur</Appear></ListItem>
          </List>
        </Slide>

        {/* altJS */}
        <Slide transition={["slide", "spin"]} bgColor="primary"
          notes="<ul><li>Not just vanilla.</li></ul>">
          <Heading fit size={1} textColor="tertiary">
            altJS
          </Heading>
          <Heading caps size={2} textColor="secondary">
            Alternatives to Vanilla
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary" bgImage={images.alternative} bgDarken={BG_OPACITY}
          notes="<ul><li>More opinionated in some ways (writeability, typing, features).</li></ul>">
          <List>
            <ListItem><Appear fid="1">CoffeeScript</Appear></ListItem>
            <ListItem><Appear fid="2">TypeScript</Appear></ListItem>
            <ListItem><Appear fid="3">Flow - Gradual typing</Appear></ListItem>
            <ListItem><Appear fid="4">And many others</Appear></ListItem>
          </List>
        </Slide>

        {/* linting */}
        <Slide transition={["slide", "spin"]} bgColor="primary"
          notes="<ul><li>Catch potential problems before they become serious.</li></ul>">
          <Heading caps fit size={1} textColor="tertiary">
            Linting
          </Heading>
          <Heading caps size={2} textColor="secondary">
            To keep bugs at bay
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" bgImage={images.lint} bgDarken={BG_OPACITY}
          notes="<ul><li>Choose/build the rules/reporters you need. Autofixing!</li></ul>">
          <Heading caps >ESLint</Heading>
          <Heading caps size={2} textColor="primary">Pluggable linting for JavaScript</Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" bgImage={images.lint} bgDarken={BG_OPACITY}
          notes="<ul><li>Catch common CSS gotchas!</li></ul>">
          <Heading caps >csslint</Heading>
          <Heading caps size={2} textColor="primary">Rules for improving your CSS</Heading>
        </Slide>

        {/* testing */}
        <Slide transition={["slide", "spin"]} bgColor="primary"
          notes="<ul><li>How to know something truly works or didn't got broken?</li></ul>">
          <Heading caps fit size={1} textColor="tertiary">
            Testing
          </Heading>
          <Heading caps size={2} textColor="secondary">
            To make things work for sure
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.city} bgDarken={BG_OPACITY}
          notes="<ul><li>Plenty of tools for different levels of testing.</li></ul>">
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
        <Slide transition={["slide", "spin"]} bgColor="primary"
          notes="<ul><li>Future is component oriented?</li></ul>">
          <Heading caps fit size={1} textColor="tertiary">
            Web Components
          </Heading>
          <Heading caps size={2} textColor="secondary">
            The Future?
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary"
          notes="<ul><li>Better collaboration! Now too fragmented.</li></ul>">
          <List>
            <ListItem><Appear fid="1">Fragmentation (Bootstrap for AngularJS, Ember, React, ...)</Appear></ListItem>
            <ListItem><Appear fid="2">What if there was only one canonical version of libraries?</Appear></ListItem>
            <ListItem><Appear fid="3">Improved reuse, sharing across projects, less waste</Appear></ListItem>
          </List>
        </Slide>

        {/* conclusion */}
        <Slide transition={["slide", "spin"]} bgColor="primary"
          notes="<ul><li>To conclude all this.</li></ul>">
          <Heading caps fit size={1} textColor="tertiary">
            Conclusion
          </Heading>
          <Heading caps size={2} textColor="secondary">
            To recap
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary"
          notes="<ul><li>Nothing ever remains the same. Esp. in frontend.</li></ul>">
          <List>
            <ListItem><Appear fid="1">Prepare to clear the decks often</Appear></ListItem>
            <ListItem><Appear fid="2">A lot to learn but focus pays off</Appear></ListItem>
            <ListItem><Appear fid="3">Towards a component based future?</Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={["slide", "spin"]} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
            Questions?
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={1} caps fit textColor="primary">
            Made with love in Finland by
          </Heading>
          <Link href="https://twitter.com/bebraw">
            <Heading caps fit size={2} textColor="secondary">
              Juho Vepsäläinen
            </Heading>
          </Link>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={1} caps fit textColor="primary">
            Read my book
          </Heading>
          <Link href="http://survivejs.com/">
            <Heading caps fit size={2} textColor="secondary">
              SurviveJS - Webpack and React
            </Heading>
          </Link>
        </Slide>
      </Deck>
    );
  }
}
