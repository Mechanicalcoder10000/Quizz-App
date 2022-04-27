import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import {Link} from "react-router-dom";

import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function Questions({currQues,setCurrQues,questions,options,correct,setScore,score,setQuestions}){

     console.log(currQues);
     const [selected, setSelected] = useState();
     const[error,setError]=useState(false);
     const history=useNavigate();

     const handleselect=(i)=>{

      if(selected===i  && selected===correct){
        return "select";
      }
      else if(selected===i && selected!==correct){
        return "wrong";
      }
      else if(i===correct){
        return "select";
      }
     }
     const  handleCheck=(i)=>{
       setSelected(i);
       if(i===correct) setScore(score+1);
       setError(false);

     }

     function handleQuit(){
      setCurrQues(0);
      setQuestions();

     }
function handleNext(){
  if(currQues>8){
  

    history("/result")

  }
  else if(selected){
    setCurrQues(currQues+1);
    setSelected();

  }
  else{
    setError("please select the option")
  }
}


    return(



        <div className="question_head"><h2> Question : {currQues+1}</h2>
        
        <div className="question_maindiv">{questions[currQues].question}</div>
        {error && <ErrorMessage>{error}</ErrorMessage>}
<div className="optionss">  
          {options &&
            options.map((i) => (
              <button
              onClick={()=>{handleCheck(i)}}
              className={`singleOption  ${selected && handleselect(i)}`}
              key={i}
              disabled={selected}
                
              >
                {i}
              </button>
            ))}</div>

            <div className="controls">
             <Link to="/"><Button onClick={handleQuit}>Quit</Button></Link> 
              <Button  onClick={handleNext}>Next Question</Button>
            </div>
      
      </div>
        
    )
}
export default Questions;