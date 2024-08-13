package com.crypto07.Employee_Management_API.Controller;

import com.crypto07.Employee_Management_API.Entity.EmployeeEntity;
import com.crypto07.Employee_Management_API.Model.EmployeeModel;
import com.crypto07.Employee_Management_API.Service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:7778")
@RequestMapping("/api/v1")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/employees")
    public ResponseEntity<EmployeeEntity> saveEmployee(@RequestBody  EmployeeModel employeeModel){

        EmployeeEntity savedUser = employeeService.saveEmployee(employeeModel);

        return ResponseEntity.ok(savedUser);

    }

    @GetMapping("/employees")
    public ResponseEntity<List<EmployeeEntity>> fetchAllEmployees(){

        List<EmployeeEntity> listOfEmployees = employeeService.fetchAllEmployees();

        return ResponseEntity.ok(listOfEmployees);

    }

    @DeleteMapping("/employees/{id}")
    public ResponseEntity<String> deleteEmployeeById(@PathVariable("id") Long id){

        String deleted = employeeService.deleteEmployeeById(id);

        return ResponseEntity.ok(deleted);

    }

    @GetMapping("/employees/{id}")
    public ResponseEntity<EmployeeEntity> fetchEmployeeById(@PathVariable("id") Long id){

        EmployeeEntity fetchedEmployee = employeeService.fetchEmployeeById(id);

        return ResponseEntity.ok(fetchedEmployee);

    }

    @PutMapping("/employees/{id}")
    public ResponseEntity<EmployeeEntity> updateEmployeeById(@PathVariable("id") Long id, @RequestBody EmployeeModel employeeModel){

        EmployeeEntity updatedEmployee = employeeService.updateEmployeeById(id, employeeModel);

        return ResponseEntity.ok(updatedEmployee);

    }

}
