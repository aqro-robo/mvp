from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.schemas.user import UserCreate, UserLogin
from app.services.user import create_user, login_user
from app.core.database import get_db

router = APIRouter()

@router.post("/register")
def register(user: UserCreate, db: Session = Depends(get_db)):
    return create_user(db, user)

@router.post("/login")
def login(data: UserLogin, db: Session = Depends(get_db)):
    user = login_user(db, data.email, data.password)
    if not user:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    return {"token": f"mock-token-for-{user.wallet}"}
