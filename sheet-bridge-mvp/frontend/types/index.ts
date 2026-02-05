/**
 * Shared Types (Generated from OpenAPI)
 * 
 * This file contains TypeScript types that correspond to
 * the backend API schemas. In production, these should be
 * auto-generated from the OpenAPI specification.
 */

export interface User {
  id: string;
  email: string;
  created_at: string;
}

export interface AuthResponse {
  access_token: string;
  token_type: string;
}

export interface ApiError {
  detail: string;
}
