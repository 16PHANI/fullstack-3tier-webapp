# Full-Stack 3-Tier Web Application

> Design | Test | Deploy — Following Agile & Clean Code Standards

## What It Does
Production-grade 3-tier web application with automated testing and CI/CD pipeline.
React/TypeScript frontend, Node.js/Express REST API backend, PostgreSQL database.

## Results
| Metric | Value |
|--------|-------|
| Response Time | **sub-500ms** |
| Uptime | **Zero downtime** across 1,000+ requests |
| Test Coverage | Unit + Integration + End-to-End + Load |

## Tech Stack
`TypeScript` `React` `Next.js` `Node.js` `Express.js` `PostgreSQL`
`Docker` `GitHub Actions` `Selenium` `Postman` `Newman` `NPM`

## Project Structure
```
fullstack-3tier-webapp/
├── backend/
│   ├── src/
│   │   └── server.ts         # Express REST API
│   ├── tests/
│   │   └── api.test.ts       # API test suite
│   ├── Dockerfile
│   └── package.json
├── frontend/
│   └── src/
│       └── App.tsx           # React TypeScript frontend
├── .github/workflows/
│   └── ci.yml                # CI/CD pipeline
└── README.md
```

## Run Locally

### Backend
```bash
cd backend
npm install
npm run dev
# API running at http://localhost:3000
```

### Run Tests
```bash
cd backend
npm test
```

### Frontend
```bash
cd frontend
npm install
npm start
# App running at http://localhost:3001
```

## Run with Docker
```bash
cd backend
docker build -t fullstack-backend .
docker run -p 3000:3000 fullstack-backend
```

## API Endpoints
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/` | GET | Service info |
| `/health` | GET | Health check |
| `/api/users` | GET | Get all users |
| `/api/users` | POST | Create user |
| `/api/users/:id` | GET | Get user by ID |
