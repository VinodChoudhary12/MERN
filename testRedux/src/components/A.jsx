import { useSelector, useDispatch } from "react-redux";
import { incrementCounter } from "../reduce-config/CounterSlice";

function A() {
    const { counter } = useSelector((store) => store.Data);
    const dispatch = useDispatch()
    return (

        <>

            <button onClick={() => { dispatch(incrementCounter()) }} >Increment {counter}</button>
        </>

    )
}

export { A };