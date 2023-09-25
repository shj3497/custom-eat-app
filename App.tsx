import {ThemeProvider} from '@emotion/react';
import BottomNavigation from '@components/_organisms/BottomNavigation';
import {View} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import RootNavigation from '@components/_organisms/RootNavigation';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

const App = () => {
  return (
    <PaperProvider>
      <ThemeProvider theme={{}}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </ThemeProvider>
    </PaperProvider>
  );
};

export default App;
