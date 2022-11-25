import React from 'react';
import Navigation from './src/navigation';

import {AuthProvider} from './src/context/AuthContext';
import { Provider as PaperProvider } from 'react-native-paper';

const App = () => {

  return (
    <AuthProvider>
      <PaperProvider>
        <Navigation/>
      </PaperProvider>
    </AuthProvider>
  )
};

export default App;