package com.crypto07.Employee_Management_API.Service;

import com.crypto07.Employee_Management_API.Entity.EmployeeEntity;
import com.crypto07.Employee_Management_API.Model.EmployeeModel;
import com.crypto07.Employee_Management_API.Repository.EmployeeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeEntity saveEmployee(EmployeeModel employeeModel) {

        EmployeeEntity savingUser = new EmployeeEntity();

        BeanUtils.copyProperties(employeeModel, savingUser);

        return employeeRepository.save(savingUser);

    }

    @Override
    public List<EmployeeEntity> fetchAllEmployees() {

        return employeeRepository.findAll();

    }

    @Override
    public String deleteEmployeeById(Long id) {

        employeeRepository.deleteById(id);

        return "Employee Deleted";

    }

    @Override
    public EmployeeEntity fetchEmployeeById(Long id) {

        return employeeRepository.findById(id).get();

    }

    @Override
    public EmployeeEntity updateEmployeeById(Long id, EmployeeModel employeeModel) {

        EmployeeEntity updatingEmployee = employeeRepository.findById(id).get();

        BeanUtils.copyProperties(employeeModel, updatingEmployee);

        return employeeRepository.save(updatingEmployee);

    }

}
