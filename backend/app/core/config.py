from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    DATABASE_URL: str = "postgresql://aqro_user:yourpassword@localhost/aqro_db"

    class Config:
        env_file = ".env"

settings = Settings()
