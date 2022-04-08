import { useState, useEffect } from "react";
import "./style.css";
import Header from "./components/Header";

export default function App(props) {
    const [question, setQuestion] = useState([]);
    const [questionBtn, setQuestionBtn] = useState(false);
    const [revealBtn, setRevealBtn] = useState(false);
    const URL = 'http://jservice.io/api/random';

    useEffect(() => {
        (async () => {
            try{
                const response = await fetch(URL);
                const data = await response.json();
                setQuestion(data);
            } catch(err) {
                console.error(err);
            }
        })()
    }, [questionBtn]);

    const handleQuestionToggle = () => {
        if (questionBtn) {
            setQuestionBtn(false);
        } else {
            setQuestionBtn(true);
        }
    };

    const revealQuestionToggle = () => {
        if (revealBtn) {
            setRevealBtn(false);
        } else {
            setRevealBtn(true);
        }
    }

    return(
        <div className="App">
            <div className="header">
                <Header/>
            </div>
            <div className="container">
                <div className="question">
                    <h2>Let's Play!</h2>
                    <button className="question" onClick={handleQuestionToggle}>Get Question</button>
                </div>
            </div>
            <div className="info">
                {
                    Object.keys(question).length ? (
                        <div className="info-child">
                            <h3>Category: {question[0].category.title}</h3>
                            <h3>for {question[0].value} Points</h3>
                            <h3>Answer: {question[0].question}</h3>
                        </div>
                    ) : ("")
                }
            </div>
            <div className="reveal">
                <button className="answer" onClick={revealQuestionToggle}>Reveal Question</button>
            </div>
            <div className="reveal-question">
                {
                    Object.keys(question).length ? (
                        revealBtn ? (
                            <h3>Question: {question[0].answer}</h3>
                        ) : ("")
                    ) : ("")
                }
            </div>
        </div>
    )
};