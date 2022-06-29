import React, { useState } from "react";
import { questions } from "./api";
import "./accordion.css";
import LearnAccordian from "./LearnAccordian";

const Accordion = () => {
  const [data, setData] = useState(questions);
  return (
    <>
      <section className="main-div">
        <h1 style={{ color: "red" }}>This Is Accordion!</h1>
        {data.map((elm) => {
          const { id } = elm;
          return <LearnAccordian key={id} {...elm} />;
        })}
      </section>
    </>
  );
};

export default Accordion;
