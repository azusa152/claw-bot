# Backend Tasks

## MVP Development Tickets

### Phase 1: Foundation

#### [SHEET-001] Project Setup
- [x] Initialize FastAPI project structure
- [x] Configure pyproject.toml with dependencies
- [x] Set up Docker Compose for local development
- [x] Configure Alembic for migrations
- [ ] Add pre-commit hooks

#### [SHEET-002] Database Setup
- [ ] Create User model
- [ ] Create Sheet model
- [ ] Create Query model (for audit/history)
- [ ] Write initial migration
- [ ] Add database health check

#### [SHEET-003] Authentication System
- [ ] Implement user registration endpoint
- [ ] Implement login endpoint with JWT
- [ ] Add password hashing with bcrypt
- [ ] Create auth middleware
- [ ] Add token refresh mechanism

---

### Phase 2: Core Features

#### [SHEET-004] File Upload Service
- [ ] Create upload endpoint (multipart/form-data)
- [ ] Validate file type (CSV, XLSX)
- [ ] Parse and store file metadata
- [ ] Store file content in database or object storage
- [ ] Add file size limits

#### [SHEET-005] Sheet Management
- [ ] List sheets endpoint with pagination
- [ ] Get sheet details endpoint
- [ ] Delete sheet endpoint
- [ ] Preview data endpoint (first N rows)

#### [SHEET-006] Data Processing Service
- [ ] CSV parsing with pandas
- [ ] Excel parsing with openpyxl
- [ ] Column type detection
- [ ] Data validation and cleaning
- [ ] Handle encoding issues

---

### Phase 3: AI Integration

#### [SHEET-007] LLM Service Setup
- [ ] Configure OpenAI client
- [ ] Create prompt templates
- [ ] Implement retry logic with backoff
- [ ] Add token counting and limits
- [ ] Implement response streaming (optional)

#### [SHEET-008] Natural Language Query
- [ ] Implement query endpoint
- [ ] Convert natural language to SQL/pandas operations
- [ ] Execute query safely (sandboxed)
- [ ] Format and return results
- [ ] Cache common queries

#### [SHEET-009] Function Calling Implementation
- [ ] Define tool schemas for data operations
- [ ] Implement tool execution handlers
- [ ] Handle multi-step tool chains
- [ ] Add error handling for tool failures

---

### Phase 4: MCP Integration

#### [SHEET-010] MCP Server Setup
- [ ] Implement MCP protocol handlers
- [ ] Define available tools/capabilities
- [ ] Create context management
- [ ] Add tool registration system

#### [SHEET-011] MCP Tools Implementation
- [ ] Sheet listing tool
- [ ] Data query tool
- [ ] Data transformation tool
- [ ] Summary/stats tool

---

### Phase 5: Polish & Production

#### [SHEET-012] Error Handling
- [ ] Implement global exception handler
- [ ] Add structured error responses
- [ ] Create custom exception classes
- [ ] Add request validation errors

#### [SHEET-013] Testing
- [ ] Unit tests for services
- [ ] Integration tests for endpoints
- [ ] Test fixtures and factories
- [ ] CI pipeline setup

#### [SHEET-014] Documentation
- [ ] OpenAPI schema customization
- [ ] API documentation with examples
- [ ] Deployment guide
- [ ] Developer setup guide

---

## Priority Order

1. SHEET-001, SHEET-002, SHEET-003 (Foundation)
2. SHEET-004, SHEET-005, SHEET-006 (Core)
3. SHEET-007, SHEET-008 (AI Basic)
4. SHEET-009, SHEET-010, SHEET-011 (AI Advanced)
5. SHEET-012, SHEET-013, SHEET-014 (Production)

---

*Track progress by checking off completed items*
