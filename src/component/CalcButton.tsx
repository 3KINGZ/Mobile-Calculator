import React from "react";
import { Text, TouchableOpacity, Dimensions, StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import FIcon from "react-native-vector-icons/Feather";

import { COLORS } from "../styles";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

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
    paddingVertical: HEIGHT / 5 - 95,
  },
  title: {
    color: COLORS.primary,
    fontSize: scale(15),
  },
});
