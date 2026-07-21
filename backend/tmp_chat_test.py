from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)
response = client.post('/chat', json={'message': 'Hello from test'})
print('status_code', response.status_code)
print(response.text)
