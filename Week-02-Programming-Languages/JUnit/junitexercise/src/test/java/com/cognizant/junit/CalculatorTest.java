package com.cognizant.junit;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

class CalculatorTest {

    @Test
    void testAddition() {
        int sum = 10 + 20;
        assertEquals(30, sum);
    }
}