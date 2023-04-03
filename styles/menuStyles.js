import { StyleSheet } from "react-native";

const menuStyles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 8,
    width: "80%",
    position: "absolute",
    top: 80,
    left: 0,
    zIndex: 1,
    height: "100%",
    overflow: "hidden",
    justifyContent: "flex-start",
    color: "#000",
  },
  inputTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#000",
    marginTop: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  menuItemText: {
    fontSize: 16,
    marginLeft: 8,
    paddingTop: 8,
  },
  button: {
    marginLeft: 10,
    marginRight: 20,
  },
});

export default menuStyles;
