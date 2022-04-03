import "./Mac.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Notebook } from "../Notebook Models/Notebooks";
import { Desktop } from "../Desktop Models/Desktop";
import { Safari , Photo , IMovies , GarageBand,Pages, Numbers, Keynote} from "../Built App/BuiltApp";

import { Logic, Main, Final, Motion, Compressor } from "../Pro apps/Pro"

export const Mac = () => {
  const [isToggled, setIsToggled] = useState(true);
  const [app, setApp] = useState("safari")
  const [pro, setPro] = useState("logic")

  // function changeState() {
  //     setNoteBook(false)
  // }
  return (
    <div>
      <h2 className="outer">
        <span className="top">New</span>
        <br />
        <span className="mainHeading">Mac Studio</span>
        <p className="subHeading">Empower station</p>
        <span className="pricing">From $1999</span>
        <br />

        <div className="btnAndLink">
          <Link to="/mac-studio"> <button className="button"> Buy</button></Link>
         
          <Link to="" className="link">
            Learn More
          </Link>
        </div>
        <img src="./images/mac1.jpg"></img>
      </h2>
        <hr className="hr" />
      {/* first section end */}
      <h2 className="h2">
        <span className="top">New</span>
        <br />
        <span className="mainHeading">Studio Display</span>
        <p className="subHeading">A sight to be bold.</p>
        <span className="pricing">From $1599</span>
        <br />

        <div className="btnAndLink">
        <Link to="/mac-studio"> <button className="button"> Buy</button></Link>
          <Link to="" className="link">
            Learn More{" "}
          </Link>
        </div>
        <img src="./images/mac_comp2.jpg"></img>
        <hr className="hr" />
      </h2>
      {/* 2nd section end  */}

      <h2 className="h2">
        <span className="mainHeading">MacBook Pro</span>
        <p className="subHeading">Supercharged for pros.</p>
        <span className="pricing">From $1999</span>
        <br />

        <div className="btnAndLink">
        <Link to="/mac-studio"> <button className="button"> Buy</button></Link>
          <Link to="" className="link">
            Learn More{" "}
          </Link>
        </div>
        <img src="./images/mac3.jpg"></img>
        <hr className="hr" />
      </h2>
      {/* 3rd section end */}

      <section className="variety">
        <h3 className="main_heading">Which Mac is right for you?</h3>
        <ul className="list">
          <li onClick={() => setIsToggled(true)}>Notebook</li>
          <li onClick={() => setIsToggled(false)}>Desktop</li>
        </ul>

        {isToggled ? <Notebook /> : <Desktop />}
      </section>

      <section className="variety">
        <h1 className="mainHeading">Built-In Apps</h1>
        <p className="info">
          Built-in Apps Powerful creativity and productivity tools live inside
          every Mac — apps that help you explore,
          <br /> connect, and work more efficiently.
        </p>

        <div className="app">
          <div className="appCard">
            <img onClick={()=> setApp("safari")} src="./images/app1.png" alt="" />
            <img onClick={()=> setApp("photo")} src="./images/app2.png" alt="" />
            <img onClick={()=> setApp("imovies")} src="./images/app3.png" alt="" />
            <img onClick={()=> setApp("garage")} src="./images/app4.png" alt="" />
            <img onClick={()=> setApp("pages")} src="./images/app5.png" alt="" />
            <img onClick={()=> setApp("numbers")} src="./images/app6.png" alt="" />
            <img onClick={()=> setApp("keynote")} src="./images/app7.png" alt="" />
            
          </div>
          {(app === "safari") && <Safari></Safari>}
          {(app === "photo") && <Photo></Photo>}
          {(app === "imovies") && <IMovies></IMovies>}
          {(app === "garage") && <GarageBand></GarageBand>}
          {(app === "pages") && <Pages></Pages>}
          {(app === "numbers") && <Numbers></Numbers>}
          {(app === "keynote")&&<Keynote></Keynote>}
            
        </div>
      </section>







      <section className="variety">
        <h1 className="mainHeading">Pro Apps</h1>
        <p className="info">
        For professionals ready to push their creativity, these industry-leading apps offer maximum control <br /> over editing, processing, and output of music and film.
        </p>

        <div className="app">
          <div className="appCard">
            <img onClick={()=> setPro("logic")} src="./images/pro1.png" alt="" />
            <img onClick={()=> setPro("main")} src="./images/pro2.png" alt="" />
            <img onClick={()=> setPro("final")} src="./images/pro3.png" alt="" />
            <img onClick={()=> setPro("motion")} src="./images/pro4.png" alt="" />
            <img onClick={()=> setPro("compressor")} src="./images/pro5.png" alt="" />
           
          </div>
          {(pro === "logic") && <Logic></Logic>}
          {(pro === "main") && <Main></Main>}
          {(pro === "final") && <Final></Final>}
          {(pro === "motion") && <Motion></Motion>}
          {(pro === "compressor") && <Compressor></Compressor>}
         
            
        </div>
      </section>



      <section className="getmore">
        <h2 className="mainHeading" >Get more out of Mac</h2>
        <div className="subgroup">
          <div className="vertual">
            <h3 className="sub">Today at Apple</h3>
            <h2 className="main">Virtual Sessions</h2>
            <p className="last">Learn the basics of using Mac <br />
              live with Apple Creatives.</p>
            <Link to="#" className="link">Signup</Link>
          </div>
          <img src="./images/get1.jpg" alt="" />

        </div>
      </section>



      <section className="logo" >
        <div className="subgroup">

        <img src="./images/logos.jpg" alt="" />
          <div>
            <img src="./images/logo2.jpg" alt="" />
            <h3 className="sub">Bundle up to six Apple services. <br />
              And enjoy more for less.</h3>
            <Link to="#" className="link" >Try it free</Link>
            <Link to= "#" className="link" >Learn more {">"}</Link>
        </div>

        </div>


      </section>


    </div>
  );
};
