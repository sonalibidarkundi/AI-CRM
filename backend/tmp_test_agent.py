from dotenv import load_dotenv
import os
from app.config import GOOGLE_MODEL_NAME, GOOGLE_API_KEY
from langchain_google_genai import ChatGoogleGenerativeAI
from langgraph.prebuilt import create_react_agent
from app.tools.log_interaction import log_interaction
from app.tools.edit_interaction import edit_interaction
from app.tools.search_hcp import search_hcp
from app.tools.followup import followup
from app.tools.summary import summary

load_dotenv()
print('GOOGLE_API_KEY', bool(GOOGLE_API_KEY))
print('GOOGLE_MODEL_NAME', GOOGLE_MODEL_NAME)
llm = ChatGoogleGenerativeAI(model=GOOGLE_MODEL_NAME, api_key=GOOGLE_API_KEY, temperature=0)
print('llm created', llm)
tools = [log_interaction, edit_interaction, search_hcp, followup, summary]
agent = create_react_agent(model=llm, tools=tools)
print('agent created', agent)
