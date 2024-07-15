import { useState } from "react";
import Heading from "./Heading";
import Timing from "./Timing";
import Input from './Input'
import Data from "./Data";

function MainComponent() {
    const [tasks, setTasks] = useState([]);
    return (<>
        <Heading />
        <Timing />
        <Input tasks={tasks} setTasks={setTasks} />
        <Data tasks={tasks} setTasks={setTasks} />
    </>);
}

export default MainComponent;