import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { ThemeProvider, injectGlobal } from "styled-components";
import theme from "../src/theme.ts";
import globalStyles from "../src/globalStyles.ts";

// automatically import all files ending in *.stories.js
const req = require.context("../src/ui", true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
));

injectGlobal`
  ${globalStyles}
  
  body {
    padding: 2rem;
  }
`;

configure(loadStories, module);
