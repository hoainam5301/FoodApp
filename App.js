import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { colors } from "./src/global/styles";
import Header from "./src/components/Header";
import { Colors } from "react-native/Libraries/NewAppScreen";
import SignInScreen from "./src/screens/authScreens/signInScreens";
import WelcomeScreen from "./src/screens/authScreens/welcomeScreens";
import RootNavigator from "./src/navigator/rootNavigator";

export default function App(){
  return(
    <View style={styles.container} >
      <StatusBar
        barStyle="light-content"
        backgroundColor= {colors.statusbar}
      />
      <RootNavigator/>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{flex:1}
})