# 🎬 Node.js CRUD Movie API

This is a **vanilla Node.js REST API** project that allows basic CRUD operations for managing a list of movies — built **without frameworks**.
---

## 🚀 Features

- Get all movies
- Get a specific movie by UUID
- Add a new movie
- Update an existing movie
- Delete a movie

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Abdomalihi/nodejs-crud-movie-api.git

# Navigate to the project directory
cd nodejs-crud-movie-api

# Install dependencies
npm install

```
## 🔧 Usage 
```bash
# Run in Development
npm run start

# Run in Production
node server.js

```
---


## 📡 API Routes

| Method | Endpoint          | Description          |
| ------ | ----------------- | -------------------- |
| GET    | `/api/movies`     | Get all movies       |
| POST   | `/api/movies`     | Add a new movie      |
| GET    | `/api/movies/:id` | Get a movie by ID    |
| PUT    | `/api/movies/:id` | Update a movie by ID |
| DELETE | `/api/movies/:id` | Delete a movie by ID |


## ⚙️ Tech Stack

```
# Node.js
# Nodemon (for development)
# dotenv (for environment variables)

```

## 👤 Author

Abderrahmane Malihi