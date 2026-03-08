import React from "react";
import LeftNavbar from "./LeftNavbar";
import RightNavbar from "./RightNavbar";

export default function Navbar(){
    return(
        <div className="flex items-center justify-between h-[70px] px-5 bg-gray-100 relative pr-15">
            {/* // left component - logo and name
            // right component - login/signup buttons */}
            <LeftNavbar/>
            <RightNavbar/>
        </div>
    )
}