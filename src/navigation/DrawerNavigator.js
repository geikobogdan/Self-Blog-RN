import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { BottomNavigation } from "./BottomNavigator";
import { navigatorOptions } from "./navigatorOptions";
import { AboutNavigation, CreateNavigation } from "./othersScreensNavigator";
import { THEME } from "../theme";

const MainNavigator = createDrawerNavigator();

export const MainNavigation = () => {
  return (
    <MainNavigator.Navigator
      screenOptions={{
        headerShown: false,
        ...navigatorOptions.defaultNavigationOptions,
        drawerActiveTintColor: THEME.MAIN_COLOR,
        drawerLabelStyle: {
          fontFamily: "open-bold",
        },
      }}
    >
      <MainNavigator.Screen
        name="PostTabs"
        options={{
          title: "Главная",
          // drawerIcon: () => <Ionicons name="ios-star" />,
        }}
        component={BottomNavigation}
      />
      <MainNavigator.Screen
        name="AboutScreen"
        options={{
          title: "О приложенни",
        }}
        component={AboutNavigation}
      />
      <MainNavigator.Screen
        name="CreateScreen"
        options={{
          title: "Новый пост",
        }}
        component={CreateNavigation}
      />
    </MainNavigator.Navigator>
  );
};
