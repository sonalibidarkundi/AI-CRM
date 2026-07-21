from dotenv import load_dotenv
import os
from google import genai
from google.genai.types import ListModelsConfig

load_dotenv()
api_key = os.getenv('GOOGLE_API_KEY')
print('API key present:', bool(api_key))
client = genai.Client(api_key=api_key)
models = client.models.list(config=ListModelsConfig(filter='publisher="google"'))
for m in models:
    print(m.name)
print('done')
