
import {Link} from "react-router-dom";
function Nav(){


    return(

        <>
       <ul>

           <li><Link to="/">Home</Link></li>
           <li><Link to="/about">About</Link></li>
           <li><Link to="/profile">Profile</Link></li>
           <li><Link to="/post">Post</Link></li>
           
       </ul>
        
        
        </>
    )
}

export default Nav;