import AppLoading from "expo-app-loading";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { PostList } from "../components/PostList";
import { loadPosts } from "../store/actions/post";
import { THEME } from "../theme";

export const MainScreen = ({ navigation }) => {
  const openPostHandler = (post) => {
    navigation.navigate("Post", {
      postId: post.id,
      date: post.date,
      booked: post.booked,
    });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);
  const allPosts = useSelector(({ post }) => post.allPosts);
  const loading = useSelector(({ post }) => post.loading);
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator color={THEME.MAIN_COLOR} />
      </View>
    );
  }
  return <PostList data={allPosts} onOpen={openPostHandler} />;
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
