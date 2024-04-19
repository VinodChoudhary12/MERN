
import { useDispatch, useSelector } from 'react-redux'
// import { decreamentCounter } from './reduce-config/CounterSlice'
import { decreamentCounter } from "./reduce-config/CounterSlice";
import { A } from './components/A'
import './App.css'


function App() {
  // const { counter } = useSelector((store) => store.Data)
  const { counter } = useSelector((store) => store.Data);
  const dispatch = useDispatch()


  return (
    <>
      <h1>Counter : {counter}</h1>
      <button onClick={() => dispatch(decreamentCounter())} > Decrement Counter : {counter}</button>
      <hr />
      <A />
    </>
  )
}

export default App
