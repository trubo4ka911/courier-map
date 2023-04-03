import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import menuStyles from "../styles/menuStyles";

const Menu = ({ onPress }) => {
  const navigation = useNavigation();
  return (
    <View style={menuStyles.container}>
      <Text style={menuStyles.inputTitle}>Меню</Text>
      <TouchableOpacity
        style={menuStyles.menuItem}
        onPress={() => navigation.navigate("CourierMap")}
      >
        <Icon name="directions" size={24} color="#808080" />
        <Text style={menuStyles.menuItemText}>Рейсы</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={menuStyles.menuItem}
        onPress={() => console.log("Карта")}
      >
        <Icon name="map" size={24} color="#808080" />
        <Text style={menuStyles.menuItemText}>Карта</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={menuStyles.menuItem}
        onPress={() => console.log("Синхронизация")}
      >
        <Icon name="sync" size={24} color="#808080" />
        <Text style={menuStyles.menuItemText}>Синхронизация</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={menuStyles.menuItem}
        onPress={() => console.log("Настройки")}
      >
        <Icon name="settings" size={24} color="#808080" />
        <Text style={menuStyles.menuItemText}>Настройки</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={menuStyles.menuItem}
        onPress={() => console.log("Касса")}
      >
        <Icon name="payment" size={24} color="#808080" />
        <Text style={menuStyles.menuItemText}>Касса</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={menuStyles.menuItem}
        onPress={() => console.log("Мотивация")}
      >
        <Icon name="mood" size={24} color="#808080" />
        <Text style={menuStyles.menuItemText}>Мотивация</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={menuStyles.menuItem}
        onPress={() => navigation.navigate("Login")}
      >
        <Icon name="exit-to-app" size={24} color="#808080" />
        <Text style={menuStyles.menuItemText}>Выход</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;
