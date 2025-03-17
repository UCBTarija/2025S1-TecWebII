class Matematica:
    def __init__(self, nombre:str):
        self.a = 10
        self.b = 20
        print("constructor")


    def suma(self, a:int, b:int)->int:
        return a + b

    def resta(self, a:int, b:int)->int:
        return a - b 


mat = Matematica("hola")
