import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import BottomNavigation from './BottomNavigation';
import LoginScreen from '@screens/LoginScreen';
import {ArrowRightIosIcon} from '@components/icons';

export type PageKey =
  | 'main'
  | 'login'
  | 'mypage'
  | 'deliveryInfo'
  | 'default'
  | 'introduction'
  | 'notice'
  | 'noticeDetail'
  | 'faq'
  | 'inquiry';

type RootParamKey = Extract<PageKey, 'main' | 'login' | 'home'>;
type RootStackParamList = Record<RootParamKey, undefined>;
type RootStackNavigation = StackNavigationProp<RootStackParamList>;

export type PageParamList = Record<PageKey, undefined>;
export type PageNavigation = StackNavigationProp<PageParamList>;

const RootStack = createStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  return (
    <RootStack.Navigator
      initialRouteName="main"
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Screen name="main" component={BottomNavigation} />

      <RootStack.Group screenOptions={{presentation: 'modal'}}>
        <RootStack.Screen
          name="login"
          component={LoginScreen}
          options={{
            headerShown: true,
            headerTitle: '로그인',
            headerBackTitleVisible: false,
          }}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigation;
