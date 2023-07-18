import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {View, StatusBar} from 'react-native';

import WebView from 'react-native-webview';

const App = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1}}>
      <WebView source={{uri: 'https://vin-nft.netlify.app/'}} />
    </View>
  );
};

export default App;
