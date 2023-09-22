import styled from '@emotion/native';
import React, {FC} from 'react';

interface FaqScreenProps {}

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

const FaqScreen: FC<FaqScreenProps> = (props: any) => {
  return (
    <Container>
      <Title>FaqScreen</Title>
    </Container>
  );
};

export default FaqScreen;
