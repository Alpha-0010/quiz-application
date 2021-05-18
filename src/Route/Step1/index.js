import React from "react";
import {Input, Button, Progress,Divider} from "antd";

const Step1 = () =>{
    return(
        <div style={{padding: '1rem',border: '1px solid grey',borderRadius: '4px',maxWidth: 400, margin: '3rem auto'  }}>
            <h1>Quiz Game</h1>

            <Progress percent={50} status="active"/>

            <div style={{ display: "flex",justifyContent: 'space-between' }}>
                <h2>Step1</h2>
                <h2>1/5</h2>
            </div>
            <span style={{ marginBottom: 0,color: 'grey' }}>Current Prime Minister of India</span>
            {/* <h2>Voca</h2> */}
            <br/>
            <br/>
            <br/>
            <div style={{ fontSize: '1rem' }}>
                Answer the Problem <span style={{ color: 'red' }}>in one line.</span>
            </div>



            <form style={{ padding: '1rem 0' }}>
                <div style={{ display: 'flex' }}>
                    <Input
                    name="value"
                    onChange
                    id="value"
                    type="text"
                    />
                    <Button
                    className
                    type="submit"
                    onClick
                    >
                    Submit
                    </Button>
                </div>
            </form>

            {/* Timer */}
            <div style={{ display: 'flex',justifyContent: 'space-betweeen', }}>
                <Button>5</Button>
                <Button>4</Button>
                <Button>3</Button>
                <Button>2</Button>
                <Button>1</Button>
                <Button>
                    Click to Restart!
                </Button>
            </div>

            <Divider />

            {/* Result */}
            <h3>
                Wrong! Correct Answer:
            </h3>
            <div>
            <li style={{ display: "block" }}>
                <p>
                    icon answer
                </p>
            </li>
            </div>

            <h1>Review the wrong answers!</h1>

            <div>
                <ul>
                    <li>answer</li>
                </ul>
            </div>

            <div style={{ display: "flex",justifyContent: "space-evenly", }}>
                <Button>Retry</Button>
                <Button>Step2</Button>
            </div>

        </div>
    );
};

export default Step1;