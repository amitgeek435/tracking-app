import { useState } from "react";
const LiveClock = () => {
  let time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(time);
  const uTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };
  setInterval(uTime, 1000);
  return (
    <>
      <h2 style={{ color: "darkblue" }} className="h1">
        Live Clock
      </h2>
      <p
        className="h1 bg-info rounded w-25 mx-auto"
        style={{ color: "darkblue" }}
      >
        {ctime}
      </p>
    </>
  );
};
export default LiveClock;
