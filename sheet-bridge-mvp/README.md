# Sheet Bridge MVP

A full-stack application that bridges spreadsheet data with AI capabilities using Model Context Protocol (MCP).

## Tech Stack

- **Backend**: Python / FastAPI
- **Frontend**: TypeScript / Next.js
- **Database**: PostgreSQL
- **Cache**: Redis
- **AI**: LLM with Function Calling + MCP

## Project Structure

```
sheet-bridge-mvp/
├── backend/          # Python FastAPI backend
├── frontend/         # TypeScript Next.js frontend
├── docs/             # Documentation and AI context
└── docker-compose.yml
```

## Getting Started

### Prerequisites

- Docker & Docker Compose
- Python 3.11+
- Node.js 18+
- Poetry (for Python dependency management)

### Development Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sheet-bridge-mvp
   ```

2. **Start infrastructure services**
   ```bash
   docker-compose up -d db redis
   ```

3. **Backend Setup**
   ```bash
   cd backend
   poetry install
   poetry run alembic upgrade head
   poetry run uvicorn app.main:app --reload
   ```

4. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

### Running with Docker

```bash
docker-compose up --build
```

## Documentation

- [Product Requirements](docs/prd.md)
- [Architecture](docs/architecture.md)
- [API Specification](docs/api_spec.md)
- [Backend Tasks](docs/backend_tasks.md)

## License

MIT
