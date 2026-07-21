from fastapi import APIRouter
from app.database import SessionLocal
from app.models.user import User

router = APIRouter(
    prefix="/register",
    tags=["Register"]
)


@router.post("/")
def register(data: dict):

    db = SessionLocal()

    try:

        # ==========================
        # Check Email
        # ==========================

        existing_user = (
            db.query(User)
            .filter(User.email == data["email"])
            .first()
        )

        if existing_user:

            return {
                "success": False,
                "message": "Email already registered"
            }

        # ==========================
        # Create User
        # ==========================

        new_user = User(

            name=data["name"],

            email=data["email"],

            phone=data["phone"],

            designation=data["designation"],

            password=data["password"]

        )

        db.add(new_user)

        db.commit()

        db.refresh(new_user)

        return {

            "success": True,

            "message": "Registration Successful"

        }

    finally:

        db.close()