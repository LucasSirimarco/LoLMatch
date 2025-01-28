from wtforms import Form, StringField, PasswordField, validators,BooleanField


class RegistrationForm(Form):
    username = StringField('Usuario', [validators.Length(min=4, max=25)])
    email    = StringField('Email', [validators.Length(min=6, max=35)])
    password = PasswordField('Contraseña', [validators.EqualTo('confirm', message='Passwords must match')])
    confirm = PasswordField('Repita Contraseña')
    accept_tos = BooleanField('Acepto los terminos y Condiciones', [validators.DataRequired()])