package com.cognizant.junit;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import org.junit.jupiter.api.Test;

class AssertionsTest {

    @Test
    void testAssertions() {

        assertEquals(10, 5 + 5);

        assertTrue(20 > 10);

        assertFalse(10 > 20);

        assertNull(null);

        assertNotNull(new Object());

        assertEquals("Hello", "Hello");
    }
}