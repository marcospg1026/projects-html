import cherrypy
import random
import string

class generate(object):

        @cherrypy.expose
        def generate(self):
                return  ''.join(random.sample(string.hexdigits,8))
        @cherrypy.expose
        def index(self):
                return open('randomNumber.html')

if __name__ == '__main__':
        cherrypy.server.socket_host = '10.3.60.143'          
        cherrypy.quickstart(generate())


