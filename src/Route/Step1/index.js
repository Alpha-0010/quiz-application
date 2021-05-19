import React, { Component } from "react";
import {Input, Button, Progress,Divider} from "antd";
import {level1} from "../../datas";


class Step1 extends Component {

    state={
        value: "", // Input Value.
        timeOut: false,
        round: 0,
        timer: 10,
        wrongAnswer: "", // Wrong answer made
        wrongAnswers: [] // All wrong Answers made.
    }

    componentDidMount(){
        this.startTimeOut()
    }

    startTimeOut = () => {
        this.timeout=setTimeout(() => {
            this.setState({timeOut: true})
        },10000) // After 10s later make the timeOut true.

        this.interval = setInterval(() => {
            this.setState({timer: this.state.timer -1})
        },1000)  // Decrement the timer every 1s.
    }

    componentDidUpdate(){  // If the timer becomes 0 then clearInterval.
        if(this.state.timer===0){
            clearInterval(this.interval)
        }
    }

    componentWillUnmount(){
        clearTimeout(this.timeout)
        clearInterval(this.interval)
    }

    handleRestart = () => {
        //1. set state  timer : 0
        this.setState({ timer: 10, timeOut: false, wrongAnswer: "" })

        //2. trigger startTimeOut again 
        this.startTimeOut();
    }


    handleChange = (event) => {
        this.setState({ value: event.target.value })
    }  // When typing the answer, trigger change event and change the input value.
    
    handleSubmit = (event) => {
        event.preventDefault();

        if (this.state.timeOut) return alert("Please click restart button to keep doing it");

        if (!this.state.value.trim()) return alert("Please Type something first!")

        this.setState({ value: "", wrongAnswer: "" })

        //we need to check if our answer is right or not  
        this.checkMatched()

    }


    checkMatched = () =>{

        // true
        if(level1[this.state.round].answer==this.state.value){
            // Then simply increment the round.
            this.setState({ round: this.state.round + 1, timer: 10, wrongAnswer: "" }, () => {
                //stop the setTimeout and start new setTimeout,  not for setInterval 
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.setState({ timeOut: true })
                }, 10000)
            })
        }else{  // false
            // Increment the round and show the answer for the wrong attempt.
            this.setState({
                wrongAnswer: `${level1[this.state.round].answer}`
            }, () => {
                this.setState({
                    round: this.state.round + 1, timer: 10,
                    wrongAnswers: this.state.wrongAnswers.concat(level1[this.state.round].question)
                })
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.setState({ timeOut: true })
                }, 10000)
            })

        }
    }

    handleRedirect = () => {
        setTimeout(() => {
            window.location.reload();
        }, 10);
    }



    render(){
    return(
        <div style={{padding: '1rem',border: '1px solid grey',borderRadius: '4px',maxWidth: 400, margin: '3rem auto'  }}>
            {this.state.round < level1.length ?
            <>
            <h1>Quiz Game</h1>

            <Progress percent={this.state.round / level1.length * 100} status="active" />

            <div style={{ display: "flex",justifyContent: 'space-between' }}>
                <h2>Step1</h2>
                <h2>{this.state.round}/{level1.length}</h2>
            </div>
            <span style={{ marginBottom: 0,color: 'grey' }}>Question: </span>
            <h2>{level1[this.state.round].question}</h2>
            <hr />
          
            <div style={{ fontSize: '1rem' }}>
                Answer the Problem <span style={{ color: 'red' }}>in one line.</span>
            </div>



            <form style={{ padding: '1rem 0' }} onSubmit={this.handleSubmit}>
                <div style={{ display: 'flex' }}>
                    <Input
                    name="value"
                    onChange={this.handleChange}
                    value={this.state.value}
                    id="voca"
                    type="text"
                    />
                    <Button
                    className
                    type="submit"
                    onClick={this.handleSubmit}
                    >
                    Submit
                    </Button>
                </div>
            </form>

            {/* Timer */}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Button className={`${this.state.timer <= 8 && 'disabled'}`}>5</Button>
                            <Button className={`${this.state.timer <= 6 && 'disabled'}`}>4</Button>
                            <Button className={`${this.state.timer <= 4 && 'disabled'}`}>3</Button>
                            <Button className={`${this.state.timer <= 2 && 'disabled'}`}>2</Button>
                            <Button className={`${this.state.timer <= 0 && 'disabled'}`}>1</Button>
                            <Button
                                onClick={this.handleRestart}
                                style={{ display: this.state.timeOut ? 'block' : 'none' }}
                            >
                                Click to Restart!
                            </Button>
            </div>

            {/* Result */}
            {this.state.wrongAnswer && (
                            <React.Fragment>
                                <Divider />
                                <h3>Wrong! Correct answer: </h3>
                                <div>
                                    <li style={{ display: 'block' }}>
                                        <p
                                        >
                                        {this.state.wrongAnswer}
                                        </p>
                                    </li>

                                </div>
                            </React.Fragment>
            )}

            </>
            :
            <>
                <h1>Reviews the wrongly answered questions</h1>
                {this.state.wrongAnswers.map((answer, index) => (
                    <div key={index}>
                        <ul>
                            <li>
                                {answer}
                            </li>

                        </ul>
                    </div>
                ))}
                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <Button onClick={this.handleRedirect}>Retry</Button>
                </div>
            </>
        }
    </div>
)
}
}

export default Step1;