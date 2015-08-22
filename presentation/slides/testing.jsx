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
        Testing
      </Heading>
      <Heading caps size={2} textColor="secondary">
        To make things work for sure
      </Heading>
    </Slide>,
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
  ];
};
