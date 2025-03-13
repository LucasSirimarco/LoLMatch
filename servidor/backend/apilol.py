import requests

API_KEY = "RGAPI-140f1678-e327-4864-8d9c-7bf83caf3247"
SUMMONER_NAME = "darcksesindeath"
REGION = "la1"  # Ejemplo: "na1", "euw1", "kr", etc.

url = f"https://{REGION}.api.riotgames.com/lol/summoner/v4/summoners/by-name/{SUMMONER_NAME}"
headers = {"X-Riot-Token": API_KEY}

response = requests.get(url, headers=headers)
if response.status_code == 200:
    summoner_data = response.json()
    print(summoner_data)
else:
    print("Error:", response.status_code, response.text)
