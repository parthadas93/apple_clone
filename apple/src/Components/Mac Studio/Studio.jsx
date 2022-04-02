import "./Studio.css";
import { Link } from "react-router-dom";

export const Studio = () => {
  return (
    <>
      <div className="topdiv">
        <h3>Mac Studio</h3>
        <div className="subdiv">
          <h5>Overview</h5>
          <h5>Mac Os</h5>
          <h5>Tech Specs</h5>
        </div>
      </div>
      <hr />
      <div className="para">
        Pay for your new Mac over 12 months at 0% APR with Apple Card.Footnote
        Just choose Apple Card Monthly Installments when you check out to apply.{" "}
        <br />
        <Link to="#" className="link">
          Learn more
        </Link>
      </div>

      <div>
        <h5 className="top">New</h5>
        <h1 className="mainitem_heading">Choose your Mac Studio</h1>
        <h3 className="buying_mac">Have questions about buying a Mac?</h3>
        <Link to="#" className="link">
          Chat with a Mac Specialist.{" "}
        </Link>
      </div>

      <div className="imgdiv">
        <img src="./images/studio.jpg" alt="" />
        <img src="./images/studio.jpg" alt="" />
      </div>

      <div className="spce">
        <div>
          <img src="./images/studio2.png" alt="" />
          <h5 className="mainitem">
            10-Core CPU <br />
            24-Core GPU <br />
            16-Core Neural Engine
          </h5>

          <h6 className="studioconfig">32GB unified memory</h6>
          <h6 className="studioconfig">512GB SSD storage</h6>
          <h6 className="studioconfig">
            Front: Two USB-C ports, one SDXC card slot
          </h6>
          <h6 className="studioconfig">
            Back: Four Thunderbolt 4 ports, two USB-A <br /> ports, one HDMI
            port, one 10Gb Ethernet <br /> port, one 3.5 mm headphone jack
          </h6>
          <div className="mainitem">$1,999.00</div>
          <p className="studioconfig">or</p>
          <div className="mainitem">$166.58/mo.per month for 12 mo.</div>
          <div className="stdlink">
            <Link to="#" className="link">
              Learn how to pay monthly at 0% APR when <br /> you choose Apple
              Card Monthly <br /> Installments
            </Link>
          </div>
          <div className="studioconfig">Apple Trade In</div>
          <div className="studioconfig">
            Get credit toward a new Mac when you <br /> trade in your eligible
            computer. Or recycle <br /> it for free
          </div>
          <br />
          <button className="btn">Select</button>
        </div>
        <div>
          <img src="./images/studio2.png" alt="" />
          <h5 className="mainitem">
            10-Core CPU <br />
            24-Core GPU <br />
            16-Core Neural Engine
          </h5>

          <h6 className="studioconfig">32GB unified memory</h6>
          <h6 className="studioconfig">512GB SSD storage</h6>
          <h6 className="studioconfig">
            Front: Two USB-C ports, one SDXC card slot
          </h6>
          <h6 className="studioconfig">
            Back: Four Thunderbolt 4 ports, two USB-A <br /> ports, one HDMI
            port, one 10Gb Ethernet <br /> port, one 3.5 mm headphone jack
          </h6>
          <div className="mainitem">$1,999.00</div>
          <p className="studioconfig">or</p>
          <div className="mainitem">$166.58/mo.per month for 12 mo.</div>
          <div className="stdlink">
            <Link to="#" className="link">
              Learn how to pay monthly at 0% APR when <br /> you choose Apple
              Card Monthly <br /> Installments
            </Link>
          </div>
          <div className="studioconfig">Apple Trade In</div>
          <div className="studioconfig">
            Get credit toward a new Mac when you <br /> trade in your eligible
            computer. Or recycle <br /> it for free
          </div>
          <br />
          <button className="btn">Select</button>
        </div>
      </div>



      <div className="setup">
        <div>

          <h1 className="setup_heading">Build the <br /> ultimate setup.</h1>
          <h5 className="setup_sub">You can add Studio Display <br /> and matching <br />  Magic accessories to your bag after you <br /> configure your Mac Studio.

</h5>
        </div>
        <div>
          <img src="./images/setup.png" alt="" />
        </div>
        
        </div>

    </>
  );
};
