import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import BottomNavigation from './BottomNavigation';
import LoginScreen from '@screens/LoginScreen';

export type PageKey =
  | 'main'
  | 'login'
  | 'deliveryInfo'
  | 'default'
  | 'introduction'
  | 'notice'
  | 'faq'
  | 'inquiry';

type RootParamKey = Extract<PageKey, 'main' | 'login'>;
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
            headerShown: false,
          }}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigation;
