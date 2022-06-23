import { useState } from "react";
import { Button } from "react-bootstrap";
const Loginform = () => {
  const [fullname, setfullName] = useState({
    fname: "",
    email: "",
    phone: "",
    pass: "",
  });

  const inputevent = (event) => {
    // console.log(event.target.value);
    // console.log(event.target.name);
    // let name = event.target.name;
    // let val = event.target.value;
    const { value, name } = event.target;
    setfullName((preVal) => {
      console.log(preVal);
      return {
        ...preVal,
        [name]: value,
      };
      //   if (name === "fname") {
      //     return {
      //       fname: value,
      //       email: preVal.email,
      //       phone: preVal.phone,
      //       pass: preVal.pass,
      //     };
      //   } else if (name === "email") {
      //     return {
      //       fname: preVal.fname,
      //       email: value,
      //       phone: preVal.phone,
      //       pass: preVal.pass,
      //     };
      //   } else if (name === "phone") {
      //     return {
      //       fname: preVal.email,
      //       email: preVal.email,
      //       phone: value,
      //       pass: preVal.pass,
      //     };
      //   } else if (name === "pass") {
      //     return {
      //       fname: preVal.phone,
      //       email: preVal.email,
      //       phone: preVal.phone,
      //       pass: value,
      //     };
      //   }
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="bg-success divform">
          <h1 className="text-center text-light my-3 form-title">
            Login Form Name:{" "}
            <strong>
              <u>
                <span style={{ color: "black" }}>{fullname.fname}</span>
              </u>
            </strong>{" "}
            and Password:{" "}
            <strong>
              <u>
                <span style={{ color: "black" }}>{fullname.pass}</span>
              </u>
            </strong>
          </h1>

          <p style={{ color: "blue" }}>
            Email:{" "}
            <strong>
              <u>
                <span style={{ color: "black" }}>{fullname.email}</span>
              </u>
            </strong>
          </p>
          <p style={{ color: "blue" }}>
            Phone:{" "}
            <strong>
              <u>
                <span style={{ color: "black" }}>{fullname.phone}</span>
              </u>
            </strong>
          </p>
          <input
            type="text"
            name="fname"
            className="w-50 rounded"
            placeholder="Enter Your Name"
            onChange={inputevent}
            value={fullname.fname}
          />
          <input
            type="email"
            name="email"
            className="w-50 rounded"
            placeholder="Enter Your email"
            onChange={inputevent}
            value={fullname.email}
          />
          <input
            type="number"
            name="phone"
            className="w-50 rounded"
            placeholder="Enter Your number"
            onChange={inputevent}
            value={fullname.phone}
          />
          <input
            type="text"
            name="pass"
            className="w-50 my-3 rounded"
            placeholder="Enter Your Password"
            onChange={inputevent}
            value={fullname.pass}
          />
          <Button type="submit">Click Me 👍</Button>
        </div>
      </form>
    </>
  );
};
export default Loginform;
