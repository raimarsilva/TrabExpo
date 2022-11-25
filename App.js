import React from "react";
import Navigation from "./src/navigation";

import { AuthProvider } from "./src/context/AuthContext";
import {
  Provider as PaperProvider,
  MD3LightTheme as DefaultTheme,
} from "react-native-paper";

const theme = {
  ...DefaultTheme,
  colors: {
    primary: "rgb(0, 99, 155)",
    onPrimary: "rgb(255, 255, 255)",
    primaryContainer: "rgb(206, 229, 255)",
    onPrimaryContainer: "rgb(0, 29, 51)",
    secondary: "rgb(81, 96, 111)",
    onSecondary: "rgb(255, 255, 255)",
    secondaryContainer: "rgb(213, 228, 247)",
    onSecondaryContainer: "rgb(14, 29, 42)",
    tertiary: "rgb(104, 88, 122)",
    onTertiary: "rgb(255, 255, 255)",
    tertiaryContainer: "rgb(239, 219, 255)",
    onTertiaryContainer: "rgb(35, 21, 51)",
    error: "rgb(186, 26, 26)",
    onError: "rgb(255, 255, 255)",
    errorContainer: "rgb(255, 218, 214)",
    onErrorContainer: "rgb(65, 0, 2)",
    background: "rgb(252, 252, 255)",
    onBackground: "rgb(26, 28, 30)",
    surface: "rgb(252, 252, 255)",
    onSurface: "rgb(26, 28, 30)",
    surfaceVariant: "rgb(222, 227, 235)",
    onSurfaceVariant: "rgb(66, 71, 78)",
    outline: "rgb(114, 119, 127)",
    outlineVariant: "rgb(194, 199, 207)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(47, 48, 51)",
    inverseOnSurface: "rgb(241, 240, 244)",
    inversePrimary: "rgb(151, 203, 255)",
    elevation: {
      level0: "transparent",
      level1: "rgb(239, 244, 250)",
      level2: "rgb(232, 240, 247)",
      level3: "rgb(224, 235, 244)",
      level4: "rgb(222, 234, 243)",
      level5: "rgb(217, 231, 241)",
    },
    surfaceDisabled: "rgba(26, 28, 30, 0.12)",
    onSurfaceDisabled: "rgba(26, 28, 30, 0.38)",
    backdrop: "rgba(44, 49, 55, 0.4)",
  },
};

const App = () => {
  return (
    <AuthProvider>
      <PaperProvider theme={theme}>
        <Navigation />
      </PaperProvider>
    </AuthProvider>
  );
};

export default App;
