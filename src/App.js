import React from "react";
import webpackImg from './images/webpack.png';
import "./styles/app.scss";

const App = () =>{
    return (
        <>
            <h1>
                Hello world! I am using React
            </h1>

            <h1 className="text-primary text-4xl font-bold">Hello world! I am using React</h1>

            {/* <div className="centerImageContainer">
                <img src={webpackImg}></img>
            </div> */}
        </>
    )
}

export default App