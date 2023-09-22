import styled from '@emotion/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

const Container = styled.View`
  display: flex;
  flex: 1;
  background: #fff;
  position: relative;
`;

const findButtonStyle = StyleSheet.create({
  labelStyle: {padding: 0, margin: 0},
  contentStyle: {},
  style: {
    position: 'absolute',
    bottom: 39,
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    padding: 0,
    margin: 0,
  },
});

const ButtonText = styled.Text`
  color: #111;
  text-align: center;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  text-align: center;
`;

const LginButtonList = styled.View`
  display: flex;
  flex-direction: column;
`;

const SocialButtonInner = styled.View`
  display: flex;
  align-items: center;
`;

const LogoWrap = styled.View`
  width: 52px;
  height: 52px;
`;

const socialButtonStyle = StyleSheet.create({
  labelStyle: {
    padding: 0,
    margin: 0,
  },
  contentStyle: {padding: 0, margin: 0},
  style: {
    width: '100%',
    padding: 0,
    margin: 0,
  },
});

const socialButtonInnerStyle = StyleSheet.create({
  naver: {
    backgroundColor: '#03c75a',
  },
  kakao: {
    backgroundColor: '#FFEA0F',
  },
  facebook: {
    backgroundColor: '#1877F2',
  },
  google: {
    backgroundColor: '#fff',
  },
  apple: {
    backgroundColor: '#000',
  },
});

type OAuthCompany = keyof typeof socialButtonInnerStyle;

interface SocialButton {
  id: OAuthCompany;
  name: string;
}
const socialButtons: SocialButton[] = [
  {id: 'naver', name: '네이버 로그인'},
  {id: 'kakao', name: '카카오 로그인'},
  {id: 'facebook', name: '페이스분 로그인'},
  {id: 'google', name: '구글 로그인'},
  {id: 'apple', name: '애플 로그인'},
];

const LoginScreen = () => {
  return (
    <Container>
      <LginButtonList>
        {socialButtons.map((data) => (
          <Button id={data.id} {...socialButtonStyle}>
            <SocialButtonInner style={socialButtonInnerStyle[data.id]}>
              <LogoWrap></LogoWrap>
            </SocialButtonInner>
          </Button>
        ))}
      </LginButtonList>
      <Button {...findButtonStyle}>
        <ButtonText>가입 계정 찾기</ButtonText>
      </Button>
    </Container>
  );
};

export default LoginScreen;
