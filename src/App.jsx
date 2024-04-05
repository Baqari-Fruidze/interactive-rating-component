import "./App.css";
import Front from "./components/Front/Front";
import Back from "./components/Back/Back";
import { useState } from "react";

function App() {
  const [rate, setRate] = useState(null);
  const [submit, setSubmit] = useState(true);
  return (
    <>
      {submit ? (
        <Front setSubmit={setSubmit} setRate={setRate} rate={rate} />
      ) : (
        <Back rate={rate} />
      )}
    </>
  );
}

export default App;
