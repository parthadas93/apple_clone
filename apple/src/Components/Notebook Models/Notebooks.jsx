import "./models.css";
import "../MacComponent/Mac.css";
import { Link } from "react-router-dom";

export const Notebook = () => {
  return (
    <>
      <div className="modelImage">
        <div className="modelCard">
          <img src="./images/notebook1.png" />

          <h4 className="productName">MacBook Air</h4>
          <p className="price">From $599</p>
          <button className="button">Buy</button>
          <br />
          <Link to="#" className="link">
            Learn More
          </Link>
        </div>

        <div className="modelCard">
          <img src="./images/notebook2.png" />

          <h4 className="productName">MacBook Pro 13''</h4>
          <p className="price">From $599</p>
          <button className="button">Buy</button>
          <br />
          <Link to="#" className="link">
            Learn More
          </Link>
        </div>

        <div className="modelCard">
          <img src="./images/botebook3.png" />

          <h4 className="productName">MacBook Air</h4>
          <p className="price">From $599</p>
          <button className="button">Buy</button>
          <br />
          <Link to="#" className="link">
            Learn More
          </Link>
        </div>
      </div>

      {/* -----------1st part end------- */}

      <div className="gridContainer">
        <div className="gridItem">
          <img
            src="./images/icon1.png"
            alt=""
          />
          <h5>Apple M1 chip</h5>
        </div>
        <div className="gridItem">
          <img
            src="./images/icon1.png"
            alt=""
          />
          <h5>Apple M1 chip</h5>
        </div>
        <div className="gridItem">
          <img
            src="./images/icon12.png"
            alt=""
          />
          <h5>Apple M1 Pro chip or Apple M1 Max chip</h5>
        </div>
        <div className="gridItem">
          <h3>8-Core</h3>
          <h5>CPU</h5>
        </div>
        <div className="gridItem">
          <h3>8-Core</h3>
          <h5>CPU</h5>
        </div>
        <div className="gridItem">
          Up-to
          <h3>10-Core</h3>
          <h5>CPU</h5>
        </div>
        <div className="gridItem">
          <h3>8-Core</h3>
          <h5>GPU</h5>
        </div>
        <div className="gridItem">
          <h3>8-Core</h3>
          <h5>GPU</h5>{" "}
        </div>
        <div className="gridItem">
          Up-to
          <h3>32-Core</h3>
          <h5>GPU</h5>
        </div>
        <div className="gridItem">
          <img
            src="./images/spclicon.png"
            alt=""
          />
          <h5>Up to 16 GB unified memory</h5>
        </div>
        <div className="gridItem">
          <img
            src="./images/spclicon.png"
            alt=""
          />
          <h5>Up to 16 GB unified memory</h5>
        </div>
        <div className="gridItem">
          <img
            src="./images/spclicon.png"
            alt=""
          />
          <h5>Up to 64 GB unified memory</h5>
        </div>
        <div className="gridItem">
          <h3>2-TB</h3>
          <h5>Maximum configurable storage1</h5>{" "}
        </div>
        <div className="gridItem">
          <h3>2-TB</h3>
          <h5>Maximum configurable storage1</h5>{" "}
        </div>
        <div className="gridItem">
          <h3>8-TB</h3>
          <h5>Maximum configurable storage1</h5>{" "}
        </div>

        <div className="gridItem">
          <h3>13.3"</h3>
          <h5>Ratina Display</h5>{" "}
        </div>
        <div className="gridItem">
          <h3>13.3"</h3>
          <h5>Ratina Display</h5>{" "}
        </div>
        <div className="gridItem">
          <h3>14.2" or 16.2</h3>
          <h5>Ratina Display</h5>{" "}
        </div>
      </div>

      <section className="built_in_apps"></section>
    </>
  );
};
