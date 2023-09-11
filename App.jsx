import {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {GlobalContextProvider} from './src/contexts';
import Statusbar from './src/components/others/Statusbar';
import HomeBottomTab from './src/navigators/tabs/HomeBottomTab';
import Splash from './src/screens/Splash';
import AppStyles from './AppStyles';

// Functional component
const App = () => {
  // Local states
  const [isStarting, setIsStarting] = useState(true);

  // Hooks
  useEffect(() => {
    // Updating state value after 2500 milliseconds(2.5 seconds) of delay.
    setTimeout(() => {
      // Updating states
      setIsStarting(false);
    }, 2500);
  }, []);

  // Checking
  if (isStarting) {
    // Returning
    return <Splash />;
  }

  // Returning
  return (
    <GlobalContextProvider>
      <NavigationContainer>
        <Statusbar backgroundColor="#000000" barStyle="light-content" />
        <SafeAreaView style={AppStyles.safeAreaView}>
          <HomeBottomTab />
        </SafeAreaView>
      </NavigationContainer>
    </GlobalContextProvider>
  );
};

// Exporting
export default App;
