import {KakaoIcon} from '@components/icons';
import styled from '@emotion/native';
import React from 'react';
import {Text} from 'react-native';

const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #ffea0f;
  height: 52px;
  margin-top: 10px;
`;

const KakaoHelpButton = () => {
  return (
    <Container>
      <KakaoIcon width={40} height={40} />
      <Text
        style={{
          color: '#3C1E1E',
          fontWeight: '700',
          fontSize: 15,
        }}
      >
        카카오톡 문의
      </Text>
    </Container>
  );
};

export default KakaoHelpButton;
