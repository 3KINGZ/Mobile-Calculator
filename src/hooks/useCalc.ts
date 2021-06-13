import { useState } from "react";

const operators = ["+", "-", "÷", "x"];

export const useCalc = () => {
  const [calc, setCalc] = useState<string>("");
  const [result, setResult] = useState<number | null>();

  const filterCalc = (calc: string) => {
    let filteredCalc = calc.replace("*", "x");
    filteredCalc = filteredCalc.replace("/", "÷");
    return filteredCalc;
  };

  const calcFUNCS: { [key: string]: any } = {
    clear: () => {
      setCalc("");
      setResult(null);
    },
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

  return [calc, result, filterCalc, calcFUNCS];
};
