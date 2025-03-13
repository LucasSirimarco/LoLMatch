from flask import Flask, Blueprint, jsonify, json, request,make_response
from flask_cors import CORS, cross_origin
from backend import FuncionesBack
from dotenv import load_dotenv
from function_jwt import crearToken,validarToken
from flask_jwt_extended import ( # type: ignore
    JWTManager, create_access_token, create_refresh_token, jwt_required, get_jwt_identity
)

app = Flask(__name__)
app.config["JWT_SECRET_KEY"] = "your_secret_key"
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = 30# 15 minutos
app.config["JWT_REFRESH_TOKEN_EXPIRES"] = 600# 7 días
route_auth = Blueprint("route_auth", __name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})
CORS(app, origins="http://localhost:3000", supports_credentials=True)

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
        access_token = create_access_token(identity=jsonObjeto["mail"],additional_claims={"username": respuestaLogin["Username"]})
        refresh_token = create_refresh_token(identity=jsonObjeto["mail"])
        print("DEBUG access token: " + access_token)
        print("DEBUG refresh token: " + refresh_token)
        response = make_response(jsonify({
            "message": "Login exitoso",
            "access_token": access_token
        }))
        print("Con el Make_response")
        print(response)
        print(response.headers)
        print(response.status_code)
        
        response.set_cookie(
            'refresh_token', refresh_token,
            httponly=True,  
            secure=False,    
            samesite='Lax', 
            max_age=3000# Expira en 7 días (igual que el refresh token)
        )     
        #print("Cookie set:", response.headers.get('Set-Cookie'))

        print("Con el Refreshh agregado")
        print(response)
        print(response.headers)
        print(response.status_code)


        response.headers.add('Access-Control-Allow-Credentials', 'true')
        response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
        return response
    else:
        response = jsonify({"message":"User not found"})
        print("No se encontro el Usuario")
        response.status_code = 404
        return response

#@app.route('/api/token/refresh', methods=['POST'])
#@jwt_required(refresh=True)
#def refresh():
#    identity = get_jwt_identity()
#    access_token = create_access_token(identity=identity)
#    return jsonify(access_token=access_token)

@cross_origin()
@app.route('/api/refresh-token', methods=["POST"])
def refresh_token():
    refresh_token = request.cookies.get('refresh_token')
    
    if refresh_token:
        # Aquí puedes hacer la validación del refresh token
        print("Refresh Token encontrado:", refresh_token)
        # Luego, puedes seguir con el proceso de renovación del token
    else:
        return jsonify({"error": "No refresh token found"}), 400
    
if __name__ == '__main__':
    app.run(debug=True)

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
    app.run(debug=True, host="0.0.0.0", port=5000)
