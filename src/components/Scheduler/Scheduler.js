import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal
} from "react-native";

import { styles } from "./SchedulerStyles";

const WEEK = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const lightGrey = "#D3D3D3";

export default class Scheduler extends Component {
  static navigationOptions = {
    title: "Awesome Scheduler"
  };

  constructor(props) {
    super(props);
    this.state = {
      days: {
        Mon: [],
        Tue: [
          { id: 102, title: "Table Tennis" },
          { id: 104, title: "Swimming" }
        ],
        Wed: [{ id: 101, title: "Cycling" }],
        Thu: [{ id: 108, title: "Rest" }],
        Fri: [
          { id: 103, title: "Badminton" },
          { id: 109, title: "KickBoxing" }
        ]
      },
      selectedActivity: null,
      daySelected: null,
      displayModal: false
    };
  }

  onLongPressed = (id, day) => {
    this.setState({
      selectedActivity: id,
      displayModal: true,
      daySelected: day
    });
  };

  onModalClose = () => {
    this.selectedActivityDay = null;
    this.setState({
      displayModal: false,
      selectedActivity: null,
      daySelected: null
    });
  };

  onMoveActivity = () => {
    const { days, selectedActivity, daySelected } = this.state;

    const activityDay = Object.keys(days).find(day => {
      const activities = days[day];
      return activities.some(activity => activity.id === selectedActivity);
    });

    const activitySelectedObject = days[activityDay].find(
      activity => activity.id === selectedActivity
    );

    const newDays = Object.keys(days).reduce((acc, day) => {
      const activities = days[day];

      const activityRemoved = activities.filter(
        activity => activity !== activitySelectedObject
      );

      return {
        ...acc,
        [day]:
          day === daySelected
            ? [...days[day], activitySelectedObject]
            : activityRemoved
      };
    }, {});

    this.setState({ days: newDays, displayModal: false });
  };

  onModalDayPress = day => {
    this.selectedActivityDay = day;
    this.setState({ daySelected: day });
  };

  render() {
    const { daySelected } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          {WEEK.map(day => {
            return (
              <View key={day} style={styles.dayView}>
                <View style={styles.dayTextView}>
                  <Text>{day}</Text>
                </View>
                <DaySchedule
                  day={day}
                  data={this.state.days[day]}
                  onLongPressed={this.onLongPressed}
                />
              </View>
            );
          })}
        </View>
        <Modal
          animationType="slide"
          visible={this.state.displayModal}
          onRequestClose={this.onModalClose}
          transparent
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View>
                <Text style={{ textAlign: "center" }}>
                  Select a day to move the activity
                </Text>
              </View>

              <View style={styles.daySelectorView}>
                {WEEK.map(day => {
                  return (
                    <TouchableWithoutFeedback
                      key={day}
                      onPress={() => this.onModalDayPress(day)}
                    >
                      <View
                        style={[
                          styles.dayButton,
                          {
                            backgroundColor:
                              daySelected === day ? "green" : lightGrey
                          }
                        ]}
                      >
                        <Text>{day}</Text>
                      </View>
                    </TouchableWithoutFeedback>
                  );
                })}
              </View>

              <View style={styles.modalButtonContainer}>
                <TouchableOpacity
                  style={styles.buttonView}
                  onPress={this.onModalClose}
                >
                  <Text style={styles.buttonText}> Cancel </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  disabled={
                    !this.state.daySelected || !this.selectedActivityDay
                  }
                  style={[
                    styles.buttonView,
                    {
                      opacity:
                        !this.state.daySelected || !this.selectedActivityDay
                          ? 0.2
                          : 1
                    }
                  ]}
                  onPress={this.onMoveActivity}
                >
                  <Text style={styles.buttonText}> Move </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

class DaySchedule extends Component {
  render() {
    const { data } = this.props;
    if (!data) {
      return;
    }

    return (
      <View style={styles.dayScheduleScrollView}>
        {data.map(({ title, id }) => (
          <TouchableOpacity
            style={styles.activityItemView}
            key={id}
            delayLongPress={800}
            onLongPress={() => {
              this.props.onLongPressed(id, this.props.day);
            }}
          >
            <Text style={styles.activityText}>{title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}
