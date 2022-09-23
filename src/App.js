import MyButton from "./MyButton.js";
import Footer from "./Footer.js";
import { useState } from 'react'


function App() {
    const numbers = [1, 2, 3, 4, 5];
    const [count, setCount] = useState(numbers[1])
    function updateCount() {
        setCount((count ** 2))
    }

    return (
        <>
            <h1>Hello World</h1>
            <MyButton></MyButton>
            <p>This is some HTML before the footer</p>
            <p>Some more HTML added on a git branch</p>
            <h1>Count : {count}</h1>
            <button onClick={updateCount}>Click Me</button>



            <Footer></Footer>
        </>
    );
}

export default App;

