import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainNavigation } from "./DrawerNavigator";



export const AppNavigation = () => (
  <NavigationContainer>
    <MainNavigation />
  </NavigationContainer>
);
