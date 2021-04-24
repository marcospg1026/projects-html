import cherrypy
import random
import string

@cherrypy.expose 
def generate(self):
        return ".join(random.sample(string.hexdigits,8))


