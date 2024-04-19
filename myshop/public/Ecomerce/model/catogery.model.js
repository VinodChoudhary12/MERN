import { DataTypes } from "sequelize";
import sequalize from "../db/dbconfige.js";

const category = sequalize.define('category', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    catogeryName: {
        type: DataTypes.STRING,
        allowNull: false
    }
})
sequalize.sync()
    .then(() => console.log("Database table created"))
    .catch(err => console.log(err))

export default category;