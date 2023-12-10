import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h5>UD CISC275 with React Hooks and TypeScript</h5>
                <p>
                    <h5>Edited By: Dina Dawood</h5>
                </p>
            </header>
            <p></p>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/University_of_Delaware_wordmark.svg/1280px-University_of_Delaware_wordmark.svg.png"
                alt="UD Logo"
                height="10%"
                width="10%"
            />
            <p></p>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <div>
                        <p></p>
                        <b>Memes</b>
                        <p></p>
                        <img
                            height="150px"
                            width="200px"
                            src="https://vincentdnl.com/_next/image?url=%2Fimages%2Fblog%2Fprogramming-memes%2Fsemicolon2.jpg&w=1080&q=75"
                            alt="A picture of a missing semi-colon meme"
                        />
                        <img
                            height="150px"
                            width="200px"
                            src="https://miro.medium.com/v2/resize:fit:1400/0*z1mm6izqSeDiKukb"
                            alt="A picture of commenting out code in programming"
                        />
                    </div>
                </Row>
            </Container>
            <hr></hr>
            <DoubleHalf></DoubleHalf>
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
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
