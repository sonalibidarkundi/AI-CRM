from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import Base, engine

from app.models.interaction import Interaction
from app.models.hcp import HCP

from app.routes.interaction_routes import router
from app.routes.hcp_routes import router as hcp_router
from app.routes.dashboard_routes import router as dashboard_router
from app.routes.analytics_routes import router as analytics_router
from app.models.user import User
from app.routes.profile_routes import router as profile_router
from app.routes.login_routes import router as login_router
from app.routes.register_routes import router as register_router



# Create all database tables
Base.metadata.create_all(bind=engine)


app = FastAPI(title="AI First CRM Backend")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Include routes
app.include_router(router)
app.include_router(hcp_router)
app.include_router(dashboard_router)
app.include_router(analytics_router)
app.include_router(profile_router)
app.include_router(login_router)
app.include_router(register_router)

print("REGISTER ROUTER ADDED")
print(register_router.routes)

@app.get("/")
def home():
    return {
        "message": "AI First CRM Backend Running Successfully 🚀"
    }