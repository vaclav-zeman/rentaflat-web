import * as React from "react";
import styled, { StyledComponentClass } from "styled-components";

export interface Props {
  children: React.ReactNode;
}

export interface StaticComps {
  Preview?: StyledComponentClass<{}, {}, {}>;
  Title?: StyledComponentClass<{}, {}, {}>;
}

const PropertyCardWrapper = styled.div`
  padding: 1rem;
  border: 0.1rem solid ${p => p.theme.borderPrimary};
`;

const PropertyCard: React.SFC<Props> & StaticComps = ({ children }: Props) => (
  <PropertyCardWrapper>{children}</PropertyCardWrapper>
);

PropertyCard.Preview = styled.img`
  width: 100%;
  height: 10rem;
`;

PropertyCard.Title = styled.h2`
  font-size: 1.8rem;
`;

export default PropertyCard;
