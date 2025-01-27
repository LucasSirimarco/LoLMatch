from jwt import encode, decode, exceptions
from os import getenv 
from datetime import datetime, timedelta
from flask import jsonify

def tiempoDeExpiracion(minutes: int):
    now = datetime.now()
    newDate = now + timedelta(0,0,0,0,minutes)
    return newDate

def crearToken(data:dict):
    token = encode(payload={**data,"exp":tiempoDeExpiracion(60)},key=getenv("SECRET"),algorithm="HS256")
    return token.encode("UTF-8")

def validarToken(token, output=False):
    try:
        if output:
            tokenValidado = decode(token, key=getenv("SECRET"),algorithms=["HS256"])
            print("Token Validado")
            return tokenValidado
        decode(token, key=getenv("SECRET"), algorithms=["HS256"])   
    except exceptions.DecodeError:
        response = jsonify({"message":"Invalid Token"})    
        response.status_code = 401
        return response
    except exceptions.ExpiredSignatureError:
        response = jsonify({"message":"Token Expired"})    
        response.status_code = 401
        return response

