from flask import Flask, Blueprint, jsonify, json, request
from flask_cors import CORS, cross_origin
from backend import FuncionesBack
from dotenv import load_dotenv
from function_jwt import crearToken,validarToken
from flask_jwt_extended import (
    JWTManager, create_access_token, create_refresh_token, jwt_required, get_jwt_identity
)

app = Flask(__name__)
app.config["JWT_SECRET_KEY"] = "your_secret_key"
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = 900  # 15 minutos
app.config["JWT_REFRESH_TOKEN_EXPIRES"] = 604800  # 7 días
route_auth = Blueprint("route_auth", __name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

jwt = JWTManager(app)



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
        access_token = create_access_token(identity=jsonObjeto["mail"])
        refresh_token = create_refresh_token(identity=jsonObjeto["mail"])
        print("DEBUG access token: " + access_token)
        print("DEBUG refresh token: " + refresh_token)
        # accessToken = crearToken(data = respuestaLogin)
        response = jsonify({
            "data": respuestaLogin,
            "access_token": access_token,
            "refresh_token": refresh_token
        })
        # response = jsonify(access_token=access_token, refresh_token=refresh_token)
        # print("Usuario encontrado")
        response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
        return response
    else:
        response = jsonify({"message":"User not found"})
        print("No se encontro el Usuario")
        response.status_code = 404
        return response
    

@app.route('/api/token/refresh', methods=['POST'])
@jwt_required(refresh=True)
def refresh():
    identity = get_jwt_identity()
    access_token = create_access_token(identity=identity)
    return jsonify(access_token=access_token)

# @app.route("/verify/token")
# def verificarToken():
#     token = request.headers["Autorization"].split(" ")[1]
#     return validarToken(token, output=True)

@app.route('/api/protected', methods=['GET'])
@jwt_required()
def protected():
    identity = get_jwt_identity()
    return jsonify(logged_in_as=identity)

if __name__ == "__main__":
    load_dotenv()
    app.run(port=4010,debug=True)
