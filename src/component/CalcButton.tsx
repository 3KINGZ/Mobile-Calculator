import React from "react";
import { Text, TouchableOpacity, Dimensions, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import FIcon from "react-native-vector-icons/Feather";

import { COLORS } from "../styles";

const WIDTH = Dimensions.get("window").width;

interface ICalcButton {
  onPress: any;
  value: string;
}

export const CalcButton = ({ onPress, value }: ICalcButton) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {value === "delete" ? (
        <FIcon name="delete" size={scale(15)} color={COLORS.primary} />
      ) : (
        <Text style={styles.title}>{value}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: WIDTH / 4,
    justifyContent: "center",
    padding: "7%",
  },
  title: {
    color: COLORS.primary,
    fontSize: scale(15),
  },
});
