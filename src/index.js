
import React, {Component} from 'react';
import Routes from './routes';
import {Platform, StyleSheet, Text, View} from 'react-native';
import OneSignal from 'react-native-onesignal'; // Import package from node modules


export default class App extends Component {

  constructor(properties) {
    super(properties);
    OneSignal.init("6663c844-ca1c-4ca6-87d9-36d07f5cda6e");

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    console.log("Notification received: ", notification);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onIds(device) {
    console.log('Device info: ', device);
  }

  render() {
    return (
        <Routes />
    )
  }
}
