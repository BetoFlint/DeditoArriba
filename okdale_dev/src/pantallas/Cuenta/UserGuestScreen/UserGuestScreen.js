import React from "react";
import { View, ScrollView } from "react-native";
import { styles } from "./UserGuestScreen.styles";
import { useNavigation } from "@react-navigation/native";
import { Text, Image, Button } from "react-native-elements";
import { LoginScreen } from "../LoginScreen";
import { screen } from "../../../utils";

export function UserGuestScreen() {
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate(screen.account.login);
  };

  return (
    <ScrollView centerContent={true} style="content">
      <Image
        source={require("../../../../assets/img/Login/login.png")}
        style={styles.image}
      ></Image>
      <Text style={styles.titulo}>Consultar Perfil</Text>
      <Text style={styles.descripcion}>
        Bienvenido a la aplicación XXX, la cual XXX
      </Text>

      <View>
        <Button
          title="Ver tu perfil"
          buttonStyle={styles.btnStyle}
          onPress={goToLogin}
        ></Button>
      </View>
    </ScrollView>
  );
}
