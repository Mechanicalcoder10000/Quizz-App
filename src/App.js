

import './App.css';
import Header from './Zomato/Header1';
import {Routes,Route} from "react-router-dom";
import Footer from './Zomato/Footer';
import Home from './Zomato/Home';
import Result from './Zomato/Result';
import Quiz from './Zomato/Quiz';
import axios from 'axios';

import { useState } from 'react';
function App() {
const[name,setName]=useState();
const[questions,setQuestions]=useState();
const[score,setScore]=useState(0);


  const fetchQuestions=async (category="",difficulty="")=>{

    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
          setQuestions(data.results);
  

}

  return(


  


   

<div className="app">

      <div  className="new_app" >
        <Header></Header>
        <Routes>
          <Route  path="/" element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions} />}  />
          <Route  path="/quiz" element={<Quiz name={name} score={score} setScore={setScore} questions={questions} setQuestions={setQuestions} />}  />
          <Route  path="/result" element={<Result name={name} score={score} setscore={setScore}/>}  />
         
     
        </Routes>
    
      </div>
      <Footer ></Footer>
      
    

               


  












</div>


 
 
  );
}

export default App;
