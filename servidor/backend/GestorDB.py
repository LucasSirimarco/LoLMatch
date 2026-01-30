import psycopg2

class GestorDB:
    def __init__(self):
        self

    def iniciarConexion(self,host_,user_,password_,database_,port_):
        try:
            self.db = psycopg2.connect(
                    host=host_,
                    user=user_,
                    password=password_,
                    database=database_,
                    port=port_
            )
            self.cursor = self.db.cursor()
            print("Conexion Exitosa")

            # Crear la tabla si no existe
            self.crearTablaUsuarios()
        except Exception as e:
            print(f"Error al conectar a la base de datos: {e}")

    def crearTablaUsuarios(self):
        query = """
            CREATE TABLE IF NOT EXISTS usuarios (
            id SERIAL PRIMARY KEY,
            username VARCHAR(255) NOT NULL UNIQUE,
            email VARCHAR(255) NOT NULL UNIQUE,
            pwd TEXT NOT NULL,
            fecha_nacimiento DATE NOT NULL,
            nacionalidad INT,
            servidor INT,
            instagram VARCHAR(255),
            discord VARCHAR(255),
            twitch VARCHAR(255),
            twitter VARCHAR(255),
            reddit VARCHAR(255),
            facebook VARCHAR(255),
            imagen_perfil BYTEA,
            refreshtoken VARCHAR(255)
        );
        """
        try:
            self.cursor.execute(query)
            self.db.commit()
            print("Tabla 'usuarios' verificada/creada con éxito")
        except Exception as e:
            print(f"Error al crear la tabla: {e}")

    def ejecutar(self,query):
        self.cursor.execute(query)
        print("Query {} ejecutada con éxito".format(query))

    def mostrarResultados(self):
        return self.cursor.fetchall()

    def mostrarPrimerResultado(self):
        return self.cursor.fetchone()

    def finalizarConexion(self):
        self.db.close()
        print("Conexión Finalizada")

    def commit(self):
        self.db.commit()