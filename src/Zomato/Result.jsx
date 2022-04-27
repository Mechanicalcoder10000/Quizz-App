import { Button } from "react-bootstrap"
import {Link} from "react-router-dom"

function Result(props){

function handlescore(){

    props.setscore(0);
}
    return(


        <>
        <h2 className="div2">hey, {props.name} your Score is: {props.score}</h2>
        
       <Link to="/"><Button style={{marginLeft:"10rem"}} onClick={handlescore}>Go to homepage</Button></Link>
        
        
        
        </>
    )
}
export default Result;