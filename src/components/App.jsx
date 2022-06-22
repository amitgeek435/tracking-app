import React from "react";

import Heading from "./Heading";
import Paragraph from "./Paragraph";
import OrderList from "./Orderlist";
import Lhook from "./Learnhook";
import Learnstate from "./Learnstate";
import LiveClock from "./LiveClock";
import LearnEvent from "./LearnEvents";

function App() {
  return (
    <>
      <Lhook />
      <Learnstate />
      <LiveClock />
      <Heading />
      <Paragraph />
      <OrderList />
      <Paragraph />
      <Heading />
      <LearnEvent />
    </>
  );
}
export default App;
