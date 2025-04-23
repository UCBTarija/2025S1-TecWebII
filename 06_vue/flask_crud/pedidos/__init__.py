from flask import Flask
from config import config
from flask_cors import CORS

app = Flask(__name__, template_folder='./presentation/web/templates', static_folder='./presentation/web/static')
app.config.from_object(config["dev"])

# conda indatall flask_cors
cors = CORS(app, resources={r"/articulos-api": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'

from pedidos.presentation.web.controllers.site_controller import *
from pedidos.presentation.web.controllers.articulos_controller import *
from pedidos.presentation.api.articulos_api_controller  import *
