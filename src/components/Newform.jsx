// import Form from "react-bootstrap/Form";
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
const Newform = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [fname, setFname] = useState("");
  const [fpass, setFpass] = useState("");

  const inputevent = (event) => {
    setName(event.target.value);
  };
  const inputevent2 = (event) => {
    setPass(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setFname(name);
    setFpass(pass);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="bg-success divform">
          <h1 className="text-center text-light my-3 form-title">
            New Form Name:{" "}
            <strong>
              <u>
                <span style={{ color: "black" }}>{fname}</span>
              </u>
            </strong>{" "}
            and Password:{" "}
            <strong>
              <u>
                <span style={{ color: "black" }}>{fpass}</span>
              </u>
            </strong>
          </h1>
          <input
            type="text"
            name="fname"
            className="w-25 rounded"
            placeholder="Enter Your Name"
            onChange={inputevent}
            value={name}
          />
          <input
            type="text"
            name="pass"
            className="w-25 my-3 rounded"
            placeholder="Enter Your Password"
            onChange={inputevent2}
            value={pass}
          />
          <Button type="submit">Click Me 👍</Button>
        </div>
      </form>
    </>
  );
};
export default Newform;
//controlled component and uncontrolled component
