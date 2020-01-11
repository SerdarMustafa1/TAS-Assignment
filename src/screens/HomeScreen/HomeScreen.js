import React, { Component } from "react";
import { Image, View, Text } from "react-native";
import { styles } from "./HomeScreenStyles";

import Scheduler from "../../components/Scheduler/Scheduler";
import ContactDialer from "../../components/ContactDialer/ContactDialer";
import Spacer from "../../components/Spacer/Spacer";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../../../assets/tas-logo.jpg")}
        />
        <View style={styles.headerView}>
          <Text style={styles.bannerText}> Toruk Macto Schedule week 1 </Text>
        </View>
        <Scheduler />
        <Spacer />
        <ContactDialer />
      </View>
    );
  }
}

export default HomeScreen;
