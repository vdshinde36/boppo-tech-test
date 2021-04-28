

/**
 * @file employeeRoutes.js
 * @description This file handles all rouest for employee
 */


 const express = require("express");
 const router = express.Router();
 
 const { isAuthenticated } = require('../middleware/authentication');
 const EmployeeController = require("../controllers/employeeController");
 
 /**
  * route for checkout productcar for user
  */
 router.post("/employee/register/", EmployeeController.registerEmployeeController);
 router.post("/employee/login", EmployeeController.loginEmployeeController);

 //protected rout
 router.get("/employee/get",isAuthenticated, EmployeeController.getEmployees);
 
 module.exports = router;