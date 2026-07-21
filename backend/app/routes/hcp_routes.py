from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.hcp import HCP
from app.schemas.hcp_schema import HCPCreate

router = APIRouter()

@router.post("/hcp")
def add_hcp(data: HCPCreate, db: Session = Depends(get_db)):

    hcp = HCP(**data.model_dump())

    db.add(hcp)
    db.commit()
    db.refresh(hcp)

    return {
        "message": "HCP Added Successfully",
        "id": hcp.id
    }


@router.get("/hcp")
def get_hcps(db: Session = Depends(get_db)):
    return db.query(HCP).all()