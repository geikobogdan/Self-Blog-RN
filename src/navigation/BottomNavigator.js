import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PostNavigation } from "./PostNavigator";
import { BookedNavigation } from "./BookedNavigator";
import { Ionicons } from "@expo/vector-icons";
import { THEME } from "../theme";
import { Platform } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const BottomNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

const BottomTabsConfig = () => (
  <BottomNavigator.Navigator
    shifting={true}
    barStyle={{
      backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
    }}
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor:
        Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
    }}
  >
    <BottomNavigator.Screen
      name="Posts"
      component={PostNavigation}
      options={{
        //  title: "",
        tabBarLabel: "Все",
        tabBarIcon: (info) => (
          <Ionicons name="ios-albums" size={25} color={info.color} />
        ),
      }}
    />
    <BottomNavigator.Screen
      name="Booked"
      component={BookedNavigation}
      options={() => ({
        tabBarLabel: "Избранное",
        tabBarIcon: (info) => (
          <Ionicons name="ios-star" size={25} color={info.color} />
        ),
      })}
    />
  </BottomNavigator.Navigator>
);

export const BottomNavigation = () => {
  return <BottomTabsConfig />;
};
