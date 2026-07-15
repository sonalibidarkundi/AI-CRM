from langchain_google_genai import ChatGoogleGenerativeAI
from app.config import GOOGLE_API_KEY

llm = ChatGoogleGenerativeAI(
    model="gemini-flash-latest",
    google_api_key=GOOGLE_API_KEY,
)

response = llm.invoke("Hello")
print(response.content)