# Week 3 - Spring Core & Maven

## Overview

This week focused on the fundamentals of the Spring Framework and Maven. The exercises introduced the core concepts of the Spring IoC (Inversion of Control) Container, Dependency Injection (DI), XML-based bean configuration, and Maven project management.

The hands-on exercises demonstrated how Spring manages application components (beans), injects dependencies automatically, and how Maven simplifies dependency management and project builds.


## Objectives

- Understand the fundamentals of the Spring Framework.
- Learn the concept of Inversion of Control (IoC).
- Implement Dependency Injection (DI) using XML configuration.
- Configure Spring beans using `applicationContext.xml`.
- Create and configure Maven projects.
- Manage external libraries using Maven dependencies.
- Build Java projects using the Maven lifecycle.


# Exercises Completed

## Exercise 1 - Configuring a Basic Spring Application

### Objective

Configure a basic Spring Core application using XML-based configuration.

### What was implemented

- Created a Maven project named **LibraryManagement**.
- Added Spring Context dependency.
- Created `BookService` and `BookRepository` classes.
- Configured both classes as Spring beans using `applicationContext.xml`.
- Loaded the Spring Application Context.
- Retrieved beans manually from the IoC container.
- Verified successful bean creation.

### Key Concepts Learned

- Spring IoC Container
- Bean Configuration
- XML Configuration
- ApplicationContext
- Bean Management


## Exercise 2 - Implementing Dependency Injection

### Objective

Implement Setter-based Dependency Injection using Spring IoC.

### What was implemented

- Reused the LibraryManagement project.
- Added a dependency between `BookService` and `BookRepository`.
- Configured Setter Injection using XML.
- Retrieved only the `BookService` bean.
- Spring automatically injected the required `BookRepository` bean.

### Key Concepts Learned

- Dependency Injection (DI)
- Setter Injection
- Loose Coupling
- Bean Wiring
- Spring IoC


## Difference Between Exercise 1 and Exercise 2

| Exercise 1 | Exercise 2 |
|------------|------------|
| Spring creates the beans. | Spring creates the beans and injects dependencies between them. |
| Beans are retrieved individually. | Only the service bean is retrieved. |
| No dependency exists between classes. | `BookService` depends on `BookRepository`. |
| Focuses on bean configuration. | Focuses on Dependency Injection. |

### Exercise 1 Flow

```
Spring Container
│
├── BookService
└── BookRepository

Main Class
│
├── get(BookService)
└── get(BookRepository)
```

### Exercise 2 Flow

```
Spring Container
│
├── BookRepository
│
└── BookService
      │
      └── Dependency Injected
```

This demonstrates one of the most important principles of the Spring Framework—**Dependency Injection**, which promotes loose coupling and improves maintainability.


## Exercise 4 - Creating and Configuring a Maven Project

### Objective

Create and configure a Maven project with the required Spring Framework dependencies.

### What was implemented

- Created a new Maven project.
- Configured `pom.xml`.
- Added:
  - Spring Context
  - Spring AOP
  - Spring Web MVC
- Configured Maven Compiler Plugin.
- Successfully built the project using Maven.

### Key Concepts Learned

- Maven Project Structure
- pom.xml Configuration
- Dependency Management
- Maven Compiler Plugin
- Maven Build Lifecycle


# Maven Commands Used

## Create Maven Project

```bash
mvn archetype:generate
```

## Compile Project

```bash
mvn compile
```

## Clean and Compile

```bash
mvn clean compile
```

## Run Java Application

```bash
mvn exec:java "-Dexec.mainClass=com.library.LibraryManagementApplication"
```


# Spring Concepts Covered

- Spring Framework
- Spring Core
- Spring IoC Container
- Bean Creation
- Bean Configuration
- XML Configuration
- Dependency Injection
- Setter Injection
- ApplicationContext
- Bean Wiring


# Maven Concepts Covered

- Maven Project Structure
- pom.xml
- Dependency Management
- Maven Plugins
- Maven Compiler Plugin
- Build Lifecycle
- Project Coordinates
  - groupId
  - artifactId
  - version


# Technologies Used

- Java 17
- Spring Framework 6.x
- Maven
- VS Code
- Git
- GitHub


# Folder Structure

```
Week-03-Spring-Core-Maven
│
├── Exercise 1 - Configuring a Basic Spring Application
│   ├── LibraryManagement
│   ├── output1.png
│   └── README.md
│
├── Exercise 2 - Implementing Dependency Injection
│   ├── LibraryManagement
│   ├── output1.png
│   └── README.md
│
└── Exercise 4 - Creating and Configuring a Maven Project
    ├── LibraryManagement
    ├── output1.png
    └── README.md
```


# Learning Outcomes

By completing Week 3, I gained practical experience in:

- Understanding the architecture of the Spring Framework.
- Configuring Spring applications using XML.
- Creating and managing Spring beans.
- Implementing Dependency Injection for loosely coupled applications.
- Managing Java projects with Maven.
- Configuring project dependencies and plugins.
- Building and running Maven-based Spring applications.
- Organizing enterprise-level Java project structures.


