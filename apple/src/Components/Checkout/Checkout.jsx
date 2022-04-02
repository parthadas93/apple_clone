import "./checkout.css";
import { Link } from "react-router-dom";
export const Checkout = () => {
  return (
    <>
      <div className="checkout_nav">
        <div>
          {" "}
          <h3>Checkout</h3>
        </div>
        <div>
          {" "}
          <Link to="/mac-studio" className="link">
            Show Order Summary: ₹209400.00
          </Link>
        </div>
      </div>

      <div className="form_div">
        <h1 className="formHeading">Where should we send your order?</h1>
        <h3 className="nameadress">Enter your name and adress</h3>
        <form action="">
          <input className="input" type="text" placeholder="First name" />
          <input className="input" type="text" placeholder="Last name" />
          <input className="input" type="text" placeholder="Adress Line 1" />
          <input
            className="input"
            type="text"
            placeholder="Adress Line 2 (Optional)"
          />
          <input
            className="input"
            type="text"
            placeholder="Landmark (Optional)"
          />
          <input className="input" type="text" placeholder="PIN Code " />
                  <input className="input" type="text" placeholder="City,State " />
                  <input className="checkbox" type="checkbox" />
                  <span className= "checkinfo">This is a busisness adress</span>
                  <h3 className="nameadress">What’s your contact information?</h3>
                  <input className="input" type="text" placeholder="Enter email adress" />
                  <input className="input" type="text" placeholder="India Mobile Number" />
                  <h5 className="emailmsg">We’ll email you a receipt and send order updates to your mobile phone via SMS or iMessage.</h5>
                  <br /><br /><br />
                  <button className="checkoutBtn">Continue checkout</button>
                  <br /><br /><br /><br />
        </form>
      </div>
    </>
  );
};
