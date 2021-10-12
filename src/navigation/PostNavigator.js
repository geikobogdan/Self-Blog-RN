import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { navigatorOptions } from "./navigatorOptions";

const PostNavigator = createStackNavigator();

export const PostNavigation = () => {
  return (
    <PostNavigator.Navigator
      screenOptions={{
        ...navigatorOptions.defaultNavigationOptions,
      }}
    >
      <PostNavigator.Screen
        name="Main"
        component={MainScreen}
        options={({ navigation }) => ({
          title: "Мой блог",
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
              <Item
                title="Take photo"
                iconName="ios-camera"
                onPress={() => {
                  navigation.navigate("CreateScreen");
                }}
              />
            </HeaderButtons>
          ),
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
      <PostNavigator.Screen
        name="Post"
        component={PostScreen}
        options={({ route }) => ({
          title: `Пост от ${new Date(route.params.date).toLocaleDateString()}`,
          headerRight: () => {
            const iconName = route.params.booked
              ? "ios-star"
              : "ios-star-outline";
            return (
              <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item
                  title="Booked"
                  iconName={iconName}
                  onPress={() => {
                    route.params.toggleHandler(route.params.postId);
                  }}
                />
              </HeaderButtons>
            );
          },
        })}
      />
    </PostNavigator.Navigator>
  );
};
