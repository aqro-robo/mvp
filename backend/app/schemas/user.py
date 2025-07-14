from pydantic import BaseModel, EmailStr



class UserLogin(BaseModel):
    email: EmailStr
    password: str



class UserCreate(BaseModel):
    email: EmailStr
    password: str
    name: str
    wallet: str | None = None
    profile_picture: str | None = None
    emotions: str | None = None
    interests: str | None = None
    skills: str | None = None
    relationships: str | None = None
    health: str | None = None
    memory: str | None = None
    profile_state: str | None = None
