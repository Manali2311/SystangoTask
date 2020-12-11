import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';

function Header(){
    return(
        <div className="outerheader">
            <div className="innerheader">
            <img style={{display:"none"}} src={process.env.PUBLIC_URL + "/Images/icon.png"} height="75px" alt="Football" />
                
               <div>
                <NavLink to="/" exact activeClassName="design" style={{textDecoration:"none",color:"antiquewhite"}}>
                    <div className="teams">
                        Compose Team
                    </div>
                    </NavLink>
                </div>
               <div>
               <NavLink to="/Quarter" activeClassName="design" style={{textDecoration:"none",color:"antiquewhite"}}>
               <div className="teams2">
                    First Quarter
                    </div>
               </NavLink>
               </div>
            </div>
        </div>
    )
}
export default Header;