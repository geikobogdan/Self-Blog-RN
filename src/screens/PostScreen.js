import React, { useCallback, useEffect } from "react";
import { LogBox } from "react-native";
import {
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { removePost, toggleBooked } from "../store/actions/post";
import { THEME } from "../theme";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

export const PostScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { postId } = route.params;
  const booked = useSelector(({ post }) =>
    post.bookedPosts.some((post) => post.id === postId)
  );
  const post = useSelector(({ post }) =>
    post.allPosts.find((post) => post.id === postId)
  );

  const toggleHandler = useCallback(() => {
    dispatch(toggleBooked(post));
  }, [post, dispatch]);

  useEffect(() => {
  //   post &&
    navigation.setParams({ toggleHandler, booked });
  }, [toggleHandler, booked, post]);

  const removeHandler = () => {
    Alert.alert("Удаление поста", "Вы точно хотите удалить пост?", [
      {
        text: "Отменить",
        style: "cancel",
      },
      {
        text: "Удалить",
        style: "destructive",
        onPress() {
          navigation.navigate("Main");
          dispatch(removePost(postId));
        },
      },
    ]);
  };

  if (!post) {
    return null;
  }
  return (
    <ScrollView>
      <Image source={{ uri: post.img }} style={styles.image} />
      <View style={styles.textWrap}>
        <Text style={styles.title}>{post.text}</Text>
      </View>
      <Button
        title="Удалить"
        color={THEME.DANGER_COLOR}
        onPress={removeHandler}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  textWrap: {
    padding: 10,
  },
  title: {
    fontFamily: "open-regular",
  },
});
