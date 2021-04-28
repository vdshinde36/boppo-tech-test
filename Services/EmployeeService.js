/**
 * @file Employee.service.js
 * 
 * @author Vaibhav D Shinde.
 * 
 * @desc This File contains Employee Related business logic. Service layer 
 *  is spertaed to make business logic web framework agnoistic
 * 
 */
const { Employee } = require('../models');
const { issue } = require('../auth/auth.js')();
const { Sequelize , sequelize } = require('../models');

class EmployeeService{
    /**
     * init constrctor to use for DI in production use.
     */
    constructor () {}


    /**
     * This method will save employee to postgres
     * 
     * @param {*} employee | employee object containg all employee info
     * @return {Promise} | promise with state [resolved | reject | pending]
     * @throws {UserAlreadyExist} throws if employeeid is already Present
     */

    async registerEmployee (employee) {

        try {
            let employeeStatus = await Employee.create(employee); // save
            return employeeStatus;
        }catch(err){
            throw err;
        }
        
    }

    /**
     * This method will save employee to postgres
     * 
     * @param {*} employee | employee object containg all employee info
     * @return {Promise} | promise with state [resolved | reject | pending]
     * @throws {UserAlreadyExist} throws if employeeid is already Present
     */
    async loginEmployee ({employeeid , password}) {
        try {

            let employee = await Employee.findOne({
                where : {
                    employeeid : employeeid ,
                    password : password
                }});

                if(employee) {
                    let { firstname , lastname, employeeid } = employee.dataValues;
                    return issue({ firstname , lastname, employeeid })
                }
                return employee;

        }catch(err){
            console.log(err);
            throw err;
        }
        
    }

    /**
     * This function will get Employee details by given option
     *  
     * 
     * @param {*} options | options object for filtering and pagination and sorting suport 
     */
    async getEmployee (options) {
        
        let offset = options.page;
        let sortBy = options.sortBy;
        try{
            const result = await Employee.findAll({
                limit : 10,
                offset : offset,
                order : [[sortBy,"ASC"]]
            });
            console.log(result)
            return result;
        }catch(err){
            console.log(err);
            throw err;
        }
    }

    

}



function queryTemplate (options) {
    let {page, sortBy } = options
    let offset = page * 10;
    let template = `SELECT * from Employees  ORDER BY ${sortBy} ASC LIMIT 10 OFFSET ${offset}` 
    return  template;
}

module.exports = EmployeeService;