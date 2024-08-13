package com.crypto07.Employee_Management_API.Service;

import com.crypto07.Employee_Management_API.Entity.EmployeeEntity;
import com.crypto07.Employee_Management_API.Model.EmployeeModel;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface EmployeeService {


    EmployeeEntity saveEmployee(EmployeeModel employeeModel);

    List<EmployeeEntity> fetchAllEmployees();

    String deleteEmployeeById(Long id);

    EmployeeEntity fetchEmployeeById(Long id);

    EmployeeEntity updateEmployeeById(Long id, EmployeeModel employeeModel);
}
