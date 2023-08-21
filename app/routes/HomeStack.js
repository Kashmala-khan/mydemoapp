import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import WelcomeScreen from "../screens/WelcomeScreen";
import ViewImageScreen from "../screens/ViewImageScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const screens = {
  welcome: {
    screen: WelcomeScreen,
  },

  viewImage: {
    screen: ViewImageScreen,
  },
  login: {
    screen: LoginScreen,
  },
  register: {
    screen: RegisterScreen,
  },
};
const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);
