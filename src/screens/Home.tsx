import styled from "@emotion/native";
import React, { FC } from "react";

interface HomeProps {}

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

const NavButton = styled.Button``;

const Home: FC<HomeProps> = (props: any) => {
  return (
    <Container>
      <Title>Home</Title>
    </Container>
  );
};

export default Home;
