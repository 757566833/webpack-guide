import {Button} from "antd";
import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component {
    public render() {
        return (
            <div>
                <Button >hello antd</Button>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
