package com.cognizant.spring_learn.controller;

import com.cognizant.spring_learn.security.JwtUtil;
import org.springframework.web.bind.annotation.*;

import java.nio.charset.StandardCharsets;
import java.util.Base64;

@RestController
public class AuthenticationController {

    private final JwtUtil jwtUtil = new JwtUtil();

    @GetMapping("/authenticate")
    public String authenticate(
            @RequestHeader("Authorization") String authorizationHeader) {

        String credentials = authorizationHeader.substring(6);

        String decoded = new String(
                Base64.getDecoder().decode(credentials),
                StandardCharsets.UTF_8
        );

        String username = decoded.split(":")[0];

        return jwtUtil.generateToken(username);
    }
}