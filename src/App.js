import Button from "./Button";
import styles from "./App.module.css"
import {useState, useEffect} from "react";

function App() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("");
    const onClick = () => setValue(prevState => prevState + 1);
    const onChange = (event) => setKeyword(event.target.value);
    console.log("i run all time");
    useEffect(() => {
        console.log("i run only once...");
    }, []);
    useEffect(() => {
        if(keyword !== "" && keyword.length > 5) {
            console.log("SEARCH FOR", keyword);
        }
    }, [keyword]);
    useEffect(() => {
        if(counter > 0){
            console.log("Counter increase");
        }
    }, [counter]);
    useEffect(() => {
        console.log("keyword and counter change");
    }, [keyword, counter]);
    return (
        <div>
            <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."/>
            <h1 className={styles.title}>{counter}</h1>
            <Button text={"click me"} onClickFunc={onClick}/>
        </div>
    );
}

export default App;
