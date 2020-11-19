import React  from "react";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Navbar(){
    
    return <div >
        <label htmlFor="chk"><MoreHorizIcon id="whenShrink" /></label>
        <input type="checkbox" id="chk" ></input>
        <ul>
            <li><button>Products</button></li>
            <li><button >Features</button></li>
            <li><button >Use Cases</button></li>
            <li><button >Pricing</button></li>
            <li><button className="active">Login</button></li>
        </ul>
    </div>
}

export default Navbar;
// #hello there