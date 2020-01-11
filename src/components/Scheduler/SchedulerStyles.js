import { Dimensions, StyleSheet } from "react-native";

const WIDTH = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: { flex: 1 },
  headerView: { flex: 0.1, borderBottomWidth: 1, marginTop: 30 },
  contentView: { flex: 0.9 },
  bannerText: {
    fontWeight: "700",
    fontSize: 16,
    textAlign: "center",
    padding: 10
  },
  activityText: { color: "white" },
  activityItemView: {
    backgroundColor: "grey",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
    justifyContent: "center",
    marginHorizontal: 8
  },
  dayView: {
    flexDirection: "row",
    borderBottomWidth: 1,
    justifyContent: "space-between",
    height: 50,
    alignItems: "center"
  },
  dayTextView: { alignItems: "center", justifyContent: "center" },
  dayScheduleScrollView: { flex: 1, marginVertical: 10, flexDirection: "row" },
  buttonText: { textAlign: "center" },
  buttonView: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5
  },
  modalContainer: {
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  modalContent: {
    backgroundColor: "white",
    justifyContent: "space-around",
    alignItems: "center",
    height: 250,
    position: "absolute",
    bottom: 0
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: WIDTH,
    marginVertical: 15
  },
  dayButton: {
    padding: 10,
    justifyContent: "center",
    borderRadius: 5,
    alignItems: "center"
  },
  daySelectorView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: WIDTH,
    paddingHorizontal: 10
  }
});
