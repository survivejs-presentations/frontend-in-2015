import React from "react/addons";
import {
  Appear, BlockQuote, Cite, CodePane, Fill, SlideSet,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text,
  Table, TableRow, TableHeaderItem, TableItem
} from "../../src/spectacle";

export default (images) => {
  return class Intro extends React.Component {
    render() {
      return (
        <SlideSet>
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
        </SlideSet>
      );
    }
  };
}
