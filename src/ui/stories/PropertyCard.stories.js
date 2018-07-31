import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Flex } from "grid-styled";

import PropertyCard from "../PropertyCard.tsx";

storiesOf("PropertyCard", module).add("default", () => (
  <PropertyCard
    address="5th Avenue, New York"
    bedrooms={3}
    imageUrl="http://bethdickerson.com/wp-content/uploads/2015/10/imagereader-12.jpg"
    price={50000}
    squareSize={25}
  />
));
