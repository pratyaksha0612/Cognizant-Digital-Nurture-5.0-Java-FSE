# Exercise 2 - Implementing Dependency Injection

## Objective

Implement Dependency Injection (DI) in a Spring Core application using XML configuration.

## Scenario

In the Library Management application, the `BookService` class depends on the `BookRepository` class. Instead of creating the dependency manually, Spring's IoC container injects the dependency through setter injection.

## Tools & Technologies

- Java 17
- Spring Core 6.2.8
- Maven
- VS Code

## Project Structure

```
LibraryManagement
├── pom.xml
├── src
│   ├── main
│   │   ├── java
│   │   │   └── com.library
│   │   │       ├── LibraryManagementApplication.java
│   │   │       ├── repository
│   │   │       │   └── BookRepository.java
│   │   │       └── service
│   │   │           └── BookService.java
│   │   └── resources
│   │       └── applicationContext.xml
│   └── test
```

## Steps Performed

1. Reused the LibraryManagement Maven project.
2. Added setter injection in the `BookService` class.
3. Configured dependency injection in `applicationContext.xml`.
4. Loaded the Spring Application Context.
5. Retrieved the `BookService` bean from the IoC container.
6. Verified that `BookRepository` was injected successfully.

## Output

```
Book Service Created
Book Repository Created
```


- `output1.png`

## Learning Outcome

- Understood Spring IoC (Inversion of Control).
- Learned Setter-based Dependency Injection.
- Configured bean dependencies using XML.
- Successfully injected one bean into another using Spring.


## Author

**Pratyaksha Singh**

Cognizant Digital Nurture 5.0 – Java FSE