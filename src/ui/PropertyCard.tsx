import * as React from "react";
import styled from "styled-components";
import { FormattedNumber, FormattedMessage } from "react-intl";
import { Flex } from "grid-styled";

export interface Props {
  imageUrl: string;
  address: string;
  squareSize: number;
  bedrooms: number;
  price: number;
}

const PropertyCardWrapper = styled(Flex).attrs({ flexDirection: "column" })`
  border: 0.1rem solid ${p => p.theme.borderPrimary};
  padding: 1rem;
`;

const PreviewImage = styled.img`
  height: auto;
  width: 100%;
`;

const Price = styled.strong`
  color: white;
  font-size: 2rem;
  margin: 0;
`;

const TitleWrapper = styled(Flex)`
  bottom: 1rem;
  justify-content: space-between;
  left: 0;
  padding: 0 1rem;
  position: absolute;
  width: 100%;
`;

const ImageWrapper = styled.div`
  position: relative;

  &:before {
    content: "";
    display: block;
    height: 8rem;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.7)
    );
  }
`;

const Title = styled.a`
  font-size: 2rem;
  color: white;
`;

const Address = styled.address`
  font-size: 1.6rem;
  margin-top: 1rem;
`;

const Tag = styled.strong`
  background: ${p => p.theme.primary};
  display: block;
  font-size: 1.4rem;
  padding: 0.5rem 1rem;
  position: absolute;
  right: 0;
  top: 2rem;
`;

const PropertyCard: React.SFC<Props> = ({
  address,
  bedrooms,
  imageUrl,
  price,
  squareSize
}: Props) => (
  <PropertyCardWrapper>
    <ImageWrapper>
      <PreviewImage src={imageUrl} />
      <Tag>
        <FormattedMessage id="prop.forRent" defaultMessage="For rent" />
      </Tag>
      <TitleWrapper>
        <Title>
          <FormattedMessage
            id="prop.title"
            defaultMessage="{bedrooms} br flat, {squareSize}m2"
            values={{ bedrooms, squareSize }}
          />
        </Title>
        <Price>
          $
          <FormattedNumber value={price} format="currency" />
        </Price>
      </TitleWrapper>
    </ImageWrapper>

    <Address>{address}</Address>
  </PropertyCardWrapper>
);

export default PropertyCard;
