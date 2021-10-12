import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { PostScreen } from "../screens/PostScreen";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { BookedScreen } from "../screens/BookedScreen";
import { navigatorOptions } from "./navigatorOptions";

const BookedNavigator = createStackNavigator();

export const BookedNavigation = () => {
  return (
    <BookedNavigator.Navigator
      screenOptions={{
        ...navigatorOptions.defaultNavigationOptions,
      }}
    >
      <BookedNavigator.Screen
        name="Book"
        component={BookedScreen}
        options={({ navigation }) => ({
          title: "Избранное",
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
      <BookedNavigator.Screen
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
    </BookedNavigator.Navigator>
  );
};
