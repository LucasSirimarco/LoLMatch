from distutils.command.config import config
from distutils.debug import DEBUG

class Config:
    SECRET_KEY = '#fg4mTvrGRn4Lf#Gg3k.gi4['

class DevelopmentConfig(Config):
    DEBUG=True
    

config = {
    'development': DevelopmentConfig
}