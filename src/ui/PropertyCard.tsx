import * as React from "react";
import styled from "styled-components";
import { FormattedNumber, FormattedMessage } from "react-intl";
import { Flex } from "grid-styled";
import Text, { colors, sizes } from "./Text";

export interface Props {
  imageUrl: string;
  address: string;
  squareSize: number;
  bedrooms: number;
  onClick: () => void;
  price: number;
}

const Wrapper = styled(Flex).attrs({ flexDirection: "column" })`
  border: 0.1rem solid ${p => p.theme.borderPrimary};
  padding: 0 1rem 1rem;
`;

const PreviewImage = styled.img`
  height: auto;
  width: 100%;
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
  margin: 0 -1rem;

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
  onClick,
  price,
  squareSize
}: Props) => (
  <Wrapper onClick={onClick}>
    <ImageWrapper>
      <PreviewImage src={imageUrl} />
      <Tag>
        <FormattedMessage id="prop.forRent" defaultMessage="For rent" />
      </Tag>
      <TitleWrapper>
        <Text color={colors.WHITE}>
          <FormattedMessage
            id="prop.title"
            defaultMessage="{bedrooms} br flat, {squareSize}m2"
            values={{ bedrooms, squareSize }}
          />
        </Text>
        <Text is="strong" color={colors.WHITE}>
          $
          <FormattedNumber value={price} format="currency" />
        </Text>
      </TitleWrapper>
    </ImageWrapper>

    <Text mt="1rem" size={sizes.SMALL}>
      {address}
    </Text>
  </Wrapper>
);

export default PropertyCard;
