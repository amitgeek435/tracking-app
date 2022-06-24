import { useState } from "react";
import Button from "react-bootstrap/esm/Button";

const LearnEvent = () => {
  const purple = "#99ff00";
  const [bg, setbg] = useState(purple);
  const [name, setname] = useState("Click Here");
  const [outline, setoutline] = useState("outline-dark");
  const bgChange = () => {
    let newBg = "#34495e";
    setbg(newBg);
    setname("😸 👍 😼");
    setoutline("outline-light");
  };
  const bgBack = () => {
    setbg(purple);
    setname("Click Here");
    setoutline("outline-dark");
  };
  return (
    <>
      <div className="w-100 learnevent" style={{ backgroundColor: bg }}>
        <div className="learnevent-inr">
          {/* <p className="mb-2">Description</p> */}
          <Button
            variant={outline}
            onClick={bgChange}
            onDoubleClick={bgBack}
            // onMouseEnter={bgChange}
            // onMouseLeave={bgBack}
            className="l-btn text-info"
          >
            {name}
          </Button>
        </div>
      </div>
    </>
  );
};
export default LearnEvent;
