# Architecture Document

## System Overview

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│                 │     │                 │     │                 │
│    Frontend     │────▶│    Backend      │────▶│    Database     │
│   (Next.js)     │     │   (FastAPI)     │     │  (PostgreSQL)   │
│                 │     │                 │     │                 │
└─────────────────┘     └────────┬────────┘     └─────────────────┘
                                 │
                        ┌────────┴────────┐
                        │                 │
                        ▼                 ▼
                 ┌──────────┐      ┌──────────┐
                 │  Redis   │      │   LLM    │
                 │ (Cache)  │      │ (OpenAI) │
                 └──────────┘      └──────────┘
```

## Technology Decisions

### Backend: FastAPI (Python)

**Rationale:**
- Native async support for I/O-bound operations
- Automatic OpenAPI documentation
- Excellent Pydantic integration for validation
- Strong typing support
- Rich ecosystem for data processing (pandas, numpy)

### Frontend: Next.js 14 (TypeScript)

**Rationale:**
- Server components for better performance
- App Router for modern routing patterns
- TypeScript for type safety
- React ecosystem compatibility

### Database: PostgreSQL

**Rationale:**
- ACID compliance for data integrity
- JSON support for flexible schemas
- Excellent performance at scale
- Strong ecosystem and tooling

### Cache: Redis

**Rationale:**
- Fast in-memory caching
- Session storage
- Rate limiting support
- Pub/sub for real-time features (future)

## Backend Architecture

### Layer Structure

```
app/
├── api/          # HTTP Layer (Controllers)
├── services/     # Business Logic (Use Cases)
├── models/       # Domain Entities (SQLAlchemy)
├── schemas/      # DTOs (Pydantic)
├── core/         # Cross-cutting Concerns
├── llm/          # AI Integration
└── mcp/          # Model Context Protocol
```

### Dependency Flow

```
API → Services → (Models | LLM | MCP)
         ↓
      Schemas (DTOs)
```

### Key Design Decisions

1. **Async Everything**: All I/O operations use async/await
2. **Dependency Injection**: FastAPI's Depends for loose coupling
3. **Repository Pattern**: Abstract database operations
4. **Service Layer**: Business logic isolated from HTTP concerns

## Security Architecture

### Authentication Flow

```
1. User submits credentials
2. Backend validates against DB
3. JWT token issued (short-lived)
4. Token included in subsequent requests
5. Token validated on each request
```

### Data Security

- All data encrypted at rest (PostgreSQL encryption)
- TLS for data in transit
- User data isolation through tenant-based queries
- No logging of sensitive data

## Scalability Considerations

### Horizontal Scaling

- Stateless backend design
- Redis for session management
- Database connection pooling

### Performance Optimization

- Response caching with Redis
- Lazy loading for large datasets
- Pagination for all list endpoints
- Async processing for heavy operations

---

*This is a living document. Update as architecture evolves.*
