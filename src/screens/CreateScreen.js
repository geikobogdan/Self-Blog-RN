import React, { useState, useRef } from "react";
import {
  Button,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { PhotoPicker } from "../components/PhotoPicker";
import { addPost } from "../store/actions/post";
import { THEME } from "../theme";

export const CreateScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const imgRef = useRef();
  const saveHandler = () => {
    const post = {
      text,
      img: imgRef.current,
      date: new Date().toJSON(),
      booked: false,
    };
    dispatch(addPost(post));
    navigation.navigate("Main");
    setText("");
    imgRef.current = "";
  };
  const photoPickHandler = (uri) => {
    imgRef.current = uri;
  };
  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Создай новый пост</Text>
          <TextInput
            value={text}
            onChangeText={setText}
            style={styles.textarea}
            placeholder="Введите текст..."
            multiline
          />
        </View>
      </TouchableWithoutFeedback>
      <PhotoPicker onPick={photoPickHandler} />
      <Button
        title="Cоздать пост"
        color={THEME.MAIN_COLOR}
        onPress={saveHandler}
        disabled={!text}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "open-regular",
    marginVertical: 10,
  },
  textarea: {
    padding: 10,
    marginBottom: 10,
  },
});
