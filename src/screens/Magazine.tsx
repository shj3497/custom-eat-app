import styled from "@emotion/native";
import React from "react";

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

const Magazine = (props: any) => {
  return (
    <Container>
      <Title>Mzgazine</Title>
    </Container>
  );
};

export default Magazine;
