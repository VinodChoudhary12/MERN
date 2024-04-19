import { DataTypes } from "sequelize";
import sequalize from "../db/dbconfige.js";

const product=sequalize.define('product',{
    id:{
        primaryKey:true,
        type:DataTypes.INTEGER,
        autoIncrement:true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
        
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
    
})
sequalize.sync()
    .then(() => console.log("Database table created"))
    .catch(err => console.log(err))

export default product