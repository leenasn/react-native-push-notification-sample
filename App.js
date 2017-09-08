import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PushNotification from 'react-native-push-notification'

export default class App extends React.Component {
  async componentDidMount(){
    PushNotification.configure({

   // (required) Called when a remote or local notification is opened or received
    onNotification: function(notification) {
        console.log( 'NOTIFICATION:', notification );
    },

    // IOS ONLY (optional): default: all - Permissions to register.
    permissions: {
        alert: true,
        badge: true,
        sound: true
    },

    // Should the initial notification be popped automatically
    // default: true
    popInitialNotification: true,

    /**
      * (optional) default: true
      * - Specified if permissions (ios) and token (android and ios) will requested or not,
      * - if not, you must call PushNotificationsHandler.requestPermissions() later
      */
    requestPermissions: true,
    });
  }

  schedule = () => {
    let notificationDate = new Date(Date.now() + 60000)
    let notificationMessage = "This is a long text to see whether it gets displayed in Android as bigText. Notification Scheduled a minute ago" 
    PushNotification.localNotificationSchedule({
      message: notificationMessage, // (required)
      date: notificationDate, // in 60 secs
    })
    console.log("scheduled notifiation for ",notificationDate)
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.schedule}>
          <Text>Notify Me!!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
