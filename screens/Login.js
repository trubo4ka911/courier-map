import React, { useState } from "react";
import { Input } from "react-native-elements";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import loginStyles from "../styles/loginStyles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { LinearGradient } from "expo-linear-gradient";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);
  const navigation = useNavigation();

  return (
    <View style={loginStyles.container}>
      <Text style={loginStyles.header}>Tocan App</Text>
      <View style={loginStyles.form}>
        <Text style={loginStyles.inputTitle}>Login</Text>
        <Input
          placeholder="Введите ваш логин"
          leftIcon={<AntDesign name="user" size={24} color="#00FF99" />}
          containerStyle={loginStyles.inputContainer}
          inputContainerStyle={loginStyles.input}
          inputStyle={loginStyles.inputText}
        />
        <Text style={loginStyles.inputTitle}>Password</Text>
        <Input
          placeholder="Введите ваш пароль"
          secureTextEntry={!showPassword}
          leftIcon={<AntDesign name="key" size={24} color="#00FF99" />}
          containerStyle={loginStyles.inputContainer}
          inputContainerStyle={loginStyles.input}
          inputStyle={loginStyles.inputText}
          rightIcon={
            <TouchableOpacity
              style={loginStyles.passwordToggle}
              onPress={toggleShowPassword}
            >
              <Text style={loginStyles.passwordToggleText}>
                {showPassword ? (
                  <MaterialCommunityIcons
                    name="eye-outline"
                    size={24}
                    color="#4B5563"
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="eye-off-outline"
                    size={24}
                    color="#4B5563"
                  />
                )}
              </Text>
            </TouchableOpacity>
          }
        />
        <View style={loginStyles.buttonContainer}>
          <TouchableOpacity
            style={loginStyles.button}
            onPress={() => navigation.navigate("CourierMap")}
          >
            <LinearGradient
              colors={["#93C5FD", "#3B82F6"]}
              start={[1, 0]}
              end={[0, 0]}
              style={loginStyles.gradientBackground}
            >
              <View style={loginStyles.buttonContent}>
                <Text style={loginStyles.buttonText}>Вход</Text>
                <AntDesign
                  name="arrowright"
                  size={24}
                  color="#fff"
                  style={{ marginLeft: 8 }}
                />
              </View>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={loginStyles.button}>
            <LinearGradient
              colors={["#93C5FD", "#3B82F6"]}
              start={[1, 0]}
              end={[0, 0]}
              style={loginStyles.gradientBackground}
            >
              <View style={loginStyles.buttonContent}>
                <MaterialCommunityIcons
                  name="qrcode-scan"
                  size={24}
                  color="#fff"
                />
                <Text style={loginStyles.qrButtonText}>Настройки через QR</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
