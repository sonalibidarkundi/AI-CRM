from sqlalchemy import Column, Integer, String, Text, Date
from app.database import Base

class Interaction(Base):
    __tablename__ = "interactions"

    id = Column(Integer, primary_key=True, index=True)
    hcp_name = Column(String(100))
    hospital = Column(String(100))
    specialty = Column(String(100))
    interaction_type = Column(String(50))
    product_discussed = Column(String(100))
    discussion_summary = Column(Text)
    interaction_date = Column(Date)