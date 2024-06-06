import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaTop} />
      <View style={styles.webViewContainer}>
        <WebView
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
        />
      </View>
      <SafeAreaView style={styles.safeAreaBottom} />
    </View>
  );
}

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
