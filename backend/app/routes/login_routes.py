from fastapi import APIRouter
from app.database import SessionLocal
from app.models.user import User

router = APIRouter(
    prefix="/login",
    tags=["Login"]
)


@router.post("/")
def login(data: dict):

    db = SessionLocal()

    try:

        email = data.get("email")
        password = data.get("password")

        user = (
            db.query(User)
            .filter(User.email == email)
            .first()
        )

        if not user:
            return {
                "success": False,
                "message": "Invalid Email"
            }

        if user.password != password:
            return {
                "success": False,
                "message": "Invalid Password"
            }

        return {
            "success": True,
            "message": "Login Successful",
            "user": {
                "id": user.id,
                "name": user.name,
                "email": user.email,
                "phone": user.phone,
                "designation": user.designation
            }
        }

    finally:
        db.close()