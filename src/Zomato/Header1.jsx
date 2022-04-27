import {Link} from "react-router-dom";

function Header(){



    return(


      <div className="    hed"><Link to="/" style={{textDecoration:"none",color:"black",fontSize:'3em',display:"flex" ,justifyContent:"center",alignItems:"center"}} >Intuitive quiz hub</Link>
      
      <hr  className="divider"       />
      
      </div>
 
        
      

    )
}

export default Header;