import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import uuid from "react-native-uuid";
import { Button } from "./src/component";

import { scale } from "react-native-size-matters";

import { COLORS } from "./src/styles";

const funcType = {
  FUNC: "func",
  EMIT: "emitter",
};

const calcBTNS = [
  {
    id: uuid.v4(),
    type: "clear",
    emit: "C",
    value: "C",
  },
  {
    id: uuid.v4(),
    type: "add",
    emit: "(",
    value: "(",
  },
  {
    id: uuid.v4(),
    type: "add",
    emit: ")",
    value: ")",
  },
  {
    id: uuid.v4(),
    type: "delete",
    emit: "delete",
    value: "delete",
  },
  {
    id: uuid.v4(),
    type: "add",
    emit: "7",
    value: "7",
  },
  {
    id: uuid.v4(),
    type: "add",
    emit: "8",
    value: "8",
  },
  {
    id: uuid.v4(),
    type: "add",
    emit: "9",
    value: "9",
  },
  {
    id: uuid.v4(),
    type: "add",
    emit: "÷",
    value: "/",
  },
  {
    id: uuid.v4(),
    type: "add",
    emit: "4",
    value: "4",
  },
  {
    id: uuid.v4(),
    type: "add",
    emit: "5",
    value: "5",
  },
  {
    id: uuid.v4(),
    type: "add",
    emit: "6",
    value: "6",
  },
  {
    id: uuid.v4(),
    type: "add",
    emit: "x",
    value: "*",
  },
  {
    id: uuid.v4(),
    type: "add",
    emit: "1",
    value: "1",
  },
  {
    id: uuid.v4(),
    type: "add",
    emit: "2",
    value: "2",
  },
  {
    id: uuid.v4(),
    type: "add",
    emit: "3",
    value: "3",
  },
  {
    id: uuid.v4(),
    type: "add",
    emit: "-",
    value: "-",
  },
  {
    id: uuid.v4(),
    type: "add",
    emit: ".",
    value: ".",
  },
  {
    id: uuid.v4(),
    type: "add",
    emit: "0",
    value: "0",
  },
  {
    id: uuid.v4(),
    type: "add",
    emit: "%",
    value: "%",
  },
  {
    id: uuid.v4(),
    type: "add",
    emit: "+",
    value: "+",
  },
];

const WIDTH = Dimensions.get("window").width;

const CalcButton = ({ onPress, value }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        alignItems: "center",
        width: WIDTH / 4,
        justifyContent: "center",
        padding: "6%",
      }}>
      <Text style={{ color: COLORS.primary, fontSize: scale(15) }}>
        {value}
      </Text>
    </TouchableOpacity>
  );
};

const App = () => {
  const [calc, setCalc] = useState<string>("");
  const [result, setResult] = useState();

  const operators = ["+", "-", "÷", "x"];

  const calcFUNCS: { [key: string]: any } = {
    clear: () => setCalc(""),
    delete: () => setCalc(calc.slice(0, -1)),
    add: (val: string) => {
      if (
        operators.includes(val) &&
        operators.includes(calc[calc.length - 1])
      ) {
        return;
      } else {
        setCalc(calc + val);
      }
    },
    sum: () => setResult(eval(calc)),
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          padding: "7%",
          borderBottomWidth: 1,
          borderColor: COLORS.lightGrey,
        }}>
        <Text style={{ textAlign: "right", color: COLORS.primary }}>
          {calc}
        </Text>
      </View>
      <View
        style={{
          padding: "5%",
          borderBottomWidth: 1,
          borderColor: COLORS.lightGrey,
        }}>
        <Text
          style={{
            textAlign: "right",
            color: COLORS.primary,
            fontSize: scale(24),
          }}>
          {result}
        </Text>
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
            // position: "absolute",
            // bottom: 0,
          },
          textStyle: {
            fontSize: scale(30),
          },
        }}
      />
    </View>
  );
};

export default App;
