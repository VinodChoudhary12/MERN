
import { Sequelize } from "sequelize";

const sequalize = new Sequelize('EcomerceNode','root','root',{
    host:'localhost',
    dialect: 'mysql'
});

sequalize.authenticate()
.then(()=>console.log("Database Connected"))
.catch(err=>console.log(err))

export default sequalize;














/*
   Sequelize model turns into model class and it will also
   provide interface to interact with database
   
   User.findAll()
   User.findOne()
   User.create()
   User.destroy()
   .....
   .....
*/

