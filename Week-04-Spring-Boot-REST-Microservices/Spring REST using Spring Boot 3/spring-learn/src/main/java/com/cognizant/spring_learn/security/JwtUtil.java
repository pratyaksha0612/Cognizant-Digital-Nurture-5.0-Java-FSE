package com.cognizant.spring_learn.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.nio.charset.StandardCharsets;
import java.util.Date;

public class JwtUtil {

    private static final String SECRET =
            "mysecretkeymysecretkeymysecretkey123456";

    public String generateToken(String username) {

        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 600000))
                .signWith(
                        SignatureAlgorithm.HS256,
                        SECRET.getBytes(StandardCharsets.UTF_8)
                )
                .compact();
    }
}