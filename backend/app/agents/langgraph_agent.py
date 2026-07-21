from langchain_google_genai import ChatGoogleGenerativeAI
from langgraph.prebuilt import create_react_agent

from app.config import GOOGLE_API_KEY, GOOGLE_MODEL_NAME

from app.tools.log_interaction import log_interaction
from app.tools.edit_interaction import edit_interaction
from app.tools.search_hcp import search_hcp
from app.tools.followup import followup
from app.tools.summary import summary

FALLBACK_MODELS = [
    "gemini-flash-lite-latest",
    "gemini-3.5-flash",
    "gemini-2.5-flash-lite",
]


def make_agent(model_name: str | None = None):
    model = model_name or GOOGLE_MODEL_NAME
    llm = ChatGoogleGenerativeAI(
        model=model,
        api_key=GOOGLE_API_KEY,
        temperature=0,
    )

    tools = [
        log_interaction,
        edit_interaction,
        search_hcp,
        followup,
        summary,
    ]

    return create_react_agent(
        model=llm,
        tools=tools,
    )


agent = make_agent()
