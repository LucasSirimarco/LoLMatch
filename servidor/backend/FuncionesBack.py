from backend.GestorDB import GestorDB
from backend.GestorLogin import GestorLogin

CONEXION_LOGIN = GestorLogin()

def sign_in(objeto):
    print("DEBUGER +++++++++++++")
    print(objeto)
    email = objeto["email"]
    pwd = objeto["password"]

    loginResponse = CONEXION_LOGIN.sign_in(email,pwd)

    if(loginResponse):
        print("loginResponseloginResponseloginResponseloginResponseloginResponse")
        print(loginResponse)
        return loginResponse
    
    return False

def sign_up(objeto):

    print(objeto)
    email = objeto["email"]
    pwd = objeto["pwd"]
    username = objeto["username"]
    fechaNac = objeto["fechaNac"]

    return CONEXION_LOGIN.sign_up(email,pwd,username,fechaNac)

def almacenar_refresh_token(objetoUsuario, refreshToken):

    email = objetoUsuario["User"]
    refreshToken = objetoUsuario["Token"]

    return CONEXION_LOGIN.agregarRefreshToken(email,refreshToken)



def Test_Login(objeto):
    print (sign_in(objeto))


def Test_Register(objeto):
    print (sign_up(objeto))