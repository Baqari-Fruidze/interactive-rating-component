import "./back.css";
import img from "/images/illustration-thank-you.svg";

export default function Back({ rate }) {
  return (
    <>
      <div className="cont">
        <img src={img} alt="" className="pict" />
        <p className="parag">You selected {rate} out of 5</p>
        <h1>Thank you!</h1>
        <p className="para">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </>
  );
}
