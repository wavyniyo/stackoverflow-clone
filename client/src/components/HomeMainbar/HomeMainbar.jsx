import React from 'react'
import {useLocation , useNavigate} from 'react-router-dom'

import './HomeMainbar.css'
import QuestionList from './QuestionList'
import { useSelector } from 'react-redux'

const HomeMainbar = () => {

  const location = useLocation() ;
  const user = 1 ;
  const navigate = useNavigate() ;

  const questionsList = useSelector(state =>state.questionsReducer )
  //console.log(questionsList)

  // var questionsList = [{ 
  //       _id: 1,
  //       upVote: 3,
  //       downVote: 2,
  //       noOfAnswers: 3,
  //       questionTitle: "What is a function?",
  //       questionBody: "It meant to be",
  //       questionTags: ["java", "node js", "react js", "mongo db", "express js"],
  //       userPosted: "niyo",
  //       userId: 1,
  //       askedOn: "jan 1",
  //       answer: [{
  //           answerBody: "Answer",
  //           userAnswered: 'kyo-sohma',
  //           answeredOn: "jan 2",
  //           userId: 2,
  //       }]
  //   },{ 
  //       _id: 2,
  //       upVote: 3,
  //       downVote: 3,
  //       noOfAnswers: 1,
  //       questionTitle: "What is a function?",
  //       questionBody: "It meant to be",
  //       questionTags: ["javascript", "R", "python"],
  //       userPosted: "sana",
  //       askedOn: "jan 1",
  //       userId: 1,
  //       answer: [{
  //           answerBody: "Answer",
  //           userAnswered: '',
  //           answeredOn: "jan 2",
  //           userId: 2,
  //       }]
  //   },{ 
  //       _id: 3,
  //       upVote: 9,
  //       downVote: 5,
  //       noOfAnswers: 0,
  //       questionTitle: "What is a function?",
  //       questionBody: "It meant to be",
  //       questionTags: ["javascript", "R", "python"],
  //       userPosted: "neetu",
  //       askedOn: "jan 1",
  //       userId: 1,
  //       answer: [{
  //           answerBody: "Answer",
  //           userAnswered: 'Singh',
  //           answeredOn: "jan 2",
  //           userId: 2,
  //       }]
  //   }]

  const checkAuth = () => {
    if (user === null ) { 
      alert("login or signup to ask a question");
      navigate("/Auth");
    } else {
      navigate("/AskQuestion");
    }
  };

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions </h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <button onClick={checkAuth} className="ask-btn">
          Ask Question
        </button>
      </div>
      <div>
        { questionsList.data === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionsList.data.length} questions</p>
            <QuestionList questionsList={questionsList.data} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainbar ;
