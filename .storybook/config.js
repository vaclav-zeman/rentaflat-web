// TODO: Set up storybook in TS
import { configure } from "@storybook/react";

// automatically import all files ending in *.stories.js
const req = require.context("../src/ui", true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
