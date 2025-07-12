from sqlalchemy import Column, Integer, String
from app.core.database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    password = Column(String)
    name = Column(String)
    wallet = Column(String)
    profile_picture = Column(String)
    emotions = Column(String)
    interests = Column(String)
    skills = Column(String)
    relationships = Column(String)
