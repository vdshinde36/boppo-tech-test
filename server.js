/**
 * @file server.js
 * @description
 * @note remove all console.log and try to 
 * use advance logging like winston with http tarnspoert for prod.
 */



 const express = require("express");
 const cors = require('cors');
 const bodyParser = require("body-parser");
 const cookieParser = require("cookie-parser")
 
 
 // Routes
 const EmployeeRoutes = require('./routes/employeeRoutes');
 
 const app = express()
 
 
 
 
 // middlewares 
 app.use(bodyParser.json()) ;
 app.use(cookieParser()); 
 app.use(cors());
 
 
 // routes
 app.use("/api/v1",EmployeeRoutes);
 
 
 
 const port = process.env.PORT || 3000;
 
 console.log(`[process.env][${process.env.toString()}]`);
   
 app.listen(port, () => console.log(`[Server][Server running on port ${port}]`));