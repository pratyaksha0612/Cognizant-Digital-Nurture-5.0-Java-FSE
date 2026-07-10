# Spring REST using Spring Boot 3

## Overview

This module demonstrates the implementation of RESTful Web Services using **Spring Boot 3**. It covers creating REST APIs, loading beans from Spring XML configuration, and retrieving country details using REST endpoints.


## Technologies Used

- Java
- Spring Boot 3
- Spring Web
- Spring Boot DevTools
- Spring Core
- Maven
- REST APIs



## Project Structure

```
Spring REST using Spring Boot 3
│
├── spring-learn
│
├── output1.png
├── output2.png
├── output3.png
├── output4.png
└── README.md
```

# Hands-on 1 – Spring Boot Project

Created a Spring Boot application using **Spring Initializr** and verified that the application starts successfully.

### Run

```bash
mvn spring-boot:run
```

### Output

![Output 1](output1.png)


# Hands-on 2 – Load Country from Spring Configuration XML

Created a Spring XML configuration file (`country.xml`) and loaded the **Country** bean using `ApplicationContext`.

### Endpoint

```
GET /country
```

### URL

```
http://localhost:8080/country
```

### Response

```json
{
  "code": "IN",
  "name": "India"
}
```

### Output

![Output 2](output2.png)



# Hands-on 3 – Hello World RESTful Web Service

Implemented the first REST endpoint using `@RestController`.

### Endpoint

```
GET /hello
```

### URL

```
http://localhost:8080/hello
```

### Response

```
Hello World!!
```

### Output

![Output 3](output3.png)



# Hands-on 4 – Get Country by Country Code

Implemented REST API using **Path Variable** to fetch country details.

### Endpoint

```
GET /countries/{code}
```

### Sample URL

```
http://localhost:8080/countries/in
```

### Response

```json
{
  "code": "IN",
  "name": "India"
}
```

### Output

![Output 4](output4.png)


# REST APIs Implemented

| Method | Endpoint | Description |
|----------|-------------------|---------------------------|
| GET | `/hello` | Returns Hello World message |
| GET | `/country` | Returns India details |
| GET | `/countries/{code}` | Returns country based on code |



# Learning Outcomes

- Created a Spring Boot application using Spring Initializr.
- Loaded beans from Spring XML Configuration.
- Developed REST APIs using `@RestController`.
- Used `@GetMapping` for REST endpoints.
- Used `@PathVariable` for dynamic URL parameters.
- Implemented a simple service layer to separate business logic.



# Pending Exercise

The **JWT Authentication** hands-on will be implemented separately as it requires Spring Security and additional configuration.


## Conclusion

Successfully implemented the mandatory Spring REST hands-ons by developing RESTful Web Services, loading Spring beans from XML configuration, and exposing REST endpoints for country information using Spring Boot 3.