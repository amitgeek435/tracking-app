import { useState } from "react";
import { Button } from "react-bootstrap";

const Learnstate = () => {
  let ntime = new Date().toLocaleTimeString();
  let ndate = new Date().toLocaleDateString();
  const [ctime, setCtime] = useState(ntime);
  const [cdate, setCdate] = useState(ndate);
  const updateTime = () => {
    ntime = new Date().toLocaleTimeString();
    setCtime(ntime);
  };
  setInterval(updateTime, 1000);
  const updateDate = () => {
    ndate = new Date().toLocaleDateString();
    setCdate(ndate);
    // setInterval(setCdate(ndate), 1000);
  };
  return (
    <>
      <h2 style={{ color: "darkblue", padding: "35px 0" }} className="h1">
        Hello
      </h2>
      <p className="h1">{ctime}</p>
      <Button
        variant="secondary"
        onClick={updateTime}
        className="dncnum mb-4 mx-2"
        size="lg"
        type="button"
      >
        Get Time
      </Button>
      <p className="h1">{cdate}</p>
      <Button
        variant="secondary"
        onClick={updateDate}
        className="dncnum mb-4 mx-2"
        size="lg"
        type="button"
      >
        Get Time
      </Button>
    </>
  );
};
export default Learnstate;
