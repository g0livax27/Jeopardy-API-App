import { useState, useEffect } from "react";
import "./style.css";
import Header from "./components/Header";
import Score from "./components/Score";
import ScoreBtn from "./components/ScoreBtn";
import AnswerBtn from "./components/AnswerBtn";
import ShowQuestionBtn from "./components/ShowQuestionBtn";

export default function App(props) {
    const [score, setScore] = useState(0);
    const [answer, setAnswer] = useState([]);
    const [answerBtn, setAnswerBtn] = useState(false);
    const [showQuestionBtn, setShowQuestionBtn] = useState(false);
    const URL = 'http://jservice.io/api/random';

    const increase = (e) => {
        setScore(score + answer[0].value);
      };
    const decrease = (e) => {
        setScore(score - answer[0].value);
      };
    const reset = (e) => {
        setScore(0);
      };

    useEffect(() => {
        (async () => {
            try{
                const response = await fetch(URL);
                const data = await response.json();
                setAnswer(data);
            } catch(err) {
                console.error(err);
            }
        })()
    }, [answerBtn]);

    const answerToggle = () => {
        if (answerBtn) {
            setAnswerBtn(false);
        } else {
            setAnswerBtn(true);
        }
    };

    const showQuestionToggle = () => {
        if (showQuestionBtn) {
            setShowQuestionBtn(false);
        } else {
            setShowQuestionBtn(true);
        }
    }

    return(
        <div className="App">
            <div className="header">
                <Header/>
            </div>
            <div className="score-container">
                <h3>Score: <Score content={score} /></h3>
                <ScoreBtn
                    content={"Decrease"}
                    handleClick={decrease}
                    classNames={["decrease"]}
                />
                <ScoreBtn
                    content={"Increase"}
                    handleClick={increase}
                    classNames={["increase"]}
                />
                <ScoreBtn
                    content={"Reset"}
                    handleClick={reset}
                    classNames={["reset"]}
                />
            </div>
            <div className="answer-container">
                <h2>Let's Play!</h2>
                <AnswerBtn
                    content={"Get Answer"}
                    handleClick={answerToggle}
                    classNames={["answer-btn"]}
                />
                <div className="answer-info">
                    {
                        Object.keys(answer).length ? (
                            <div className="answer-info-content">
                                <h3 id="title">Category:</h3> <p>{answer[0].category.title}</p>
                                <h4 id="title">Points:</h4> <p>{answer[0].value}</p>
                                <h4 id="title">Answer:</h4> <p>{answer[0].question}</p>
                            </div>
                        ) : ("")
                    }
                </div>
            </div>
            <div className="question-container">
                <ShowQuestionBtn
                    content={"Click to Reveal Question"}
                    handleClick={showQuestionToggle}
                    classNames={["question-btn"]}
                />
                <div className="question-info">
                    {
                        Object.keys(answer).length ? (
                            showQuestionBtn ? (
                                <h3 id="reveal">{`Question: What/Who is ${answer[0].answer}?`}</h3>
                            ) : ("")
                        ) : ("")
                    }
                </div>
            </div>
        </div>
    )
};