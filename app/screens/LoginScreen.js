import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  Text,
  Button,
  TextInput,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//=============================
import colors from "../config/colors";

function LoginScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Login</Text>

        <View style={styles.emailContainer}>
          <Text style={styles.titles}>Username</Text>
          <TextInput
            style={styles.email}
            placeholder="Type Your Username"
          ></TextInput>
        </View>

        <View style={styles.emailContainer}>
          <Text style={styles.titles}>Password</Text>
          <TextInput
            style={styles.email}
            placeholder="Type Your Password"
          ></TextInput>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    top: 100,
    left: 20,
    right: 20,
  },
  header: {
    fontSize: 20,
    width: "100%",
    textAlign: "center",
  },
  emailContainer: {
    width: "90%",
    height: 100,
    top: 20,
  },
  titles: {
    fontSize: 13,
    height: 40,
    textAlignVertical: "center",
  },
  email: {
    fontSize: 15,
    height: 40,
    backgroundColor: colors.white,
  },
});
export default LoginScreen;
