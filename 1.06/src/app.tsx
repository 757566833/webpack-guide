import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component {
    public render() {
        return (
            <div>
             hello react
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById("root"));