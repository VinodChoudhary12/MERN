
import app from "./app.js";

import DataBase from "./DB/db.js";

DataBase
    .then(() => app.listen(8000, () => console.log("Application is stated in port number 800")))
    .catch(console.log("Application is not started"))

