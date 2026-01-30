import requests



API_KEY = "RGAPI-59ea0571-7fd3-4a13-b604-203de555b483"

##RGAPI-4a4e12fa-93d1-459c-b7d7-928d3261d95d
RIOT_ID = "darcksesindeath"
GAME_CODE = "la1"  # Ejemplo: "na1", "euw1", "kr", etc.

PU_ID = "D2kTKSEcGSgDfM9DUV0MBb0oFvR0Vu8fYPckPzuye3GKsyXE5vUCysoFW9YghPvmCFcPpMtuxWTspg"

PU_ID_EMMA = "xwkEzbkZ9pdstYsnSAoPMsaCEvnWsL9Mik5UuP8-Nt5mv4T0WzHP1PqMQou7rw2GMDzot6UyQRhTFg"

PU_ID_PABLITO = "XwO2pwVpq0DYQ7ywbVsizgLWx-QqvZeRrNg5YWRaVhEykH3LDzs7bs5wzWT97dFKtMzyAnxU2izR4w"

url = "https://la2.api.riotgames.com/lol/league/v4/entries/by-puuid/XwO2pwVpq0DYQ7ywbVsizgLWx-QqvZeRrNg5YWRaVhEykH3LDzs7bs5wzWT97dFKtMzyAnxU2izR4w?api_key=RGAPI-0d3b8327-d7f8-4a89-a313-08d570cdd395"
# url = "https://la2.api.riotgames.com/lol/league/v4/entries/by-puuid/xwkEzbkZ9pdstYsnSAoPMsaCEvnWsL9Mik5UuP8-Nt5mv4T0WzHP1PqMQou7rw2GMDzot6UyQRhTFg?api_key=RGAPI-0d3b8327-d7f8-4a89-a313-08d570cdd395"
# url = "https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/Kazza/Kassa?api_key=RGAPI-7d5e18f7-ea7b-4eec-bee5-ad810878b8ea"
# url = "https://la2.api.riotgames.com/lol/league/v4/entries/by-puuid/D2kTKSEcGSgDfM9DUV0MBb0oFvR0Vu8fYPckPzuye3GKsyXE5vUCysoFW9YghPvmCFcPpMtuxWTspg?api_key=RGAPI-0d3b8327-d7f8-4a89-a313-08d570cdd395"
# url = "https://la2.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-0d3b8327-d7f8-4a89-a313-08d570cdd395"
# url = "https://americas.api.riotgames.com/riot/account/v1/accounts/by-puuid/D2kTKSEcGSgDfM9DUV0MBb0oFvR0Vu8fYPckPzuye3GKsyXE5vUCysoFW9YghPvmCFcPpMtuxWTspg?api_key=RGAPI-7d5e18f7-ea7b-4eec-bee5-ad810878b8ea"
# url = f"https://api.riotgames.com/account/v1/players/by-riot-id/{GAME_CODE}/{RIOT_ID}"
headers = {"X-Riot-Token": API_KEY}

print("____________________________")
print(url)
print("____________________________")
print(headers)
print("____________________________")

response = requests.get(url, headers=headers)
if response.status_code == 200:
    player_data = response.json()
    print(player_data)
else:
    print(f"Error {response.status_code}: {response.text}")