import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { navigatorOptions } from "./navigatorOptions";
import { AboutScreen } from "../screens/AboutScreen";
import { CreateScreen } from "../screens/CreateScreen";

const AboutNavigator = createStackNavigator();

export const AboutNavigation = () => {
  return (
    <AboutNavigator.Navigator
      screenOptions={{
        ...navigatorOptions.defaultNavigationOptions,
        // headerShown: false,
      }}
    >
      <AboutNavigator.Screen
        name="About"
        component={AboutScreen}
        options={({ navigation }) => ({
          headerTitle: "О приложении",
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
              <Item
                title="Toggle Drawer"
                iconName="ios-menu"
                onPress={() => {
                  navigation.toggleDrawer();
                }}
              />
            </HeaderButtons>
          ),
        })}
      />
    </AboutNavigator.Navigator>
  );
};

const CreateNavigator = createStackNavigator();

export const CreateNavigation = () => {
  return (
    <CreateNavigator.Navigator
      screenOptions={{
        ...navigatorOptions.defaultNavigationOptions,
        // headerShown: false,
      }}
    >
      <CreateNavigator.Screen
        name="Create"
        component={CreateScreen}
        options={({ navigation }) => ({
          headerTitle: "Создать пост",
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
              <Item
                title="Toggle Drawer"
                iconName="ios-menu"
                onPress={() => {
                  navigation.toggleDrawer();
                }}
              />
            </HeaderButtons>
          ),
        })}
      />
    </CreateNavigator.Navigator>
  );
};
