import "./Studio.css"
import { Link } from "react-router-dom"

export const Studio = () => {
    return (
        <>
            <div className="topdiv">
                <h3>Mac Studio</h3>
                <div className="subdiv">

                <h5>Overview</h5><h5>Mac Os</h5><h5>Tech Specs</h5>
                </div>
            </div>
            <hr />
            <div className="para">
                Pay for your new Mac over 12 months at 0% APR with Apple Card.Footnote Just choose Apple Card Monthly Installments when you check out to apply. <br />
                <Link to="#" className="link" >Learn more</Link>
            </div>


            <div> 
                <h5 className="top">New</h5>
                <h1 className="main_heading">Choose your Mac Studio</h1>
                <h3 className="buying_mac">Have questions about buying a Mac?</h3>
                <Link to="#" className="link">Chat with a Mac Specialist. </Link>

            </div>

            <div className="imgdiv">
                <img src="./images/studio.jpg" alt="" />
                <img src="./images/studio.jpg" alt="" />

            </div>

            <div className="spce">


                <div></div>
                <div></div>

            </div>
        
        
        
        
        
        
        </>
    )
}