package com.dpc.erp.erp_back.controllers;

import com.dpc.erp.erp_back.models.User;
import com.dpc.erp.erp_back.security.services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@AllArgsConstructor
@CrossOrigin("http://localhost:4200/") //added
public class UserController {
    private final UserService userService;
    @PostMapping("/create")
    public User create(@RequestBody User user){
        return userService.create(user);
    }
    @GetMapping("/read")
    public List<User> read() {
        return userService.lire();
    }
    @PutMapping("/update")
    public User update(@RequestBody User user){
        return userService.modifier(user);

    }
    @GetMapping("/getUser/{id}")
    public User GetUser(@PathVariable Long id){
         return userService.getbyId(id);
    }
    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable Long id){
        return userService.delete(id);
    }
}
