import { DataTypes } from 'sequelize';
import sequelize from '../db/dbconfige.js';

const user = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    contact: DataTypes.STRING
});

sequelize.sync()
    .then(() => console.log("Database table created"))
    .catch(err => console.log(err))

export default user;
