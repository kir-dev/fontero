import BaseHTTPServer, SimpleHTTPServer;
s = BaseHTTPServer.HTTPServer(('', 80), SimpleHTTPServer.SimpleHTTPRequestHandler);
s.serve_forever();
