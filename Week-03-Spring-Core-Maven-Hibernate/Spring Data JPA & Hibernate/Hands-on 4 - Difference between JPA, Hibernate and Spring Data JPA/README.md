# Hands-on 4 - Difference between JPA, Hibernate and Spring Data JPA

## Objective

Understand the differences between JPA, Hibernate, and Spring Data JPA and how they work together in enterprise Java applications.


## What is JPA?

**Java Persistence API (JPA)** is a specification that defines a standard way to map Java objects to relational databases.

JPA itself does **not** provide an implementation. It only defines interfaces and annotations.

Examples:
- `@Entity`
- `@Id`
- `@Table`


## What is Hibernate?

Hibernate is an **ORM framework** and one of the most popular implementations of JPA.

It provides the actual implementation required to perform database operations.

Features include:

- Object Relational Mapping (ORM)
- Automatic table mapping
- HQL (Hibernate Query Language)
- Caching
- Lazy and Eager Loading
- Transaction Management



## What is Spring Data JPA?

Spring Data JPA is a Spring Framework module built on top of JPA.

It reduces boilerplate code by automatically implementing repository methods and simplifying database access.

Features include:

- Repository interfaces
- CRUD operations
- Query Methods
- Pagination
- Sorting
- Custom Queries


## Comparison

| Feature | JPA | Hibernate | Spring Data JPA |
|---------|-----|-----------|-----------------|
| Type | Specification | ORM Framework | Spring Module |
| Developed By | Oracle | Hibernate Team | Spring |
| Database Operations | Defines standard | Implements JPA | Simplifies JPA usage |
| CRUD Support | No | Yes | Yes |
| Query Methods | No | HQL | Derived Query Methods |
| Boilerplate Code | High | Medium | Very Low |


## Relationship

```
Application
      │
Spring Data JPA
      │
JPA Specification
      │
Hibernate
      │
Database
```


## Key Takeaways

- **JPA** defines *what* should be done.
- **Hibernate** provides *how* it is done.
- **Spring Data JPA** makes using Hibernate much simpler by reducing the amount of code developers need to write.

## Learning Outcome

By completing this hands-on, I understood:

- The role of JPA
- Hibernate as a JPA implementation
- Spring Data JPA as a higher-level abstraction
- How these technologies work together in enterprise applications

## Author

**Pratyaksha Singh**

Cognizant Digital Nurture 5.0 – Java FSE