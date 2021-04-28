'use strict';
// importing sequelize
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  
  
  /**
   * @class Employee
   * @classdesc DataModel for Employee Class
   * @extends Sequelize.Model
   */

  class Employee extends Model {
    
    static associate(models) {
      // define association here
    }
  };


  Employee.init({
    
    firstname: {
      type : DataTypes.STRING,
    },
    
    lastname: {
      type : DataTypes.STRING,
    },

    email: {
      type : DataTypes.STRING,
    },

    password: {
      type : DataTypes.STRING,
    },
    // employeeid is primary key and unique
    employeeid: {
      type : DataTypes.STRING,
      primaryKey : true,
      unique:true
    },

    orgnization : {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};