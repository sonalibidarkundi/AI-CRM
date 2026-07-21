from fastapi import APIRouter
from app.database import SessionLocal

from app.models.hcp import HCP
from app.models.interaction import Interaction


router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)



@router.get("/stats")
def dashboard_stats():

    db = SessionLocal()

    try:

        total_hcp = db.query(HCP).count()


        total_interactions = db.query(Interaction).count()


        return {

            "total_hcp": total_hcp,

            "today_interactions": total_interactions,

            "pending_followups": 0,

            "ai_suggestions": 5

        }


    except Exception as e:

        print("Dashboard Error:", e)

        return {
            "error": str(e)
        }


    finally:

        db.close()