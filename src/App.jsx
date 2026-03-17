import {useState } from "react";
function App() {
    //creating state
    const [name, setName] = useState("rahul");
    const [age, setAge] = useState(25);
    return (
        <div>
            <h2>Name : {name}</h2>
            <h2>Age : {age}</h2>
            <button onClick={() => setName("rohit")}>Change Name</button>
            <button onClick={() => setAge(age+1)}>Increase Age</button>
        </div>
    );
}
export default App;