import React, { useRef, useEffect } from "react";
import { WebView } from 'react-native-webview';
import { StyleSheet, View,StatusBar } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';

export default function App() {
  /* const webViewRef = useRef(null)

  // Add listener for back button to go back in webview
  const backAction = () => {
    if (webViewRef.current) {
      webViewRef.current.goBack();
    }
  }

    BackHandler.addEventListener("hardwareBackPress", backAction);

 */
    // const visibility = NavigationBar.useVisibility()
    NavigationBar.setVisibilityAsync("hidden");


    // HIDE ANDROID NAVIGATION BAR
    useEffect(() => {
      const hideNavBar = () => {
        if (Platform.OS === 'android') {
          StatusBar.setHidden(true);
          
        }
      }
      hideNavBar();
    }, []);

  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: 'https://pwa-offline-243d1.web.app/'
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
});