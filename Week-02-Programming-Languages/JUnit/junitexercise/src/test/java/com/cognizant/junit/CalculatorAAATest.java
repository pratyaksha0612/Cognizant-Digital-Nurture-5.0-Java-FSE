package com.cognizant.junit;

import org.junit.jupiter.api.AfterEach;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class CalculatorAAATest {
    Calculator calculator;
    @BeforeEach
    void setUp() {
        calculator = new Calculator();
        System.out.println("Setup");
    }
    @AfterEach
    void tearDown() {
        System.out.println("Teardown");
    }
    @Test
    void testAdd() {
        // Arrange
        int a = 15;
        int b = 25;
        // Act
        int result = calculator.add(a, b);
        // Assert
        assertEquals(40, result);
    }
}