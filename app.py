from http.server import BaseHTTPRequestHandler, HTTPServer

class MyServer(BaseHTTPRequestHandler):

    def do_GET(self):
        self.send_response(200)
        self.send_header("Content-type", "text/plain")
        self.end_headers()

        self.wfile.write(b"Hello, Kubernetes!")

server = HTTPServer(("0.0.0.0", 8081), MyServer)

print("Server running on port 8081")

server.serve_forever()