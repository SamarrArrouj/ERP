package com.dpc.erp.erp_back.requests;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SignupRequest {

    private String username;


//    private String lastName;

    private String email;

    private Set<String> roles;


    private String password;


}

