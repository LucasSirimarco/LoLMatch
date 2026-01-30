from backend.GestorDB import GestorDB

CONEXION_DB = GestorDB()

class GestorLogin:

    def __init__(self):
        self

    def sign_in(self, email, pwd):

        try:

            CONEXION_DB.iniciarConexion('localhost','postgres','123CrackeN','postgres',5432)

            CONEXION_DB.ejecutar("SELECT pwd, id, username FROM usuarios WHERE email = '{}' AND pwd = '{}'".format(email, pwd))
            retorno = CONEXION_DB.mostrarResultados()
            print(retorno)

            if (len(retorno) == 0):
                raise Exception("Credenciales incorrectas")

            respuesta = {
                "Id": retorno[0][1],
                "Username": retorno[0][2]
            }

        except Exception as e:
            print (e)
            respuesta = False

        finally:
            CONEXION_DB.ejecutar("SELECT refreshtoken FROM usuarios WHERE email LIKE '{}'".format(email))
            print(CONEXION_DB.mostrarResultados())
            CONEXION_DB.finalizarConexion()
            print("Devolviendo respuesta: {}".format(respuesta))
            return respuesta

    def sign_up(self, email, pwd, username, fechaNac):

        try:

            CONEXION_DB.iniciarConexion('localhost','postgres','123CrackeN','postgres',5432)

            CONEXION_DB.ejecutar("SELECT email FROM usuarios WHERE email LIKE '{}'".format(email))
            retorno = CONEXION_DB.mostrarResultados()
            print(retorno)

            if (len(retorno) != 0):
                raise Exception("No puedo crear una cuenta con un usuario con mail ya existente en la base de datos")

            CONEXION_DB.ejecutar("INSERT INTO usuarios (email, pwd, username, fecha_nacimiento) VALUES ('{}','{}','{}','{}')".format(email,pwd,username,fechaNac))
            CONEXION_DB.commit()
            respuesta = True

        except Exception as e:
            print (e)
            respuesta = False

        finally:
            CONEXION_DB.finalizarConexion()
            print("Devolviendo respuesta: {}".format(respuesta))
            return respuesta

    def agregarRefreshToken(self, email, refreshToken):
        try:

            CONEXION_DB.iniciarConexion('localhost','postgres','123CrackeN','postgres',5432)

            CONEXION_DB.ejecutar("SELECT email FROM login WHERE email LIKE '{}'".format(email))
            retorno = CONEXION_DB.mostrarResultados()
            print(retorno)

            if (len(retorno) == 0):
                raise Exception("No encontré el mail solicitado en la base de datos")

            CONEXION_DB.ejecutar("UPDATE login SET refreshtoken='{}' WHERE email='{}'".format(refreshToken,email))
            CONEXION_DB.ejecutar("INSERT INTO login (refreshToken, pwd) VALUES ('{}','{}')".format(email,refreshToken))
            CONEXION_DB.commit()

            respuesta = True

        except Exception as e:
            print (e)
            respuesta = False

        finally:

            CONEXION_DB.ejecutar("SELECT refreshtoken FROM login WHERE email LIKE '{}'".format(email))
            token = CONEXION_DB.mostrarResultados()
            CONEXION_DB.ejecutar("SELECT email FROM login WHERE email LIKE '{}'".format(email))
            email = CONEXION_DB.mostrarResultados()
            CONEXION_DB.finalizarConexion()
            # print(token)
            print("Devolviendo respuesta: {}".format(respuesta))
            return [respuesta,token[0][0],email[0][0]]
