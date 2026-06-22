# Exercise 1 - Singleton Pattern

## Objective

Implement the Singleton Design Pattern to ensure that only one instance of a Logger class exists throughout the application lifecycle.

## Scenario

A logging utility should maintain a single instance across the application to ensure consistent logging behavior.

## Files

```
src/
├── Logger.java
└── SingletonTest.java
```

## Implementation Details

- Logger class follows the Singleton Design Pattern.
- Constructor is private to prevent object creation from outside the class.
- A static instance variable stores the single object.
- getInstance() method provides global access to the instance.

## Output

```text
LOG: Application Started
Singleton Works
```

## Learning Outcome

- Understanding Singleton Design Pattern
- Restricting object creation
- Global access to a single instance
- Improving resource management