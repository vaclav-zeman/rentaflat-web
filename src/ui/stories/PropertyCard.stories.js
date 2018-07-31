import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import PropertyCard from "../PropertyCard.tsx";

storiesOf("PropertyCard", module).add("default", () => (
  <PropertyCard onClick={action("clicked")}>
    <PropertyCard.Preview />
    <PropertyCard.Title>Nice and cozy flat</PropertyCard.Title>
  </PropertyCard>
));
