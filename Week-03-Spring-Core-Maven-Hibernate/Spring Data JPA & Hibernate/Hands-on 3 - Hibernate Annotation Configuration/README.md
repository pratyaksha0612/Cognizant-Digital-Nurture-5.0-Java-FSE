# Hands-on 3 - Hibernate Annotation Configuration

## Objective

Understand how Hibernate uses annotations to map Java classes to database tables.



## Introduction

Modern Hibernate applications primarily use annotations instead of XML configuration. Annotations make the code cleaner, easier to maintain, and closely associate database mapping with Java classes.

Hibernate annotations are based on the Java Persistence API (JPA) specification.


## Common Hibernate Annotations

| Annotation | Purpose |
|------------|---------|
| `@Entity` | Marks a class as a database entity |
| `@Table` | Maps the entity to a database table |
| `@Id` | Defines the primary key |
| `@GeneratedValue` | Generates primary key values automatically |
| `@Column` | Maps a field to a database column |
| `@OneToMany` | Defines one-to-many relationship |
| `@ManyToOne` | Defines many-to-one relationship |
| `@ManyToMany` | Defines many-to-many relationship |
| `@JoinColumn` | Specifies the foreign key column |


## Benefits of Annotation-Based Configuration

- Less configuration
- Easier to read
- Easier maintenance
- Better integration with Spring Boot
- Industry standard approach



## XML vs Annotation

| XML Configuration | Annotation Configuration |
|-------------------|--------------------------|
| Separate XML files | Configuration inside Java classes |
| More verbose | Cleaner syntax |
| Better for legacy projects | Preferred for modern applications |
| Harder to maintain | Easier to maintain |


## Learning Outcome

By completing this hands-on, I learned:

- Entity mapping using annotations
- Primary key configuration
- Relationship mapping
- Annotation-based ORM
- Advantages of annotations over XML configuration

## Author

**Pratyaksha Singh**

Cognizant Digital Nurture 5.0 – Java FSE