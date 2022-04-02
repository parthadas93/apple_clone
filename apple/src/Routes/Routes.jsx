import { Mac } from "../Components/MacComponent/MacComponent";
import { Routes, Route } from "react-router"
import { Studio } from "../Components/Mac Studio/Studio"
import { Ipad } from "../Components/ipad/Ipad";
import { Checkout } from "../Components/Checkout/Checkout"
import { Payment } from "../Components/Payment/Payment";



export const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Mac />} />
                <Route path="/mac-studio" element={<Studio/>}/>
                <Route path="/ipad" element={<Ipad />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/payment" element={<Payment/>} />
            </Routes>
        
        </>
    )
}