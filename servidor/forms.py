from wtforms import Form, StringField, PasswordField, validators

class LogginForm(Form):
    
    username = StringField('Usuario', [validators.Length(min=4, max=30)])
    password  = PasswordField('Contraseña')

