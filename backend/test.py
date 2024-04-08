import requests

url = "https://openai.api2d.net/v1/chat/completions"

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer fk225497-d0gmSYGb0UiL9F0HzlZCwsOPLnGk16kh'
}

data = {
    "model": "gpt-4-vision-preview",
    "messages": [
        {
            "role": "user",
            "content": "can you describe the image which store in the link? 'https://i.postimg.cc/x851NBMS/image1.jpg'"
        }
    ],
    "safe_mode": False,
    "max_tokens": 800
}

response = requests.post(url, headers=headers, json=data)

print("Status Code", response.status_code)
print("JSON Response ", response.json())