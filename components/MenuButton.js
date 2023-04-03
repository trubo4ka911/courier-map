import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import menuStyles from "../styles/menuStyles";

const MenuButton = ({ onPress, isMenuOpen }) => {
  return (
    <TouchableOpacity style={menuStyles.button} onPress={onPress}>
      {isMenuOpen ? (
        <Icon name="close" size={24} color="#fff" />
      ) : (
        <Icon name="menu" size={24} color="#fff" />
      )}
    </TouchableOpacity>
  );
};

export default MenuButton;
