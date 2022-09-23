import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    return (
        <>
            <h1>Quarion Project</h1>
            <h2>Quarion Project</h2>
        </>
    );
};

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
