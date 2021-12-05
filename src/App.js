import react, { useState, useEffect } from "react";

function useLocalStorage(itemName, value = "") {
  const [state, setState] = useState(() => {
    console.log("initialize");
    return window.localStorage.getItem(itemName) || "";
  });

  useEffect(() => {
    console.log(itemName);
    window.localStorage.setItem(itemName, state);
  }, [state]);

  return [state, setState];
}

function App() {
  const [keyword, setKeyword] = useLocalStorage("keyword");
  const [result, setResult] = useLocalStorage("result");
  const [typing, setTyping] = useLocalStorage("typing", false);

  console.log("render");

  function handleChange(event) {
    setKeyword(event.target.value);
    setTyping(true);
  }

  function handleClick() {
    setTyping(false);
    setResult(`We find results of ${keyword}`);
  }

  return (
    <div className="App">
      <input onChange={handleChange} value={keyword} />
      <button onClick={handleClick}>search</button>
      <p>{typing ? `Looking for ${keyword}...` : result}</p>
    </div>
  );
}

export default App;
