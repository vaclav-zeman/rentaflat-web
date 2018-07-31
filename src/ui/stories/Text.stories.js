import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Flex } from "grid-styled";

import Text from "../Text.tsx";

storiesOf("Text", module)
  .add("default", () => (
    <React.Fragment>
      <Text size={0}>Hello World! 🔥</Text>
      <Text size={1}>Hello World! 🎨</Text>
      <Text size={2}>Hello World! 🚀</Text>
    </React.Fragment>
  ))
  .add("bold", () => (
    <Text size={2} fontWeight={600}>
      Hello World! 🔥
    </Text>
  ))
  .add("colored", () => (
    <div style={{ background: "black" }}>
      <Text color="primary">Hello World! 🔥</Text>
      <Text color="secondary">Hello World! 🎨</Text>
      <Text color="white">Hello World! 🚀</Text>
    </div>
  ));
