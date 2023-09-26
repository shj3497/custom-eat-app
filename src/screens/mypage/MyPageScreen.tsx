import {PageNavigation} from '@components/_organisms/RootNavigation';
import ListItemButton from '@components/_organisms/mypage/ListItemButton';
import {
  MyPageStackParamKey,
  MyPageStackParamList,
} from '@components/_organisms/mypage/MyPageNavigation';
import ArrowRightIosIcon from '@components/icons/ArrowRightIosIcon';
import styled, {css} from '@emotion/native';
import {useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import React, {FC, ReactNode} from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

type Props = StackScreenProps<MyPageStackParamList, 'default'>;

const Container = styled.View`
  display: flex;
  flex: 1;
  padding: 45px 20px 0 20px;
  background: #fff;
`;

const TextWrap = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 35px;
`;

const Title = styled.Text`
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -1.6px;
  margin: 0;
  padding: 0;
`;

const SubTitle = styled.Text`
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -1.6px;
  margin: 0;
  padding: 0;
`;

const blackButtonStyle = StyleSheet.create({
  labelStyle: {
    color: '#fff',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    borderRadius: 0,
    margin: 0,
    paddingTop: 5,
    paddingBottom: 5,
  },
  contentStyle: {},
  style: {
    borderRadius: 0,
    backgroundColor: '#000',
    padding: 0,
    borderColor: '#000',
    borderWidth: 1,
    borderStyle: 'solid',
  },
});

const whiteButtonStyle = StyleSheet.create({
  labelStyle: {
    color: '#000',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    borderRadius: 0,
    margin: 0,
    paddingTop: 5,
    paddingBottom: 5,
  },
  contentStyle: {
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
  },
  style: {
    borderRadius: 0,
    backgroundColor: '#fff',
    padding: 0,
    borderColor: '#000',
    borderWidth: 1,
    borderStyle: 'solid',
  },
});

const ButtonList = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
`;

interface ButtonData {
  id: MyPageStackParamKey;
  title: ReactNode;
}

const buttonList: ButtonData[] = [
  {
    id: 'deliveryInfo',
    title: '배송안내',
  },
  {
    id: 'introduction',
    title: '커스텀잇 소개',
  },
  {
    id: 'notice',
    title: '공지사항',
  },
  {
    id: 'faq',
    title: '자주하는 질문',
  },
  {
    id: 'inquiry',
    title: '상품문의',
  },
];

const MyPageScreen: FC<Props> = ({route}) => {
  const navigation = useNavigation<PageNavigation>();

  const handlePress = (name: MyPageStackParamKey) => {
    navigation.navigate(name);
  };
  return (
    <Container>
      <TextWrap>
        <Title>커스텀잇 회원가입하고</Title>
        <SubTitle>다양한 혜택을 받아보세요!</SubTitle>
      </TextWrap>
      <Button
        {...blackButtonStyle}
        onPress={() => {
          navigation.navigate('login');
        }}
      >
        로그인하기
      </Button>
      <ButtonList>
        {buttonList.map((buttonData) => (
          <ListItemButton
            key={buttonData.id}
            onPress={() => {
              handlePress(buttonData.id);
            }}
          >
            {buttonData.title}
          </ListItemButton>
        ))}
      </ButtonList>
      <Button
        {...whiteButtonStyle}
        icon={() => <ArrowRightIosIcon width={20} height={20} />}
        onPress={() => {
          navigation.navigate('help');
        }}
      >
        고객센터 도움이 필요하신가요?
      </Button>
    </Container>
  );
};

export default MyPageScreen;
