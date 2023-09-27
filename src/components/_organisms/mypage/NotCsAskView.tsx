import KakaoHelpButton from '@components/_atoms/KakaoHelpButton';
import styled from '@emotion/native';
import {CsAskListScreenProps} from '@screens/mypage/CsAskListScreen';
import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

const Container = styled.View`
  width: 100%;
  height: 100%;
  padding-right: 20px;
  padding-left: 20px;
  position: relative;
  align-items: center;
  padding-top: 230px;
`;

const styles = StyleSheet.create({
  title: {
    color: '#000',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 27.6,
    marginBottom: 10,
  },
  notice: {color: '#555', fontSize: 15, fontWeight: '400'},
  btnWrap: {
    position: 'absolute',
    bottom: 20,
    rowGap: 15,
    width: '100%',
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

const NotCsAskView: FC<CsAskListScreenProps> = ({navigation, route}) => {
  return (
    <Container>
      <Text style={styles.title}>상품문의 내역이 없어요</Text>
      <Text style={styles.notice}>
        일부 상품의 상세페이지 {`>`} 문의하기 탭에서
      </Text>
      <Text style={styles.notice}>상품의 궁금한 점에 대해 문의하거나</Text>
      <Text style={styles.notice}>
        구매상품 내역, 1:1 문의 작성을 등록해주세요
      </Text>

      <View style={styles.btnWrap}>
        <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
          <KakaoHelpButton />
        </TouchableOpacity>

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
      </View>
    </Container>
  );
};

export default NotCsAskView;
