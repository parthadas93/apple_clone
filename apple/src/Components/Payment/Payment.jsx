import { Link } from "react-router-dom"

export const Payment = () => {
    return (
        <>
            <div>
            <div className="form_div">
        
        <h3 className="nameadress">Enter your payment details</h3>
        <form action="">
          <input className="input" type="text" placeholder="Crad Numbere" />
          <input className="input" type="text" placeholder="CVV Number" />
          <input className="input"  placeholder="mm/yy/dd" type="date" />
          <input
            className="input"
            type="text"
            placeholder="Card holder name"
          />
          {/* <input
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
                  <h5 className="emailmsg">We’ll email you a receipt and send order updates to your mobile phone via SMS or iMessage.</h5> */}
                        <br /><br /><br />
                        <Link to="/" className="link">

                  <button className="checkoutBtn" onClick={()=> alert ("Payment Successful")}>Payment</button>
                        </Link>
                  <br /><br /><br /><br />
        </form>
      </div>
        </div>
        
        
        
        
        </>
    )
}