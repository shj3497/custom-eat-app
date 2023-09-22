import styled from "@emotion/native";
import React, { FC } from "react";

interface ReviewProps {}

const Container = styled.View`
  display: flex;
  flex: 1;

  justify-content: center;
  align-items: center;
`;
const Title = styled.Text`
  display: flex;
  color: red;
`;

const Review: FC<ReviewProps> = (props: any) => {
  return (
    <Container>
      <Title>Review</Title>
    </Container>
  );
};

export default Review;
