import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, Jost_400Regular, Jost_600SemiBold  } from '@expo-google-fonts/jost';


import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Routes from './src/Routes'
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [fonstsLoader] = useFonts({
    Jost_400Regular, 
    Jost_600SemiBold
  });

  if(!fonstsLoader){
      return <AppLoading />;
    }

    return (
        <ThemeProvider theme={theme}> 
            <StatusBar style="dark"/>   
            <Routes />      
        </ThemeProvider>
    )
}
  