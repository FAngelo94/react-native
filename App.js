import React, { useRef, useEffect } from "react";
import { WebView } from 'react-native-webview';
import { StyleSheet, View, StatusBar, BackHandler, Platform } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';

export default function App() {
  const webViewRef = useRef(null);
  const onAndroidBackPress = () => {
    if (webViewRef.current) {
      webViewRef.current.goBack();
      return true; // prevent default behavior (exit app)
    }
    return false;
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', onAndroidBackPress);
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', onAndroidBackPress);
      };
    }
  }, []);


  NavigationBar.setVisibilityAsync("hidden");


  // HIDE ANDROID NAVIGATION BAR
  useEffect(() => {
    const hideNavBar = () => {
      if (Platform.OS === 'android') {
        StatusBar.setHidden(true);

      }
    }
    hideNavBar();
    // webViewRef.current.clearCache(true);
    // webViewRef.current.reload();
  }, []);

  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: 'https://climberworld.web.app/'
        }}
        ref={webViewRef}
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