import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

import { AccountStack } from "../navegacion/AccountStack";

import { MenuScreen } from "../pantallas/MenuScreen";
import { ContactoScreen } from "../pantallas/ContactoScreen";
import { screen } from "../utils";

const Tab = createBottomTabNavigator();

export function AppNavegacion() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#00a680",
        tabBarInactiveTintColor: "#646464",
        headerShown: false,
        tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
      })}
    >
      <Tab.Screen name="Inicio" component={AccountStack}></Tab.Screen>
      <Tab.Screen name="Menu" component={MenuScreen}></Tab.Screen>
      <Tab.Screen name="Contacto" component={ContactoScreen}></Tab.Screen>
    </Tab.Navigator>
  );
}

function screenOptions(route, color, size) {
  let iconName;

  if (route.name === "Inicio") {
    iconName = "login-variant";
  }

  if (route.name === "Menu") {
    iconName = "heart-outline";
  }

  if (route.name === "Contacto") {
    iconName = "compass-outline";
  }

  return (
    <Icon type="material-community" name={iconName} color={color} size={size} />
  );
}
