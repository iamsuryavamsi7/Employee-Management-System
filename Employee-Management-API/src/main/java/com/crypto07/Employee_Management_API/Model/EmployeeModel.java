package com.crypto07.Employee_Management_API.Model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EmployeeModel {

    private String firstName;
    private String lastName;
    private String emailId;

}
