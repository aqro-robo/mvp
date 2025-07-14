#!/bin/bash

echo "🔍 Checking .env file..."
cat .env | grep DATABASE_URL || { echo "❌ .env not found or invalid."; exit 1; }

echo ""
echo "🔁 Testing psql direct connection..."
PGPASSWORD=$(cat .env | grep DATABASE_URL | cut -d ':' -f3 | cut -d '@' -f1) psql -U aqro_user -d aqro_db -h 127.0.0.1 -c "\q" > /dev/null 2>&1

if [ $? -eq 0 ]; then
  echo "✅ PostgreSQL connection successful."
else
  echo "❌ Cannot connect to PostgreSQL with credentials from .env"
  exit 1
fi

echo ""
echo "⚙️  Testing Python SQLAlchemy connection..."

python3 <<EOF
from sqlalchemy import create_engine
from os import getenv
from dotenv import load_dotenv
load_dotenv()
url = getenv("DATABASE_URL")
print("Connecting to:", url)
try:
    engine = create_engine(url)
    with engine.connect() as conn:
        print("✅ SQLAlchemy connected to database.")
except Exception as e:
    print("❌ SQLAlchemy failed:", e)
EOF
