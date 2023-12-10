import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>Edited By: Dina Dawood</h1>
            <p> Hello World!</p>
            <img
                src="https://libawards-prod.s3.amazonaws.com/projects/images/000/002/333/large.png?1505504208"
                alt="A picture of computer science concepts"
            />
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        Some of the most used languages
                        <ul>
                            <li>Python</li>
                            <li>CSS/HTML/Javascript</li>
                            <li>C++</li>
                            <li>Java</li>
                        </ul>
                        <div
                            style={{
                                width: 50,
                                height: 200,
                                backgroundColor: "red"
                            }}
                        >
                            this will place a red-filled rectangle in each
                            column
                        </div>
                    </Col>
                    <Col>
                        Meme
                        <img
                            height="30%"
                            width="30%"
                            src="https://vincentdnl.com/_next/image?url=%2Fimages%2Fblog%2Fprogramming-memes%2Fsemicolon2.jpg&w=1080&q=75"
                            alt="A picture of a missing semi-colon meme"
                        />
                        <p></p>
                        <img
                            height="30%"
                            width="30%"
                            src="https://miro.medium.com/v2/resize:fit:1400/0*z1mm6izqSeDiKukb"
                            alt="A picture of commenting out code in programming"
                        />
                        <div
                            style={{
                                width: 50,
                                height: 200,
                                backgroundColor: "red"
                            }}
                        >
                            this will place a red-filled rectangle in each
                            column
                        </div>
                    </Col>
                </Row>
            </Container>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
