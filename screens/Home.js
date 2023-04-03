import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Login"
          style={styles.btn}
          onPress={() => navigation.navigate("Login")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Courier Map"
          style={styles.btn}
          onPress={() => navigation.navigate("CourierMap")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginVertical: 20,
  },
});

export default Home;
