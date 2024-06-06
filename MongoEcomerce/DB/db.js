import mongoose from 'mongoose'

const DataBase =mongoose.connect('mongodb://localhost:27017/Ecomerce')
.then(()=>console.log("DataBase Connected"))
.catch((err)=>console.log(err));

export default DataBase;

