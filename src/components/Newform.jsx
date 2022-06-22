// import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
const Newform = () => {
  return (
    <>
      <div className="bg-success divform">
        <h1 className="text-center text-light my-3">Login Form</h1>
        <input
          type="text"
          name="fname"
          className="w-25 my-4 rounded"
          placeholder="Enter Your Name"
        />
        <Button>Click Me 👍</Button>
      </div>
    </>
  );
};
export default Newform;
//controlled component and uncontrolled component
