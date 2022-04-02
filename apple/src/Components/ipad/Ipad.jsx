import { Link } from "react-router-dom";
import "./ipad.css";
export const Ipad = () => {
  return (
    <>
      <div className="main_div">
        <div className="infoandbuy">
          <h1 className="hero_heading">
            iPad{" "}
            <span>
              <img src="./images/air.png" alt="" />
            </span>
          </h1>

          <p className="sub_hero">
            Light. Bright <br /> Full of might <br />
          </p>
          <p className="price"> From ₹54900.00</p>

          <button className="button">Buy</button>
          <br />

          <Link to="#" className="link">
            Learn more
          </Link>
        </div>
        <div>
          <img src="./images/ipad1.jpg" alt="" />
        </div>
      </div>

      <div className="imageDiv">
        <img src="./images/ipad2.png" alt="" />
      </div>
      <hr />

      <div className="capable_ipad">
        <div className="capable_heading">
          iPad
          <div className="capable_sub">
            Delightfully capable. <br />
            Surprisingly affordable.
                  </div>
                 
                  <div className="capable_price"> From ₹54900.00</div>

                  <button className="button">Buy</button> <br />
                  <Link to="#" className="link">Learn more</Link>
              </div>
              


              <div>
                  <img src="./images/ipad3.jpg" alt="" />
              </div>
      </div>
    </>
  );
};
