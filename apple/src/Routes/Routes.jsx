import { Mac } from "../Components/MacComponent/MacComponent";
import {Routes, Route} from "react-router"



export const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="" element={ <Mac/>}/>

            </Routes>
        
        </>
    )
}