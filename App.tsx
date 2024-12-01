import {NavigationContainer} from '@react-navigation/native';
import {QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaView} from 'react-native';
import {queryClient} from './src/services/tanstack/queryClient';
import {MainStack} from './src/stacks/Main';

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <SafeAreaView style={{flex: 1}}>
          <MainStack />
        </SafeAreaView>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
