import React, { useState } from "react";
import { View, Text } from "react-native";
import uuid from "react-native-uuid";

const funcType = {
  FUNC: "func",
  EMIT: "emitter",
};

const calcBTNS = [
  {
    id: uuid.v4(),
    type: funcType.FUNC,
    emit: "clear",
  },
  {
    id: uuid.v4(),
    type: funcType.EMIT,
    emit: "(",
  },
  {
    id: uuid.v4(),
    type: funcType.EMIT,
    emit: ")",
  },
  {
    id: uuid.v4(),
    type: funcType.EMIT,
    emit: ")",
  },
  {
    id: uuid.v4(),
    type: funcType.FUNC,
    emit: "delete",
  },
  {
    id: uuid.v4(),
    type: funcType.EMIT,
    emit: "7",
  },
  {
    id: uuid.v4(),
    type: funcType.EMIT,
    emit: "8",
  },
  {
    id: uuid.v4(),
    type: funcType.EMIT,
    emit: "9",
  },
  {
    id: uuid.v4(),
    type: funcType.EMIT,
    emit: "÷",
  },
  {
    id: uuid.v4(),
    type: funcType.EMIT,
    emit: "4",
  },
  {
    id: uuid.v4(),
    type: funcType.EMIT,
    emit: "5",
  },
  {
    id: uuid.v4(),
    type: funcType.EMIT,
    emit: "6",
  },
  {
    id: uuid.v4(),
    type: funcType.EMIT,
    emit: "x",
  },
  {
    id: uuid.v4(),
    type: funcType.EMIT,
    emit: "1",
  },
  {
    id: uuid.v4(),
    type: funcType.EMIT,
    emit: "2",
  },
  {
    id: uuid.v4(),
    type: funcType.EMIT,
    emit: "3",
  },
  {
    id: uuid.v4(),
    type: funcType.EMIT,
    emit: "-",
  },
  {
    id: uuid.v4(),
    type: funcType.EMIT,
    emit: ".",
  },
  {
    id: uuid.v4(),
    type: funcType.EMIT,
    emit: "0",
  },
  {
    id: uuid.v4(),
    type: funcType.FUNC,
    emit: "percent",
  },
  {
    id: uuid.v4(),
    type: funcType.FUNC,
    emit: "+",
  },
];

const App = () => {
  const [calc, setCalc] = useState<string>("");
  const [result, setResult] = useState();

  const operators = ["+", "-", "÷", "x"];

  const calcFUNCS = {
    clear: setCalc(""),
    delete: setCalc(calc.slice(0, -1)),
    add: (val: string) => {
      if (!operators.includes(calc[calc.length - 1])) {
        setCalc(val);
      }
    },
    sum: setResult(eval(calc)),
  };

  return (
    <View>
      <Text>Mobile Calculator</Text>
    </View>
  );
};

export default App;
