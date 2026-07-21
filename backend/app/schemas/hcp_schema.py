from pydantic import BaseModel

class HCPCreate(BaseModel):
    name: str
    hospital: str
    specialty: str
    department: str
    city: str
    state: str
    phone: str
    email: str
    status: str
    notes: str

class HCPResponse(HCPCreate):
    id: int

    class Config:
        from_attributes = True