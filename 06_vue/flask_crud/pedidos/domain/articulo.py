class Articulo:
    def __init__(self, id: int, codigo: str, nombre: str):
        self._id = id
        self._codigo = codigo
        self._nombre = nombre

    def id(self) -> int:
        return self._id

    def codigo(self) -> str:
        return self._codigo

    def nombre(self) -> str:
        return self._nombre

    def setCodigo(self, value: str) -> None:
        self._codigo = value

    def setNombre(self, value: str) -> None:
        self._nombre = value
