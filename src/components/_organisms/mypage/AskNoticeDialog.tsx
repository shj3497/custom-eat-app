import styled from '@emotion/native';
import askNoticeData from 'lib/contexts/mypage/askNoticeData';
import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  open: boolean;
  onClose: () => void;
}

const Dialog = styled.Modal`
  position: relative;
`;

const DialogBackdrop = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
`;

const DialogInner = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-left: 20px;
  padding-right: 20px;
`;

const DialogContent = styled.View`
  width: 100%;
  height: 70%;
  max-height: 500px;
  background-color: #fff;
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 25px;
  padding-bottom: 0;
  position: relative;
  align-items: center;
`;

const NoticeView = styled.View`
  width: 100%;
  padding-left: 10px;
  padding-right: 15px;
  row-gap: 20px;
`;

const CloseButton = styled.View`
  background-color: #000;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const styles = StyleSheet.create({
  title: {
    color: '#000',
    fontSize: 16,
    fontWeight: '700',
  },
  subTitle: {color: '#555', fontSize: 13, fontWeight: '700'},
  text: {
    color: '#555',
    fontSize: 12,
    fontWeight: '400',
    display: 'flex',
    flexWrap: 'wrap',
  },
});

const AskNoticeDialog: FC<Props> = ({open, onClose}) => {
  return (
    <Dialog visible={open} animationType="slide" transparent>
      <DialogBackdrop />
      <DialogInner>
        <DialogContent>
          <NoticeView>
            <Text style={styles.title}>1:1 문의 작성 전 확인해주세요!</Text>
            {askNoticeData.map((data, index) => (
              <View key={index} style={{rowGap: 10}}>
                <Text style={styles.subTitle}>{data.subTitle}</Text>
                {data.notices.map((notice, index) => (
                  <View
                    key={index}
                    style={{flexDirection: 'row', columnGap: 4}}
                  >
                    <Text style={styles.text}>-</Text>
                    <Text
                      style={{
                        ...styles.text,
                        ...(notice.color && {color: notice.color}),
                      }}
                    >
                      {notice.notice}
                    </Text>
                  </View>
                ))}
              </View>
            ))}
          </NoticeView>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={onClose}
            style={{position: 'absolute', bottom: 10, width: '100%'}}
          >
            <CloseButton>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: '700',
                }}
              >
                확인
              </Text>
            </CloseButton>
          </TouchableOpacity>
        </DialogContent>
      </DialogInner>
    </Dialog>
  );
};

export default AskNoticeDialog;
