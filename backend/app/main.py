from fastapi import FastAPI
from app.routes import user
from app.core.database import create_tables

app = FastAPI(title="Aqro Backend")
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # یا ["http://localhost:5173"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(user.router, prefix="/users", tags=["Users"])

@app.on_event("startup")
def startup():
    create_tables()
