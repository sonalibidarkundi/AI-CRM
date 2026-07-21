from fastapi import APIRouter
from sqlalchemy import func, text

from app.database import SessionLocal
from app.models.hcp import HCP
from app.models.interaction import Interaction

router = APIRouter(
    prefix="/analytics",
    tags=["Analytics"]
)


@router.get("/stats")
def analytics_stats():

    db = SessionLocal()

    try:

        # Debug
        db_name = db.execute(
            text("SELECT DATABASE()")
        ).fetchone()

        hcp_table_count = db.execute(
            text("SELECT COUNT(*) FROM hcps")
        ).fetchone()

        print("CONNECTED DATABASE:", db_name)
        print("MYSQL HCPS COUNT:", hcp_table_count)

        # Total HCPs
        total_hcp = db.query(HCP).count()

        # Total Interactions
        total_interactions = db.query(Interaction).count()

        # Interaction Types
        interaction_types = (
            db.query(
                Interaction.interaction_type,
                func.count(Interaction.id)
            )
            .group_by(Interaction.interaction_type)
            .all()
        )

        interaction_data = [
            {
                "type": row[0],
                "count": row[1]
            }
            for row in interaction_types
        ]

        return {
            "total_hcp": total_hcp,
            "total_interactions": total_interactions,
            "success_rate": 85,
            "hcp_growth": [],
            "interaction_types": interaction_data
        }

    finally:
        db.close()