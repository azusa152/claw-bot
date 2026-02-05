"""API Endpoints (Routes)."""

from fastapi import APIRouter

router = APIRouter()


@router.get("/")
async def root() -> dict[str, str]:
    """Root endpoint."""
    return {"message": "Sheet Bridge API"}
