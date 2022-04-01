import { Mac } from "../Components/MacComponent/MacComponent";
import { Routes, Route } from "react-router"
import {Studio} from "../Components/Mac Studio/Studio"



export const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="" element={<Mac />} />
                <Route path="/mac-studio" element={<Studio/>}/>

            </Routes>
        
        </>
    )
}