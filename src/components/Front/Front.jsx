import "./front.css";
import sun from "/images/icon-star.svg";
export default function Front({ setSubmit, setRate, rate }) {
  let buttons = [1, 2, 3, 4, 5];
  return (
    <>
      <div className="container">
        <img src={sun} alt=" image of sun" className="sun" />
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="buttons-con">
          {buttons.map((el) => (
            <button
              className="btn"
              onClick={() => setRate(el)}
              key={el}
              style={rate === el ? { backgroundColor: "gray" } : {}}
            >
              {el}
            </button>
          ))}
        </div>
        <button className="yelow" onClick={() => setSubmit(false)}>
          submit
        </button>
      </div>
    </>
  );
}
