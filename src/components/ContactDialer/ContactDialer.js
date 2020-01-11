import React, { Component } from "react";
import { Text, View, TouchableOpacity, Linking, Platform } from "react-native";

import { styles } from "../../components/ContactDialer/ContactDialerStyles";

export default class App extends Component {
  dialCall = () => {
    let phoneNumber = "+447931071401";

    if (Platform.OS === "android") {
      phoneNumber = "tel:${+447931071401}";
    } else {
      phoneNumber = "telprompt:${+447931071401}";
    }

    Linking.openURL(phoneNumber);
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <TouchableOpacity
          onPress={this.dialCall}
          activeOpacity={0.7}
          style={styles.button}
        >
          <Text style={styles.TextStyle}>
            Like my work?{"\n"} Call me for a ☕️ & a chat
          </Text>
        </TouchableOpacity>

        <Text style={{ marginTop: 10 }}>
          Made with with love ❤️ by Serdar Mustafa
        </Text>
      </View>
    );
  }
}
