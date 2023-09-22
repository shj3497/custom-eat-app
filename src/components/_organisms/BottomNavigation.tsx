import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  HomeIcon,
  MagazineIcon,
  MyPageIcon,
  ReviewIcon,
  SearchIcon,
} from '@components/icons';
import Home from '@screens/Home';
import Magazine from '@screens/Magazine';
import Review from '@screens/Review';
import Search from '@screens/Search';
import MyPage from '@screens/mypage/MyPageScreen';
import MyPageNavigation from './mypage/MyPageNavigation';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          title: '홈',
          tabBarIcon: ({size, focused}) => (
            <HomeIcon width={size} height={size} selected={focused} />
          ),
        }}
      />

      <Tab.Screen
        name="magazine"
        component={Magazine}
        options={{
          title: '매거진',
          tabBarIcon: ({size, focused}) => (
            <MagazineIcon width={size} height={size} selected={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="review"
        component={Review}
        options={{
          title: '리뷰',
          tabBarIcon: ({size, focused}) => (
            <ReviewIcon width={size} height={size} selected={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="search"
        component={Search}
        options={{
          title: '검색',
          tabBarIcon: ({size, focused}) => (
            <SearchIcon width={size} height={size} selected={focused} />
          ),
        }}
      />

      <Tab.Screen
        name="mypage"
        component={MyPageNavigation}
        options={{
          title: '마이페이지',
          tabBarIcon: ({size, focused}) => (
            <MyPageIcon width={size} height={size} selected={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
