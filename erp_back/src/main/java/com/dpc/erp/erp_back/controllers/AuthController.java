package com.dpc.erp.erp_back.controllers;

import com.dpc.erp.erp_back.ENUM.ERole;
import com.dpc.erp.erp_back.models.Role;
import com.dpc.erp.erp_back.models.User;
import com.dpc.erp.erp_back.repository.RoleRepository;
import com.dpc.erp.erp_back.repository.UserRepository;
import com.dpc.erp.erp_back.requests.LoginRequest;
import com.dpc.erp.erp_back.requests.SignupRequest;
import com.dpc.erp.erp_back.responses.JwtResponse;
import com.dpc.erp.erp_back.responses.MessageResponse;
import com.dpc.erp.erp_back.security.jwt.JwtUtils;
import com.dpc.erp.erp_back.security.services.UserDetailsImpl;
import com.dpc.erp.erp_back.security.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/auth/")
public class AuthController {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    UserService userService;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;

    @PostMapping("signin")
    public ResponseEntity<?> authenticateUser(@Validated @RequestBody LoginRequest loginRequest) {
        System.out.println("hurraahhhh signin!");


        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        System.out.println("yowzaaaaassss!");
        String jwt = jwtUtils.generateJwtToken(userDetails);

        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

       return ResponseEntity.ok(new JwtResponse(jwt,
                userDetails.getId(),
                userDetails.getUsername(),
                userDetails.getEmail(),
                roles));
    }

    @PostConstruct
    public void initRolesAndUser(){

         Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN).orElse(null);
           Role Role_Employee = roleRepository.findByName(ERole.ROLE_EMPLOYEE).orElse(null);
        Role agentRole= roleRepository.findByName(ERole.ROLE_AGENT).orElse(null);
        Role comptablerole = roleRepository.findByName(ERole.ROLE_COMPTABLE).orElse(null);
         if ( adminRole != null && Role_Employee!=null && agentRole!=null && comptablerole!=null  ){
             System.out.println(  "roles already existed");
         }
         else {
              adminRole = new Role();
              agentRole = new Role();
              comptablerole  = new Role();
             Role_Employee = new Role();
             adminRole.setName(ERole.ROLE_ADMIN);
             agentRole.setName(ERole.ROLE_AGENT);
             comptablerole.setName(ERole.ROLE_COMPTABLE);
             Role_Employee.setName(ERole.ROLE_EMPLOYEE);

             roleRepository.save(adminRole);
             roleRepository.save(agentRole);
             roleRepository.save(comptablerole);
             roleRepository.save(Role_Employee);
             Set<Role> adminRoles = new HashSet<>();
             adminRoles.add(adminRole);
             User Adminuser = new User();
             Adminuser.setUsername("admin");
             Adminuser.setEmail("admin@gmail.com");
             Adminuser.setPassword(encoder.encode("admin@gmail.com"));
             Adminuser.setRoles(adminRoles);
             Set<Role> agentRoles = new HashSet<>();
             agentRoles.add(agentRole);
             User Agentuser = new User();
             Agentuser.setUsername("agent");
             Agentuser.setEmail("agent@gmail.com");
             Agentuser.setPassword(encoder.encode("agent@gmail.com"));
             Agentuser.setRoles(agentRoles);
             Set<Role> comptableRoles = new HashSet<>();
             comptableRoles.add(comptablerole);
             User comptableuser = new User();
             comptableuser.setUsername("comptable");
             comptableuser.setEmail("comptable@gmail.com");
             comptableuser.setPassword(encoder.encode("comptable@gmail.com"));
             comptableuser.setRoles(comptableRoles);
             List<User> users = userService.lire();
             if (users.size() == 0) {
                 userRepository.save(Adminuser);
                 userRepository.save(Agentuser);
                 userRepository.save(comptableuser);

             } else {
                 for (User user : users) {
                     if (user.getRoles().contains(adminRole)) {
                         userRepository.save(Adminuser);
                     } else if (user.getRoles().contains(agentRole)) {
                         userRepository.save(Agentuser);
                     } else if (user.getRoles().contains(comptablerole)) {
                         userRepository.save(comptableuser);
                     }
                 }

             }
         }

    }

    @PostMapping("signup")
    public ResponseEntity<?> registerUser(@Validated @RequestBody SignupRequest signUpRequest) {
        System.out.println("hurraahhhh!");
        if (userRepository.existsByUsername(signUpRequest.getUsername())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Username is already taken!"));
        }

        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is already in use!"));
        }

        // Create new user's account
        User user = new User(signUpRequest.getUsername(),
                signUpRequest.getEmail(),
                encoder.encode(signUpRequest.getPassword()));

        Set<String> strRoles = signUpRequest.getRoles();
        Set<Role> roles = new HashSet<>();

        if (strRoles == null) {
            Role employeeRole = roleRepository.findByName(ERole.ROLE_EMPLOYEE)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(employeeRole);
        } else {
            strRoles.forEach(role -> {
                switch (role) {
                    case "ROLE_ADMIN":
                        Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(adminRole);

                        break;
                    default:
                        Role employeeRole = roleRepository.findByName(ERole.ROLE_EMPLOYEE)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(employeeRole);
                }
            });
        }

        user.setRoles(roles);
        userRepository.save(user);

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }
    @PostMapping("signout")
    public ResponseEntity<?> logoutUser() {
        ResponseCookie cookie = jwtUtils.getCleanJwtCookie;
        return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, cookie.toString())
                .body(new MessageResponse("You've been signed out!"));
    }
}