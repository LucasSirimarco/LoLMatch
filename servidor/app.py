from flask import Flask, Blueprint, jsonify, json, request
from flask_cors import CORS, cross_origin
from backend import FuncionesBack
from dotenv import load_dotenv
from function_jwt import crearToken,validarToken

app = Flask(__name__)
route_auth = Blueprint("route_auth", __name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

@cross_origin()
@app.route('/registration',methods=["POST"])
def registrarUsuario():
    jsonObjeto = request.get_json()
    response = FuncionesBack.sign_up(jsonObjeto)
    return jsonify(response)

@cross_origin()
@app.route('/login',methods=["POST"])
def leerObjetoLogin():
    jsonObjeto = request.get_json()
    respuestaLogin = FuncionesBack.sign_in(jsonObjeto)
    if respuestaLogin: 
        print("Usuario Encontrado")
        accessToken = crearToken(data = respuestaLogin)
        response = jsonify({
            "data": respuestaLogin,
            "accessToken": accessToken.decode()
        })
        print("Usuario encontrado")
        response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
        return response
    else:
        response = jsonify({"message":"User not found"})
        print("No se encontro el Usuario")
        response.status_code = 404
        return response
    

@app.route("/verify/token")
def verificarToken():
    token = request.headers["Autorization"].split(" ")[1]
    return validarToken(token, output=True)

if __name__ == "__main__":
    load_dotenv()
    app.run(port=4010,debug=True)
