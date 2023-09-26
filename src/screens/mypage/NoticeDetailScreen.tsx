import {MyPageStackParamList} from '@components/_organisms/mypage/MyPageNavigation';
import styled from '@emotion/native';
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text} from 'react-native';

type Props = StackScreenProps<MyPageStackParamList, 'noticeDetail'>;

const Container = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const NoticeDetailScreen = ({navigation, route}: Props) => {
  const id = route.params.id;
  return (
    <Container>
      <Text>NoticeDetailScreen</Text>
      <Text>{id}</Text>
    </Container>
  );
};

export default NoticeDetailScreen;
