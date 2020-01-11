import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {},
  logo: {
    display: "flex",
    justifyContent: "center",
    width: 350,
    height: 100,
    marginVertical: 20
  },
  headerView: {
    borderBottomWidth: 1,
    borderBottomColor: "#42add5",
    paddingBottom: 10,
    marginBottom: 30
  },

  content: {
    flex: 0.9
  },

  bannerText: {
    fontWeight: "700",
    fontSize: 16,
    textAlign: "center",
    padding: 10
  }
});
