# Importamos el módulo http.server
from http.server import SimpleHTTPRequestHandler, HTTPServer

# Definimos el host y el puerto en el que queremos que se ejecute el servidor
HOST = "0.0.0.0"  # Para que esté disponible en toda la red
PORT = 8000       # Puerto 8000

# Usamos SimpleHTTPRequestHandler, que servirá archivos estáticos desde el directorio actual
def run():
    server_address = (HOST, PORT)
    httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)
    print(f"Servidor iniciado en http://{HOST}:{PORT}")
    httpd.serve_forever()

if __name__ == "__main__":
    run()
