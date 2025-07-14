from sqlalchemy import Column, Integer, String
from app.core.database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    password = Column(String, nullable=False)
    name = Column(String, nullable=False)
    wallet = Column(String, unique=True, index=True)
    profile_picture = Column(String)

    # داده‌های هوش مصنوعی برای شناخت کاربر
    emotions = Column(String)        # احساسات
    interests = Column(String)       # علایق
    skills = Column(String)          # مهارت‌ها
    relationships = Column(String)   # روابط اجتماعی
    health = Column(String)          # سلامت جسمی (جدید)
    memory = Column(String)          # حافظه کاربر (تاریخچه)
    profile_state = Column(String)   # وضعیت شناخت از پروفایل (درصدی)