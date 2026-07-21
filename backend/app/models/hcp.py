from sqlalchemy import Column, Integer, String

from app.database import Base


class HCP(Base):

    __tablename__ = "hcps"


    id = Column(
        Integer,
        primary_key=True,
        index=True
    )


    name = Column(
        String(100),
        nullable=False
    )


    hospital = Column(
        String(150)
    )


    specialty = Column(
        String(100)
    )


    department = Column(
        String(100)
    )


    city = Column(
        String(100)
    )


    state = Column(
        String(100)
    )


    phone = Column(
        String(20)
    )


    email = Column(
        String(100)
    )


    status = Column(
        String(20),
        default="Active"
    )


    notes = Column(
        String(500)
    )