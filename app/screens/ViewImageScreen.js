import React from "react";
import { View, Image, StyleSheet, Button } from "react-native";

//====================================
import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon} />
      <View style={styles.doneIcon} />

      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  closeIcon: {
    width: 40,
    height: 40,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 20,
    left: 20,
  },
  doneIcon: {
    width: 40,
    height: 40,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 20,
    right: 20,
  },
});

export default ViewImageScreen;
