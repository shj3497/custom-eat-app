import {MyPageStackParamList} from '@components/_organisms/mypage/MyPageNavigation';
import AskNoticeDialog from '@components/_organisms/mypage/AskNoticeDialog';
import styled from '@emotion/native';
import {StackScreenProps} from '@react-navigation/stack';
import React, {FC, useEffect, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {StyleSheet, Text, View} from 'react-native';
import InputImages from '@components/_molecules/InputImages';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {TouchableOpacity} from 'react-native-gesture-handler';

type Props = StackScreenProps<MyPageStackParamList, 'csAskCreate'>;

const Container = styled(KeyboardAwareScrollView)`
  flex: 1;
  background: #fff;
`;

const Inner = styled.View`
  display: flex;
  flex: 1;
  padding: 45px 20px 0 20px;
`;

const InputLabel = styled.View``;

const TextField = styled.TextInput`
  border-width: 0.5px;
  border-style: solid;
  border-color: #ccc;
  /* height: 40px; */
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
  padding-left: 10px;
  font-size: 13px;
  color: #555;
  font-weight: 400;
`;

const TextArea = styled.TextInput`
  min-height: 115px;
  border-width: 0.5px;
  border-style: solid;
  border-color: #ccc;
  /* height: 40px; */
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
  padding-left: 10px;
  font-size: 13px;
  color: #555;
  font-weight: 400;

  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const ImgsWrap = styled.View`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const styles = StyleSheet.create({
  labelText: {
    color: '#000',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '700',
    marginBottom: 10,
  },
  noticeText: {
    color: '#999',
    fontSize: 11,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20.9,
  },
  submitBtn: {
    backgroundColor: '#000',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginTop: 20,
  },
  submitBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});

const CsAskCreateScreen: FC<Props> = ({navigation, route}) => {
  const [open, setOpen] = useState<boolean>(false);
  const {
    control,
    register,
    handleSubmit,
    setValue,
    reset,
    getFieldState,
    formState: {errors},
  } = useForm({
    defaultValues: {
      csType: '',
      title: '',
      content: '',
      images: [''],
      phone: '',
    },
  });
  const onClose = () => {
    setOpen(false);
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpen(true);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <Container>
      <Inner>
        <InputLabel>
          <Text style={styles.labelText}>문의유형</Text>
          <Controller
            control={control}
            name="csType"
            rules={{required: true}}
            render={({field: {onChange, onBlur, value}}) => (
              <TextField
                placeholder="유형을 선택해주세요"
                value={value}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
              />
            )}
          />
        </InputLabel>

        <InputLabel style={{marginTop: 20}}>
          <Text style={styles.labelText}>문의내용</Text>
          <Controller
            control={control}
            name="title"
            rules={{required: true}}
            render={({field: {onChange, onBlur, value}}) => (
              <TextField
                placeholder="제목을 입력해주세요"
                value={value}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
              />
            )}
          />
          <Controller
            control={control}
            name="content"
            render={({field: {onChange, onBlur, value}}) => (
              <TextArea
                placeholder="ex) 배송되는 날에 집에없는데 신선식품이라 배송 후 잠시 실온에 있으면  물품 상태는 괜찮을까요?"
                value={value}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                multiline
              />
            )}
          />
        </InputLabel>

        <View>
          <ImgsWrap>
            <InputImages
              onChange={(images) => {
                setValue('images', images);
              }}
            />
          </ImgsWrap>
          <View>
            <Text style={styles.noticeText}>
              * 30MB 이하의 이미지만 업로드 가능합니다.
            </Text>
            <Text style={styles.noticeText}>
              * 상품과 무관한 내용이거나 음란 및 불법적인 내용은 통보없이 삭제
              될 수 있습니다.
            </Text>
            <Text style={styles.noticeText}>
              * 사진은 최대 8장 까지 등록 가능합니다.
            </Text>
          </View>
        </View>

        <InputLabel style={{marginTop: 20}}>
          <Text style={styles.labelText}>휴대폰</Text>
          <Controller
            control={control}
            name="phone"
            rules={{required: true}}
            render={({field: {onChange, onBlur, value}}) => (
              <TextField
                keyboardType="number-pad"
                placeholder="010-1234-5678"
                value={value}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
              />
            )}
          />
        </InputLabel>

        <View>
          <Text style={styles.noticeText}>
            * 야간에도 답변 완료 알림톡이 발송 되는 점 참고 부탁드립니다.
          </Text>
        </View>

        <TouchableOpacity activeOpacity={0.8} onPress={handleSubmit(onSubmit)}>
          <View style={styles.submitBtn}>
            <Text style={styles.submitBtnText}>등록하기</Text>
          </View>
        </TouchableOpacity>

        <AskNoticeDialog open={open} onClose={onClose} />
      </Inner>
    </Container>
  );
};

export default CsAskCreateScreen;
