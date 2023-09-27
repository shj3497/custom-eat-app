import {MyPageStackParamList} from '@components/_organisms/mypage/MyPageNavigation';
import NotCsAskView from '@components/_organisms/mypage/NotCsAskView';
import styled from '@emotion/native';
import {StackScreenProps} from '@react-navigation/stack';
import React, {FC} from 'react';

export type CsAskListScreenProps = StackScreenProps<
  MyPageStackParamList,
  'csAskList'
>;

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const CsAskListScreen: FC<CsAskListScreenProps> = (props) => {
  const {route, navigation} = props;
  return (
    <Container>
      <NotCsAskView {...props} />
    </Container>
  );
};

export default CsAskListScreen;
