from pedidos.domain.articulos_port import ArticulosPort
from pedidos.domain.articulo import Articulo
from pedidos import *
from pedidos.adapters.Db import *


class ArticulosAdapter(ArticulosPort):

    def get_by_id(self, id: int) -> Articulo | None:
        fila = Db().queryone(
            """
            select id, codigo, nombre from articulo where id=%(id)s
            """,
            {"id": id},
        )

        if fila is None:
            return None

        return Articulo(fila["id"], fila["codigo"], fila["nombre"])

    def find_all(self, filtro: str) -> list:
        filas = Db().queryall(
            """
            select id, codigo, nombre from articulo where nombre LIKE %(filtro)s
            """,
            {"filtro": "%" + filtro + "%"},
        )

        lista = []
        for fila in filas:
            lista.append(Articulo(fila["id"], fila["codigo"], fila["nombre"]))
        return lista

    def save(self, articulo: Articulo) -> None:
        sql = """
        insert into articulo (id, codigo, nombre) 
        values (%(id)s, %(codigo)s, %(nombre)s)
        on conflict (id) do update set codigo=%(codigo)s, nombre=%(nombre)s
        """

        Db().execute(
            sql,
            {"id": articulo.id(), "codigo": articulo.codigo(), "nombre": articulo.nombre()},
        )

    def delete(self, articuloId: int) -> None:
        Db().execute(
            """
            delete from articulo where id=%(id)s
            """,
            {"id": articuloId},
        )

    def get_next_id(self) -> int:
        fila = Db().queryone(
            """
            select nextval('articulo_id_seq') as id
            """, ()
        )
        return fila["id"]