# Exercise 2 - Factory Method Pattern

## Objective

Implement the Factory Method Design Pattern for creating different types of documents in a document management system.

## Scenario

A document management system should be capable of creating multiple document types such as Word, PDF, and Excel without tightly coupling the client code to specific classes.

## Files

```
src/
├── Document.java
├── WordDocument.java
├── PdfDocument.java
├── ExcelDocument.java
├── DocumentFactory.java
├── WordFactory.java
├── PdfFactory.java
├── ExcelFactory.java
└── FactoryTest.java
```

## Implementation Details

- Document interface defines common behavior.
- Concrete document classes implement the interface.
- Abstract factory class declares createDocument().
- Concrete factories create specific document types.
- Client interacts with factories instead of concrete classes.

## Output

```text
Opening Word Document
Opening PDF Document
Opening Excel Document
```

## Learning Outcome

- Understanding Factory Method Design Pattern
- Decoupling object creation from client code
- Improving flexibility and maintainability
- Applying polymorphism in object creation