import { useDispatch, useSelector } from "react-redux";
import "./App.css";

import { getProduct } from "./redux-config/ProductSlice";

function App() {
  const { productList } = useSelector((store) => store.product);

  const dispatch = useDispatch();
  const fetchData = () => {
    dispatch(getProduct());
    console.log(productList);
  };
  return (
    <>
      <div>{<button onClick={() => fetchData()}>Click</button>}</div>
    </>
  );
}

export default App;
