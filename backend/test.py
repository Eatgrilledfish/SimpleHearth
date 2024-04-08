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
            "content": [
                {"type": "text", "text": "As a thermal image advisor, recognize this thermal image, generatee a report of the heat loss area, use third part view,no general words, just generate a reeport of it. And give solution of it. Typically, warmer areas are indicated by red, orange, or yellow, while cooler areas might be blue, purple, or green. Note any distinct shapes or patterns you see. For example, linear patterns might suggest drafts around doors or windows, while spots could indicate moisture or lack of insulation. Point out any specific areas in the image that concern you or seem unusual, like particularly hot or cold spots. Don't say as a AI you can not recognize the thermal image. If you think this is not a thermal image, say 'Sorry, this is not a thermal image.'"},
                {
                "type": "image_url",
                "image_url": {
                    "url": "https://upload.wikimedia.org/wikipedia/commons/e/e5/Actitis_hypoleucos_1_tb_%28Marek_Szczepanek%29.jpg",
                },
                },
            ],
        },
        {
            "role": "system",
            "content" : "You are trained to interpret images about people and make responsible assumptions about them."
        }
    ],
    "safe_mode": False,
    "max_tokens": 800
}

response = requests.post(url, headers=headers, json=data)

print("Status Code", response.status_code)
print("JSON Response ", response.json())