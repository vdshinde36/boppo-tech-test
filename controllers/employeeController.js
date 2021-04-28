/**
 * @file Employee.Controller.js
 * 
 * @author Vaibhav D Shinde
 * 
 * @desc Employee Controller will be used for handling request 
 * response cycle. request validation. this File is frameworl agnoistic.
 * 
 */

const { response } = require('express');
const EmployeeService  = require('../Services/EmployeeService');
const employeeService = new EmployeeService();



class EmployeeController {

    constructor() {}


    /**
     * Handles Employee Registarion request Response Cycle
     * @param {Express.Request} req request objeect from express
     * @param {Express.Response} res response object from express
     * @param {Express.next} next next handler from function
     * @returns {Promise} | returns promise
     */
    static async registerEmployeeController (req, res, next){

        console.log('Inside employee controller')
        let employee = req.body;
        try {
           let employeeStatus = await employeeService.registerEmployee(employee);
           return res.status(200).json({status:'true'});

        }catch(err){
             console.log(err.parent.code);
            if(err.parent.code === '23505') {
                // if employee Id already Present send 
                return res.status(200).json({status:'failed', error:'UserAlreadyExists'});
            }
            return res.status(200).json({status:'Failed'});
        }
    }

    static async loginEmployeeController (req, res, next) {
        try{
            let {employeeid , password } = req.body;
            let token = await employeeService.loginEmployee({ employeeid ,password});
            if(token){
                return res.json({ status:'success', token : token });
            }
               return res.json({status:'failed', token:token})
            
        }catch(err){
            return res.json({status:'FAILED', error:'User Does Not Exist PleseSignUp'});
        }
        
    }

    static async getEmployees (req, res, next) {
    let { sortBy , page } = req.query;

    // default options if  unavaible in quey parameter
      sortBy = sortBy || 'employeeid';
      page = page || 0;

        try {
            let result = await employeeService.getEmployee({sortBy,page});
            return res.json({result});
        }catch(err){
            console.log(err)
            return res.json({status : 'failed', error:'somethinfg went wrong'});
        }
    }

}


module.exports = EmployeeController