import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://ec2-13-60-194-171.eu-north-1.compute.amazonaws.com:7777/api/v1/employee";

class EmployeeService{

    saveEmployee(employee){

        return axios.post(EMPLOYEE_API_BASE_URL, employee);

    }

    fetchAllEmployees(){

        return axios.get(EMPLOYEE_API_BASE_URL);

    }

    getEmployeeById(id){

        return axios.get(EMPLOYEE_API_BASE_URL + "/" + id);

    }

    updateEmployeeById(employee, id){

        return axios.put(EMPLOYEE_API_BASE_URL + "/" + id, employee);

    }

}

export default new EmployeeService();