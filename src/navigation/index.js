import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthStack from "./AuthStack";
import TabStack from "./TabStack";

import { AuthContext } from "../context/AuthContext";

export default function () {
  const { token } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {token ? <TabStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
