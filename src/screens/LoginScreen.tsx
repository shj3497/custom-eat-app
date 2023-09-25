import {
  AppleIcon,
  ArrowRightIosIcon,
  FacebookIcon,
  GoogleIcon,
  KakaoIcon,
  NaverIcon,
} from '@components/icons';
import styled from '@emotion/native';
import React, {ReactNode} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

const Container = styled.View`
  flex: 1;
  align-items: center;

  background: #fff;
  position: relative;
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 110px;
  padding-top: 120px;
  gap: 120px 0;
`;

const styles = StyleSheet.create({
  title: {
    color: '#000',
    fontSize: 22,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 32.12,
    letterSpacing: -1.76,
  },

  buttonList: {
    rowGap: 15,
    width: '100%',
  },
});

const btnStyles = StyleSheet.create({
  common: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    columnGap: 20,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  naver: {
    backgroundColor: '#03C75A',
    borderColor: '#03C75A',
  },
  kakao: {
    backgroundColor: '#FFEA0F',
    borderColor: '#FFEA0F',
  },
  facebook: {
    backgroundColor: '#1877F2',
    borderColor: '#1877F2',
  },
  google: {
    backgroundColor: '#fff',
    borderColor: '#000',
  },
  apple: {
    backgroundColor: '#000',
    borderColor: '#000',
  },
});

const btnIconStyles = StyleSheet.create({
  common: {
    borderColor: '#fff',
    borderStyle: 'solid',
    borderRightWidth: 1,
  },
  naver: {},
  kakao: {},
  facebook: {},
  google: {
    borderColor: '#bbb',
  },
  apple: {},
});

const btnTextStyles = StyleSheet.create({
  common: {
    color: '#fff',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  naver: {},
  kakao: {
    color: '#3C1E1E',
  },
  facebook: {},
  google: {
    color: '#000',
  },
  apple: {},
});

interface SocialButton {
  id: 'naver' | 'kakao' | 'facebook' | 'google' | 'apple';
  name: string;
  icon: ReactNode;
}
const socialButtons: SocialButton[] = [
  {
    id: 'naver',
    name: '네이버 로그인',
    icon: <NaverIcon width={50} height={50} />,
  },
  {
    id: 'kakao',
    name: '카카오 로그인',
    icon: <KakaoIcon width={50} height={50} />,
  },
  {
    id: 'facebook',
    name: '페이스북 로그인',
    icon: <FacebookIcon width={50} height={50} />,
  },
  {
    id: 'google',
    name: '구글 로그인',
    icon: <GoogleIcon width={50} height={50} />,
  },
  {
    id: 'apple',
    name: '애플 로그인',
    icon: <AppleIcon width={50} height={50} />,
  },
];

const LoginScreen = () => {
  const getIconColor = (btnType: SocialButton['id']) => {
    switch (btnType) {
      case 'kakao':
        return '#3C1E1E';
      case 'google':
        return '#000';
      default:
        return '#fff';
    }
  };
  return (
    <Container>
      <View
        style={{
          width: '100%',
        }}
      >
        <Text style={{...styles.title, fontWeight: '400'}}>환영합니다</Text>
        <Text style={styles.title}>원하는 방법으로 로그인하세요</Text>
      </View>
      <View style={styles.buttonList}>
        {socialButtons.map((data) => (
          <TouchableOpacity
            key={data.id}
            onPress={() => {
              alert(data.name + 'click');
            }}
            activeOpacity={0.8}
          >
            <View style={{...btnStyles.common, ...btnStyles[data.id]}}>
              <View
                style={{
                  ...btnIconStyles.common,
                  ...btnIconStyles[data.id],
                }}
              >
                {data.icon}
              </View>
              <Text
                style={{
                  ...btnTextStyles.common,
                  ...btnTextStyles[data.id],
                }}
              >
                {data.name}
              </Text>
              <View
                style={{
                  position: 'absolute',
                  right: 10,
                }}
              >
                <ArrowRightIosIcon
                  width={20}
                  height={20}
                  color={getIconColor(data.id)}
                />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          alert('가입 계정 찾기');
        }}
        style={{
          position: 'absolute',
          bottom: 60,
        }}
      >
        <Text>가입 계정 찾기</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default LoginScreen;
