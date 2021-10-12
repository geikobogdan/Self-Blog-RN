import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Camera } from "expo-camera";
import { Alert, Button, Image, StyleSheet, View } from "react-native";

async function askPermissions() {
  const { status } = await Camera.requestPermissionsAsync();
  if (status !== "granted") {
    Alert.alert("Ошибка", "Вы не дали прав на создание фото");
    return false;
  }
  return true;
}

export const PhotoPicker = ({ onPick }) => {
  const [image, setImage] = useState(null);
  const takePhoto = async () => {
    const hasPermissions = await askPermissions();
    if (!hasPermissions) {
      return;
    }
    // launchCameraAsync
    //launchImageLibraryAsync
    const img = await ImagePicker.launchCameraAsync({
      quality: 0.7,
      allowsEditing: false,
      aspect: [16, 9],
    });
    if (!img.cancelled) {
      setImage(img.uri);
      onPick(img.uri);
    }
  };
  return (
    <View style={styles.wrapper}>
      <Button title="Сделать фото" onPress={takePhoto} />
      {image && <Image style={styles.image} source={{ uri: image }} />}
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10,
    padding: 10,
  },
  image: {
    width: "100%",
    height: 200,
    marginTop: 10,
  },
});
