
import { useDispatch, useSelector } from 'react-redux'
import './App.css'

import { getProduct } from './redux-config/ProductSlice';

function App() {

  const { productList } = useSelector((store) => store.product);

  const dispatch = useDispatch();
  const fetchData = () => {
    dispatch(getProduct())
    console.log(productList);
  }
  return (
    <>
      <div>
        {
          <button onClick={() => fetchData()}>Click</button>
          
        }
      </div>
    </>
  )
}

export default App



// function App() {


//   useEffect(() => {
//     dispatch(getProduct());
//   }, [])
//   return <>
//     <div className="d-flex justify-content-center align-items-center bg-danger" style={{ height: "50px" }}>
//       <h3 className="text-white">Thunk App</h3>
//     </div>
//     {isLoading ? <div className="spinner d-flex justify-content-center align-items-center" style={{ height: "500px" }}>
//       <div className="spinner-border text-muted"></div>
//       <div className="spinner-border text-primary"></div>
//       <div className="spinner-border text-success"></div>
//       <div className="spinner-border text-info"></div>
//       <div className="spinner-border text-warning"></div>
//       <div className="spinner-border text-danger"></div>
//       <div className="spinner-border text-secondary"></div>
//       <div className="spinner-border text-dark"></div>
//       <div className="spinner-border text-light"></div>
//     </div> : <div className="container mt-5">
//       <table className="table">
//         <thead>
//           <tr>
//             <th>S.no</th>
//             <th>Title</th>
//             <th>Image</th>
//             <th>Price</th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {productList?.map((product, index) => <tr key={index}>
//             <td>{index + 1}</td>
//             <td>{product.title}</td>
//             <td><img src={product.thumbnail} width="70px" height="70px" style={{ borderRadius: "50%" }} /></td>
//             <td>{product.price}</td>
//             <td><button onClick={() => dispatch(removeProduct(index))} className="btn btn-outline-danger">Delete</button></td>
//           </tr>)}
//         </tbody>
//       </table>
//     </div>}


//   </>
// }

// export default App;
