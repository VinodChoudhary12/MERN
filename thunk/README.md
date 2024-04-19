The word "thunk" is a programming term that means "a piece of code that does some delayed work". 
Rather than execute some logic now, we can write a function body or code that can be used to perform the work later.

For Redux specifically, "thunks" are a pattern of writing functions with logic inside that can interact with a Redux store's dispatch and getState methods.

* Calling an API is not so straightforward while using the redux toolkit, and that’s why redux has a middleware name “createAsyncThunk()” which provided us with all the superpowers needed for handling API and response.*
  
  <img src="[https://github.com/VinodChoudhary12/MERN/assets/140074392/0ec84aac-ec2e-4d03-94ba-bb70a0e81eef" width="500" height="500"


Lets understand the flow –

Step 1 – An action is performed on the front-end (let’s say a button click)

Step 2 – That action is dispatched (by using useDispatch hook) to the middleware “createAsyncThunk()” written inside slice file

Step 3 – Inside createAsyncThunk() an API is made, using fetch or Axios, depending upon the method ie. GET, POST, DELETE, OR PUT

Step 4 – Now the response from the above is handled by the extraReducer , written inside createSlice method

Step 5 – And finally the state (or the global store) is updated

Step 6 – The store data is displayed back to frontend using useSelector hook
