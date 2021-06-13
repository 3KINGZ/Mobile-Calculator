import React from "react";
import {
  Text,
  GestureResponderEvent,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { COLORS } from "../styles";

interface IButton {
  title: string;
  onPress?:
    | (((event: GestureResponderEvent) => void) & (() => void))
    | undefined;
  size?: "xl" | "md" | "s";
  style?: { containerStyle?: object; textStyle?: object };
}

export const Button = ({
  title,
  onPress,
  size,
  style = { containerStyle: {}, textStyle: {} },
}: IButton) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, styles[size || "s"], style.containerStyle]}>
      <Text style={[styles.text, style.textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    paddingHorizontal: 8,
    paddingVertical: 16,
    width: "100%",
  },
  text: {
    color: "white",
    textAlign: "center",
  },
  xl: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  md: {
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  s: {
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
});
