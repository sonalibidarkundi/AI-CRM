from pydantic import BaseModel
from datetime import date

class InteractionCreate(BaseModel):
    hcp_name: str
    hospital: str
    specialty: str
    interaction_type: str
    product_discussed: str
    discussion_summary: str
    interaction_date: date

class InteractionResponse(InteractionCreate):
    id: int

    class Config:
        from_attributes = True

class ChatRequest(BaseModel):
    message: str