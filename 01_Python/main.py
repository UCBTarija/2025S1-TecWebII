print ("hola mundo...")

a = 10 * 1 + 2

a = a - 1
a -= 1

a *=2
a = a * 2
a +=1

b = "hola"

c = """ hola
de 
varias 
lineas
"""
# comentario de una linea

print (a)

if (a != 10) and (a < 10):
    print ("menor")
else:
    print ("mayor")

for i in range(10):
    print (i)

while a < 10:
    print (a)
    a += 1


def primo(n:int) -> bool:
    for i in range(2, n):
        if n % i == 0:
            return False
    return True

print (primo(7))

a = [1, 2, 3, "texto", 5]

a.append(6)

for i in a:
    print (i)

def primos100()->list:
    lista = []
    for i in range(100):
        if primo(i):
            lista.append(i)
    return lista

for i in primos100():
    print (i)


alumno = {
    "nombre": "Juan",
    "edad": 20,
    "notas": [5, 6, 7],
    "direccion": {
        "calle": "colón",
        "numero": 10
    }
}

for k, v in alumno.items():
    print (k, v)

print (alumno["nombre"])
print (alumno["direccion"]["calle"])


t = (10, 20, "hola")
a, b, c = t

print (a, b, c)
for i in t:
    print (i)

print("Introducir texto")
texto = input()

print("texto introducido: ", texto)

from operaciones.sumas.matematica import Matematica
from operaciones.sumas import texto
m = Matematica()

