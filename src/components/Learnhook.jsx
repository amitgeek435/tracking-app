import { useState } from "react";
import { Button } from "react-bootstrap";

const Lhook = () => {
  // const state = useState();
  //console.log(state);
  let [count, setCount] = useState(1);

  const IncNum = () => {
    count++;
    setCount(count);
  };
  const DncNum = () => {
    if (count > 0) {
      count--;
      setCount(count);
    } else {
      setCount(0);
    }
  };
  return (
    <>
      <h2 style={{ color: "red", padding: "35px 0" }}>Hello</h2>
      <p className="numericvalue h2">{count}</p>
      <Button
        variant="secondary"
        onClick={DncNum}
        className="dncnum mb-4 mx-2"
        size="sm"
      >
        Dnc Click Me -
      </Button>
      <Button
        variant="primary"
        className="incnum mb-4"
        onClick={IncNum}
        size="sm"
      >
        Tnc Click Me +
      </Button>
    </>
  );
};
export default Lhook;
