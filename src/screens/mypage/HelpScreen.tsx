import KakaoHelpButton from '@components/_atoms/KakaoHelpButton';
import {MyPageStackParamList} from '@components/_organisms/mypage/MyPageNavigation';
import {KakaoIcon} from '@components/icons';
import styled from '@emotion/native';
import {StackScreenProps} from '@react-navigation/stack';
import React, {FC} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
const cardimg = require('../../../assets/images/help/phone-card.jpg');

type Props = StackScreenProps<MyPageStackParamList, 'help'>;

const Container = styled.ScrollView`
  display: flex;
  flex: 1;
  padding: 45px 20px 0 20px;
  background: #fff;
`;

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
    color: '#000',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 24.5,
    letterSpacing: -1.36,
  },
  imgWrap: {
    width: '100%',
    marginTop: 24,
  },
  cardImg: {
    width: '100%',
    height: 'auto',
    objectFit: 'contain',
    aspectRatio: '67 / 32.5',
  },
  kakaoHelp: {
    width: '100%',
    marginTop: 40,
  },
  oneOnOneHelp: {
    width: '100%',
    marginTop: 30,
  },
  helpBtn: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  helpBtnText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },
});

const HelpLabel = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: #000;
`;

const HelpScreen: FC<Props> = ({navigation, route}) => {
  return (
    <Container>
      <View style={{width: '100%'}}>
        <Text style={{...styles.title, fontWeight: '400'}}>
          문의 하실 사항이 있다면
        </Text>
        <Text style={styles.title}>전화문의 혹은 1:1 문의를 작성해 주세요</Text>
      </View>
      <View style={styles.imgWrap}>
        <Image source={cardimg} style={styles.cardImg} />
      </View>

      <View style={styles.kakaoHelp}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <HelpLabel>카카오톡 문의</HelpLabel>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              color: '#555',
            }}
          >
            오전 7시 ~ 오후 7시
          </Text>
        </View>
        <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
          <KakaoHelpButton />
        </TouchableOpacity>
      </View>

      <View style={styles.oneOnOneHelp}>
        <HelpLabel>궁금한 점이 있으시면 1:1문의에 남겨주세요.</HelpLabel>
        <View style={{marginTop: 10, rowGap: 15}}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate('csAskCreate');
            }}
          >
            <View style={{...styles.helpBtn, backgroundColor: '#000'}}>
              <Text style={styles.helpBtnText}>1:1 문의 작성</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate('csAskList');
            }}
          >
            <View style={{...styles.helpBtn, backgroundColor: '#fff'}}>
              <Text style={{...styles.helpBtnText, color: '#000'}}>
                나의 1:1 문의 / 답변 확인
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
            <View style={{...styles.helpBtn, backgroundColor: '#fff'}}>
              <Text style={{...styles.helpBtnText, color: '#000'}}>
                자주하는 질문 보기
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default HelpScreen;
