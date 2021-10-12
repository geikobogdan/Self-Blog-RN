import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const AboutScreen = () => {
  return (
    <View style={styles.center}>
      <Text>Это лучшее приложение для личных заметок.</Text>
      <Text>
        Версия приложения <Text style={styles.version}>1.0.0</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  version: {
    fontFamily: "open-bold",
  },
});
