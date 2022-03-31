import "./models.css"
import {Link} from "react-router-dom"

export const Notebook = () => {
    return (
        <>
        
            <div className="modelImage">
                <div>
                    <img src="https://www.apple.com/v/mac/home/bl/images/overview/compare/compare_mba__fchj615oz0yi_large.png" />
               
                    <h4 className="productName">MacBook Air</h4>
                    <p className="price">From $599</p>
                    <button className="button">Buy</button>
                    <br/>
                    <Link to= "#">Learn More</Link>
                </div>
        </div>
        <div></div>
        
        
        
        
        </>
    )
}