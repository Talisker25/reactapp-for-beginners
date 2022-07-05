import Button from "./Button";
import styles from "./App.module.css"
import {useState, useEffect} from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue(prevState => prevState + 1);
  console.log("i run all time");
  useEffect(() => {
      console.log("call api");
  }, []);
    return (
      <div>
          <h1 className={styles.title}>{counter}</h1>
          <Button text={"click me"} onClickFunc={onClick}/>
      </div>
  );
}

export default App;
