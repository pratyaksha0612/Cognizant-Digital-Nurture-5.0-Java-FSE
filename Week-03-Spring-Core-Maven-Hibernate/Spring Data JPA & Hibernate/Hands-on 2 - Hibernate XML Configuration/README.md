# Hands-on 2 - Hibernate XML Configuration

## Objective

Understand how Hibernate can be configured using XML configuration files instead of annotations.



## Introduction

Hibernate is an Object Relational Mapping (ORM) framework that simplifies database operations by mapping Java objects to database tables. Before annotation-based configuration became popular, Hibernate applications were commonly configured using XML files.

XML configuration provides a centralized approach for defining database connections, Hibernate properties, and entity mappings.



## Hibernate XML Configuration

The primary configuration file used by Hibernate is:

```
hibernate.cfg.xml
```

This file contains:

- Database connection details
- Hibernate dialect
- JDBC driver information
- Username and password
- Mapping files
- Hibernate properties



## Typical Configuration

A Hibernate XML configuration generally includes:

- Database URL
- JDBC Driver
- Username
- Password
- SQL Dialect
- Show SQL
- Format SQL
- Mapping Resources



## Advantages

- Centralized configuration
- Easy to modify database settings
- No dependency on annotations
- Suitable for legacy applications
- Clear separation between configuration and business logic



## Limitations

- More verbose than annotations
- Requires additional XML mapping files
- Harder to maintain in large applications
- Less preferred in modern Spring Boot applications



## Learning Outcome

By completing this hands-on, I understood:

- XML-based Hibernate configuration
- The purpose of `hibernate.cfg.xml`
- Database connection properties
- Hibernate configuration settings
- XML mapping approach in Hibernate

## Author

**Pratyaksha Singh**

Cognizant Digital Nurture 5.0 – Java FSE