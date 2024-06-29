import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

export default function App() {
  const webviewRef = React.useRef(null);

  const onMessage = (event) => {
    const message = event.nativeEvent.data;
    if (message === 'triggerHapticFeedback') {
      ReactNativeHapticFeedback.trigger("impactMedium", {
        enableVibrateFallback: true,
        ignoreAndroidSystemSettings: false
      });
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaTop} />
      <View style={styles.webViewContainer}>
        <WebView
          ref={webviewRef}
          source={{ uri: 'https://stirredtogether.web.app' }}
          style={{ flex: 1 }}
          mediaPlaybackRequiresUserAction={false}
          allowsInlineMediaPlayback={true}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
          allowFileAccess={true}
          allowsFullscreenVideo={true}
          originWhitelist={['*']}
          allowFileAccessFromFileURLs={true}
          allowUniversalAccessFromFileURLs={true}
          mixedContentMode="always"
          onMessage={onMessage}
        />
      </View>
      <SafeAreaView style={styles.safeAreaBottom} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeAreaTop: {
    backgroundColor: '#fff3f3',
  },
  webViewContainer: {
    flex: 1,
  },
  safeAreaBottom: {
    backgroundColor: '#ffffff',
  },
});
