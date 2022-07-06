import {useState, useEffect} from "react";

function Hello(){
    useEffect(function() {
        console.log("hi :)");
        return () => console.log("bye :(");
    }, []);
    return <h1>Hello</h1>
}

function App() {
    const [showing, setShowing] = useState(false);
    const onClick = () => {
        setShowing(prevState => !prevState);
    }
    return (
        <div>
            {showing ? <Hello/> : null}
            <button onClick={onClick}>
                {showing ? "hide" : "show"}
            </button>
        </div>
    );
}

export default App;
