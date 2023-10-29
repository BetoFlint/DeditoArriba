import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavegacion } from "./src/navegacion/AppNavegacion";
import { initFirebase } from "./src/utils";

LogBox.ignoreAllLogs;

export default function App() {
  return (
    <>
      <NavigationContainer>
        <AppNavegacion></AppNavegacion>
      </NavigationContainer>
    </>
  );
}
