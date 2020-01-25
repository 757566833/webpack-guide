import React from "react";
import ReactDOM from "react-dom";
import './app.css'
import './app.less'
import './app.scss'
class App extends React.Component {
    public render() {
        return (
            <div>
                <div className='red'>hello red</div>
                <div className='green'>hello green</div>
                <div className='blue'>hello blue</div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));