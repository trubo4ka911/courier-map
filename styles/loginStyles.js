import { StyleSheet } from "react-native";

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F9FAFB",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1E293B",
    marginBottom: 20,
  },
  form: {
    width: "80%",
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    height: 48,
    borderRadius: 6,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#4B5563",
  },
  inputTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#4B5563",
    marginBottom: 8,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 6,
    height: 48,
    paddingHorizontal: 16,
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
    color: "#4B5563",
  },
  passwordToggle: {
    marginLeft: 8,
  },
  passwordToggleText: {
    fontSize: 14,
    color: "#4B5563",
  },
  buttonContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: "60%",
    alignSelf: "center",
    marginTop: 32,
  },
  button: {
    borderRadius: 6,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginVertical: 16,
    marginLeft: "auto",
    aspectRatio: 6,
    overflow: "hidden",
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  gradientBackground: {
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: "100%",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  qrButtonText: {
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 16,
    color: "#FFFFFF",
  },
});

export default loginStyles;
