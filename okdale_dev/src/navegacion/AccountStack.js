import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AccountScreen } from "../pantallas/Cuenta/AccountScreen";
import { LoginScreen } from "../pantallas/Cuenta/LoginScreen";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.account.account}
        component={AccountScreen}
        option={{ title: "Cuenta" }}
      />
      <Stack.Screen
        name={screen.account.login}
        component={LoginScreen}
        option={{ title: "Iniciar Sesión" }}
      />
    </Stack.Navigator>
  );
}
