# Gemini Sports Todo Backend 🚀

Backend repository of Gemini Sports Todo App Challenge 📚

## Table of Contents 📋

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Running PostgreSQL with Docker Compose](#running-postgresql-with-docker-compose)
  - [Running Migrations](#running-migrations)
  - [Starting the Application](#starting-the-application)
- [Testing](#testing)
  - [Accessing GraphQL](#accessing-graphql)
  - [Testing with cURL](#testing-with-curl)
    - [Create a Task](#create-a-task)
    - [Retrieve All Tasks](#retrieve-all-tasks)
    - [Retrieve a Task by ID](#retrieve-a-task-by-id)
    - [Update a Task](#update-a-task)
    - [Delete a Task](#delete-a-task)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites 📝

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed. 📦
- Docker and Docker Compose installed. 🐳
- PostgreSQL database connection details. 🐘

## Getting Started 🏁

### Running PostgreSQL with Docker Compose 🐳

To run PostgreSQL using Docker Compose, execute the following command:

```bash
docker-compose up -d
```

### Running Migrations ⚙️

To run database migrations, use the following command:

```bash
npm run migrate
```

### Starting the Application ▶️

To start the application, use the following command:

```bash
npm start
```

## Testing 🧪

### Unit Tests 🔍

You can chck unit tests running 

```bash
npm test
```

### Accessing GraphQL 🔍

You can access the GraphQL API at `http://localhost:3000/graphql`.

### Testing with cURL 🚀

#### Create a Task ➕

```bash
curl 'http://localhost:3000/graphql' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: http://localhost:3000' --data-binary '{
  "query": "mutation {
    createTask(createTaskInput: {
      title: \"Wash Dishes\"
      description: \"Use special detergent to avoid staining the pan\"
      dueDate: \"2023-09-15T18:00:00.000Z\"
      priority: \"HIGH\"
      status: \"TODO\"
    }) {
      id
      title
      description
      dueDate
      priority
      status
    }
  }"
}' --compressed

```

#### Retrieve All Tasks 📃

```bash
curl 'http://localhost:3000/graphql' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: http://localhost:3000' --data-binary '{
  "query": "query {
    tasks {
      id
      title
      description
      priority
      status
      dueDate
    }
  }"
}' --compressed

```

#### Retrieve a Task by ID 🔍

```bash
curl 'http://localhost:3000/graphql' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: http://localhost:3000' --data-binary '{
  "query": "query {
    task(id: \"TASK_ID\") {
      id
      title
      description
      priority
      status
      dueDate
    }
  }"
}' --compressed

```

Replace `TASK_ID` with the actual task ID you want to retrieve.

#### Update a Task ✏️

```bash
curl 'http://localhost:3000/graphql' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: http://localhost:3000' --data-binary '{
  "query": "mutation {
    updateTask(updateTaskInput: {
      id: \"TASK_ID\"
      title: \"Updated Task Title\"
    }) {
      id
      title
    }
  }"
}' --compressed
```

Replace `TASK_ID` with the actual task ID you want to update.

#### Delete a Task ❌

```bash
curl 'http://localhost:3000/graphql' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: http://localhost:3000' --data-binary '{
  "query": "mutation {
    removeTask(id: \"TASK_ID\")
  }"
}' --compressed
```

Replace `TASK_ID` with the actual task ID you want to delete.
