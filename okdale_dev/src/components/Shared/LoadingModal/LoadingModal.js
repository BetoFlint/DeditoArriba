import React from "react";
import { ActivityIndicator, View } from "react-native";
import { Overlay, Text } from "react-native-elements";
import { styles } from "./LoadingModal.style";

export function LoadingModal(props) {
  const { Show, text } = props;

  return (
    <Overlay
      isvisile={Show}
      windowBackgroundColor="rgba(0,0,0,0.5)"
      overlayBackgroundColor="transparent"
      overlayStyle={styles.overlay}
    >
      <View style={styles.view}>
        <ActivityIndicator size="large" color="#00a680"></ActivityIndicator>
        {text && <Text style={styles.text}>{text}</Text>}
      </View>
    </Overlay>
  );

  LoadingModal.defaultProps = {
    show: false,
  };
}
