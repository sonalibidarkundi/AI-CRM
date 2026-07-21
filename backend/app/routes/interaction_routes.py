from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from langchain_core.messages import HumanMessage
import google.genai.errors as genai_errors

from app.database import get_db
from app.models.interaction import Interaction
from app.schemas.interaction_schema import InteractionCreate, ChatRequest
from app.agents.langgraph_agent import agent, make_agent, FALLBACK_MODELS
from app.config import GOOGLE_MODEL_NAME

router = APIRouter()
print("REGISTER ROUTE LOADED")


@router.post("/interaction")
def save_interaction(
    data: InteractionCreate,
    db: Session = Depends(get_db)
):
    interaction = Interaction(
        hcp_name=data.hcp_name,
        hospital=data.hospital,
        specialty=data.specialty,
        interaction_type=data.interaction_type,
        product_discussed=data.product_discussed,
        discussion_summary=data.discussion_summary,
        interaction_date=data.interaction_date,
    )

    db.add(interaction)
    db.commit()
    db.refresh(interaction)

    return {
        "message": "Interaction Saved Successfully",
        "id": interaction.id,
    }


@router.get("/interactions")
def get_interactions(db: Session = Depends(get_db)):
    return db.query(Interaction).all()


@router.post("/chat")
def chat(request: ChatRequest):
    try:
        response = agent.invoke(
            {
                "messages": [
                    HumanMessage(content=request.message)
                ]
            }
        )

        return {
            "response": response["messages"][-1].content
        }

    except genai_errors.ServerError as e:
        import traceback
        traceback.print_exc()

        current_model = GOOGLE_MODEL_NAME
        for fallback_model in FALLBACK_MODELS:
            if fallback_model == current_model:
                continue
            try:
                fallback_agent = make_agent(model_name=fallback_model)
                response = fallback_agent.invoke(
                    {
                        "messages": [
                            HumanMessage(content=request.message)
                        ]
                    }
                )
                return {
                    "response": response["messages"][-1].content,
                    "model": fallback_model,
                }
            except genai_errors.ServerError:
                continue

        raise HTTPException(
            status_code=503,
            detail="AI service unavailable. Please try again later."
        ) from e
    except genai_errors.APIError as e:
        import traceback
        traceback.print_exc()

        raise HTTPException(
            status_code=502,
            detail=f"AI service error: {e}"
        ) from e
    except Exception as e:
        import traceback
        traceback.print_exc()

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )