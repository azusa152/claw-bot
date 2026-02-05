# API Specification

## Base URL

- Development: `http://localhost:8000/api`
- Production: `https://api.sheet-bridge.com/api`

## Authentication

All protected endpoints require a Bearer token in the Authorization header:

```
Authorization: Bearer <access_token>
```

---

## Endpoints

### Health Check

#### `GET /health`

Check API health status.

**Response:**
```json
{
  "status": "healthy"
}
```

---

### Authentication

#### `POST /auth/register`

Register a new user.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securepassword123"
}
```

**Response (201):**
```json
{
  "id": "uuid",
  "email": "user@example.com",
  "created_at": "2024-01-01T00:00:00Z"
}
```

#### `POST /auth/login`

Authenticate and receive access token.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securepassword123"
}
```

**Response (200):**
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIs...",
  "token_type": "bearer"
}
```

---

### Sheets

#### `POST /sheets/upload`

Upload a spreadsheet file.

**Request:**
- Content-Type: `multipart/form-data`
- File field: `file`

**Response (201):**
```json
{
  "id": "uuid",
  "filename": "data.csv",
  "row_count": 1000,
  "column_count": 10,
  "columns": ["id", "name", "email", ...],
  "created_at": "2024-01-01T00:00:00Z"
}
```

#### `GET /sheets`

List user's uploaded sheets.

**Response (200):**
```json
{
  "items": [
    {
      "id": "uuid",
      "filename": "data.csv",
      "row_count": 1000,
      "created_at": "2024-01-01T00:00:00Z"
    }
  ],
  "total": 1,
  "page": 1,
  "per_page": 20
}
```

#### `GET /sheets/{sheet_id}`

Get sheet details with preview.

**Response (200):**
```json
{
  "id": "uuid",
  "filename": "data.csv",
  "columns": ["id", "name", "email"],
  "preview": [
    {"id": 1, "name": "John", "email": "john@example.com"},
    {"id": 2, "name": "Jane", "email": "jane@example.com"}
  ],
  "row_count": 1000,
  "column_count": 3
}
```

#### `DELETE /sheets/{sheet_id}`

Delete a sheet.

**Response (204):** No content

---

### Queries

#### `POST /sheets/{sheet_id}/query`

Query sheet data using natural language.

**Request Body:**
```json
{
  "question": "What is the average sales by region?"
}
```

**Response (200):**
```json
{
  "answer": "The average sales by region are: North - $45,000, South - $38,000, East - $52,000, West - $41,000",
  "data": [
    {"region": "North", "average_sales": 45000},
    {"region": "South", "average_sales": 38000},
    {"region": "East", "average_sales": 52000},
    {"region": "West", "average_sales": 41000}
  ],
  "sql_generated": "SELECT region, AVG(sales) as average_sales FROM data GROUP BY region",
  "execution_time_ms": 150
}
```

---

## Error Responses

All errors follow this format:

```json
{
  "detail": "Error message describing what went wrong"
}
```

### Common Status Codes

| Code | Description |
|------|-------------|
| 400  | Bad Request - Invalid input |
| 401  | Unauthorized - Invalid or missing token |
| 403  | Forbidden - Insufficient permissions |
| 404  | Not Found - Resource doesn't exist |
| 422  | Validation Error - Schema validation failed |
| 500  | Internal Server Error |

---

## Rate Limiting

- 100 requests per minute per user
- 429 status code when exceeded
- `Retry-After` header indicates wait time

---

*Generated from OpenAPI specification*
