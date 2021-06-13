import React from "react";
import { View, Text, FlatList, StatusBar, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

import { CalcButton, Button } from "./src/component";
import { calcBTNS } from "./src/assets/data";
import { COLORS } from "./src/styles";
import { useCalc } from "./src/hooks";

const App = () => {
  const [calc, result, filterCalc, calcFUNCS]: [
    string,
    string | number,
    any,
    { [key: string]: any },
  ] = useCalc();

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.container}>
        <View style={styles.calcContainer}>
          <Text style={styles.calcText}>{filterCalc(calc)}</Text>
        </View>

        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>{result}</Text>
        </View>
        <FlatList
          data={calcBTNS}
          numColumns={4}
          style={{ flex: 1 }}
          renderItem={({ item }) => (
            <CalcButton
              onPress={() => calcFUNCS[item.type](item.value)}
              value={item.emit}
            />
          )}
        />
        <Button
          onPress={calcFUNCS.sum}
          title="="
          size="md"
          style={{
            containerStyle: {
              alignSelf: "center",
              borderRadius: 0,
              height: "10%",
            },
            textStyle: {
              fontSize: scale(30),
            },
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  calcContainer: {
    height: "10%",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderColor: COLORS.lightGrey,
  },
  calcText: {
    textAlign: "right",
    color: COLORS.primary,
    fontSize: scale(18),
    marginRight: 5,
  },
  resultContainer: {
    // padding: "5%",
    height: "10%",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderColor: COLORS.lightGrey,
  },
  resultText: {
    textAlign: "right",
    color: COLORS.primary,
    fontSize: scale(24),
    marginRight: 5,
  },
});

export default App;
