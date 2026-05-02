# Dockerized User Management REST API

## Project Overview

This project is a beginner-friendly backend application developed using Node.js, Express.js, MongoDB, and Docker. The application provides REST API endpoints to store and retrieve user data from a MongoDB database.

The complete application runs inside Docker containers using Docker Compose.

---

# Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* Docker
* Docker Compose
* Git
* GitHub

---

# Features

* REST API development using Express.js
* MongoDB database integration
* User data insertion and retrieval
* Docker containerization
* Multi-container setup using Docker Compose
* API testing using browser and PowerShell

---

# Project Structure

```text
node-mongoDB-Docker
│
├── .gitignore
├── Dockerfile
├── docker-compose.yml
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

---

# API Endpoints

| Method | Endpoint | Description         |
| ------ | -------- | ------------------- |
| GET    | `/`      | Check server status |
| POST   | `/user`  | Add new user        |
| GET    | `/users` | Fetch all users     |

---

# MongoDB Schema

```js
const User = mongoose.model("User", {
    name: String,
    age: Number
});
```

---

# How the Project Works

1. User sends request to API.
2. Express.js handles the request.
3. Mongoose connects Node.js with MongoDB.
4. Data is stored or fetched from MongoDB.
5. Response is sent back to the user.

---

# Docker Containers Used

## App Container

Runs the Node.js and Express application.

## MongoDB Container

Runs MongoDB database service.

Docker Compose manages communication between both containers.

---

# Commands Used

## Build and Start Containers

```bash
docker compose up --build
```

## Stop Containers

```bash
docker compose down
```

## Check Running Containers

```bash
docker ps
```

---

# Example API Testing

## Insert User Data

```powershell
Invoke-RestMethod -Method POST `
-Uri http://localhost:3007/user `
-ContentType "application/json" `
-Body '{"name":"Priya","age":22}'
```

## Get All Users

Open browser:

```text
http://localhost:3007/users
```

---

# Learning Outcomes

This project helped in understanding:

* Backend API development
* CRUD operations
* MongoDB integration
* Docker containerization
* Docker networking
* Multi-container applications
* Git and GitHub basics

---

# Future Improvements

* Add Update API
* Add Delete API
* Use environment variables
* Add authentication
* Connect MongoDB Compass
* Create Jenkins CI/CD pipeline
* Deploy on AWS EC2

---

# Conclusion

This project demonstrates a complete beginner-level backend setup using Node.js, Express.js, MongoDB, and Docker. It is a good foundational project for learning backend development and DevOps concepts together.
