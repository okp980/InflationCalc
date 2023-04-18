import {Alert, Button, Text, View} from 'react-native';
import React, {Component} from 'react';
import Crashes from 'appcenter-crashes';
import Analytics from 'appcenter-analytics';

export class App extends Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.checkPreviousSession();
  }
  async checkPreviousSession() {
    const didCrash = await Crashes.hasCrashedInLastSession();

    if (didCrash) {
      Alert.alert(
        'Previous Session',
        'Sorry about that crash in previous session',
      );
    }
  }
  render() {
    return (
      <View>
        <Button
          title="click"
          onPress={() => Analytics.trackEvent('Clicked event')}
        />
      </View>
    );
  }
}

export default App;
