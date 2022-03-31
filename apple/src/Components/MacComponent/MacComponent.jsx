import "./Mac.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Mac = () => {
    const [noteBook, setNoteBook] = useState(true)
    
    function changeState() {
        setNoteBook(false)
    }
  return (
    <div>
      <h2>
        <span className="top">New</span>
        <br />
        <span className="mainHeading">Mac Studio</span>
        <p className="subHeading">Empower station</p>
        <span className="pricing">From $1999</span>
        <br />

        <div className="btnAndLink">
          <button className="button">Buy</button>
          <Link to="" className="link">
            Learn More{" "}
          </Link>
        </div>
        <img src="https://www.apple.com/v/mac/home/bl/images/overview/hero/mac_studio__c2wojtx43pw2_large.jpg"></img>
        <hr className="hr" />
      </h2>
        {/* first section end */}
      <h2>
        <span className="top">New</span>
        <br />
        <span className="mainHeading">Studio Display</span>
        <p className="subHeading">A sight to be bold.</p>
        <span className="pricing">From $1599</span>
        <br />

        <div className="btnAndLink">
          <button className="button">Buy</button>
          <Link to="" className="link">
            Learn More{" "}
          </Link>
        </div>
        <img src="	https://www.apple.com/v/mac/home/bl/images/overview/hero/studio_display__cn9qj5umkwya_large.jpg"></img>
        <hr className="hr" />
          </h2>
         {/* 2nd section end  */}

          <h2>
        
        <span className="mainHeading">MacBook Pro</span>
        <p className="subHeading">Supercharged for pros.</p>
        <span className="pricing">From $1999</span>
        <br />

        <div className="btnAndLink">
          <button className="button">Buy</button>
          <Link to="" className="link">
            Learn More{" "}
          </Link>
        </div>
        <img src="https://www.apple.com/v/mac/home/bl/images/overview/hero/macbook_pro_14_16__dmqm5vr9l7yq_large.jpg"></img>
        <hr className="hr" /> 
          </h2>
          {/* 3rd section end */}



          <section className="variety">

              <h3 className="main_heading">Which Mac is right for you?</h3>
              <ul className="list">
                  <li>Notebook</li>
                  <li onClick={() => { changeState()}}>desktop</li>
              </ul>
             
             {/* if(noteBook){} */}
        </section>

    </div>
  );
};
