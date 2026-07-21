from fastapi import APIRouter
from app.database import SessionLocal
from app.models.user import User


router = APIRouter(
    prefix="/profile",
    tags=["Profile"]
)


# ==========================================
# GET PROFILE
# ==========================================

@router.get("/")
def get_profile():

    db = SessionLocal()

    try:

        user = db.query(User).first()


        if not user:

            user = User(

                name="Sonali",

                email="sonali@email.com",

                phone="9876543210",

                designation="Medical Representative",

                password="admin123"

            )


            db.add(user)

            db.commit()

            db.refresh(user)



        return {

            "id": user.id,

            "name": user.name,

            "email": user.email,

            "phone": user.phone,

            "designation": user.designation

        }



    finally:

        db.close()





# ==========================================
# UPDATE PROFILE
# ==========================================

@router.put("/")
def update_profile(data: dict):

    db = SessionLocal()

    try:


        user = db.query(User).first()



        if not user:

            return {

                "success": False,

                "message": "User not found"

            }




        user.name = data.get("name")

        user.email = data.get("email")

        user.phone = data.get("phone")

        user.designation = data.get("designation")



        db.commit()

        db.refresh(user)



        return {

            "success": True,

            "message": "Profile Updated Successfully"

        }



    except Exception as e:


        db.rollback()


        return {

            "success": False,

            "message": str(e)

        }



    finally:

        db.close()





# ==========================================
# UPDATE PASSWORD
# ==========================================

@router.put("/password")
def update_password(data: dict):

    db = SessionLocal()

    try:


        user = db.query(User).first()



        if not user:

            return {

                "success":False,

                "message":"User not found"

            }




        if user.password != data["current_password"]:


            return {

                "success":False,

                "message":"Current Password is Incorrect"

            }




        if data["new_password"] != data["confirm_password"]:


            return {

                "success":False,

                "message":
                "New Password and Confirm Password do not match"

            }




        user.password = data["new_password"]


        db.commit()



        return {

            "success":True,

            "message":"Password Updated Successfully"

        }



    except Exception as e:


        db.rollback()


        return {

            "success":False,

            "message":str(e)

        }



    finally:

        db.close()