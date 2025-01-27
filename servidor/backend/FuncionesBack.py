from backend.GestorDB import GestorDB
from backend.GestorLogin import GestorLogin

CONEXION_LOGIN = GestorLogin()

def sign_in(objeto):
    print("DEBUGER +++++++++++++")
    print(objeto)
    mail = objeto["mail"]
    pwd = objeto["password"]

    loginResponse = CONEXION_LOGIN.sign_in(mail,pwd)

    if(loginResponse):
        return loginResponse
    
    return False

def sign_up(objeto):

    print(objeto)
    mail = objeto["email"]
    pwd = objeto["pwd"]
    username = objeto["username"]

    return CONEXION_LOGIN.sign_up(mail,pwd,username)

def almacenar_refresh_token(objetoUsuario, refreshToken):

    mail = objetoUsuario["User"]
    refreshToken = objetoUsuario["Token"]

    return CONEXION_LOGIN.agregarRefreshToken(mail,refreshToken)



def Test_Login(objeto):
    print (sign_in(objeto))


def Test_Register(objeto):
    print (sign_up(objeto))