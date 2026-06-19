# Dockerized Multi-Container User Management Application

## Project Overview

This project demonstrates the deployment of a Dockerized multi-container application using Docker Compose on AWS EC2. The application consists of a Node.js backend service and a MongoDB database container.

The project also integrates Jenkins for CI/CD automation, enabling automatic build and deployment whenever code changes are pushed to GitHub.

---

## Architecture

GitHub → Jenkins → Docker Compose → AWS EC2

### Components

* Node.js Application
* MongoDB Database
* Docker
* Docker Compose
* Jenkins
* AWS EC2
* GitHub

---

## Features

* Containerized application deployment
* Multi-container architecture using Docker Compose
* Automated CI/CD pipeline using Jenkins
* Hosted on AWS EC2
* MongoDB integration
* Version control using Git and GitHub

---

## Project Structure

```text
dockerized-multi-container-user-management-app/
│
├── Dockerfile
├── docker-compose.yml
├── Jenkinsfile
├── package.json
├── server.js
└── README.md
```

---

## Prerequisites

* AWS EC2 Instance (Ubuntu)
* Docker
* Docker Compose
* Jenkins
* Git

---

## Installation Steps

### Clone Repository

```bash
git clone https://github.com/Priyanka22577/dockerized-multi-container-user-management-app.git

cd dockerized-multi-container-user-management-app
```

### Build Containers

```bash
docker compose build
```

### Run Application

```bash
docker compose up -d
```

### Verify Running Containers

```bash
docker ps
```

---

## Access Application

Open the application using:

```text
http://<EC2-PUBLIC-IP>:3007
```

Expected Response:

```text
API is running
```

---

## Jenkins CI/CD Pipeline

The Jenkins pipeline performs the following actions:

1. Checkout source code from GitHub
2. Build Docker images
3. Deploy containers using Docker Compose
4. Verify deployment

### Trigger Pipeline

```text
Jenkins Dashboard → Build Now
```

---

## Useful Commands

### Docker

```bash
docker ps
docker images
docker logs <container_name>
docker compose up -d
docker compose down
docker compose build
```

### Jenkins

```bash
sudo systemctl status jenkins
sudo systemctl restart jenkins
```

### Git

```bash
git add .
git commit -m "message"
git push origin main
git pull origin main
```

---

## Learning Outcomes

* Docker Containerization
* Docker Compose Orchestration
* Jenkins CI/CD Pipeline Creation
* AWS EC2 Deployment
* Git & GitHub Integration
* Infrastructure Automation

---

## Author

Priyanka Chauhan

GitHub:
https://github.com/Priyanka22577
