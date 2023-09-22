import styled from '@emotion/native';
import React from 'react';

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

const DeliveryInfoScreen = (props: any) => {
  return (
    <Container>
      <Title>DeliveryInfoScreen</Title>
    </Container>
  );
};

export default DeliveryInfoScreen;
