import React, {useState} from "react";

//import any components needed

import NumberButton from "./NumberButton";

//Import your array data to from the provided data file
import { numbers } from "../../../data";

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numbersState] = useState(numbers);
  return (
    <div>
      {numbersState.map(number => {
        return <NumberButton value={number} />;
      })}
    </div>
  );
};

export default Numbers;


