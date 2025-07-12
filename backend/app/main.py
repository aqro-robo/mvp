from fastapi import FastAPI
from app.routes import user
from app.core.config import settings

app = FastAPI(title="Aqro Backend")

app.include_router(user.router, prefix="/users", tags=["Users"])
