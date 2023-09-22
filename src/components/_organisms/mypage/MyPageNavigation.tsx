import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import DeliveryInfoScreen from '@screens/mypage/DeliveryInfoScreen';
import FaqScreen from '@screens/mypage/FaqScreen';
import InquiryScreen from '@screens/mypage/InquiryScreen';
import IntroductionScreen from '@screens/mypage/IntroductionScreen';
import MyPageScreen from '@screens/mypage/MyPageScreen';
import NoticeScreen from '@screens/mypage/NoticeScreen';
import React from 'react';
import {PageKey} from '../RootNavigation';

export type MyPageStackParamKey = Extract<
  PageKey,
  'deliveryInfo' | 'default' | 'introduction' | 'notice' | 'faq' | 'inquiry'
>;

export type MyPageStackParamList = Record<MyPageStackParamKey, undefined>;

export type MyPageStackNavigation = StackNavigationProp<MyPageStackParamList>;

const Stack = createStackNavigator<MyPageStackParamList>();

const MyPageNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="default"
      screenOptions={{
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="default"
        component={MyPageScreen}
        options={{
          headerTitle: '마이페이지',
        }}
      />
      <Stack.Screen
        name="deliveryInfo"
        component={DeliveryInfoScreen}
        options={{
          headerTitle: '배송안내',
        }}
      />
      <Stack.Screen
        name="introduction"
        component={IntroductionScreen}
        options={{
          headerTitle: '커스텀잇 소개',
        }}
      />
      <Stack.Screen
        name="notice"
        component={NoticeScreen}
        options={{
          headerTitle: '공지사항',
        }}
      />
      <Stack.Screen
        name="faq"
        component={FaqScreen}
        options={{
          headerTitle: '자주하는 질문',
        }}
      />
      <Stack.Screen
        name="inquiry"
        component={InquiryScreen}
        options={{
          headerTitle: '상품문의',
        }}
      />
    </Stack.Navigator>
  );
};

export default MyPageNavigation;
