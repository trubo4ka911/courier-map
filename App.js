import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/Home";
import Login from "./screens/Login";
import CourierMap from "./screens/Map";

const MainStack = createStackNavigator(); // указывает на группу навигаторов

export default () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        {/* Замена Switch */}
        <MainStack.Screen name="Registration" component={Home} />
        {/* Замена Route */}
        <MainStack.Screen name="Login" component={Login} />
        <MainStack.Screen name="CourierMap" component={CourierMap} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
