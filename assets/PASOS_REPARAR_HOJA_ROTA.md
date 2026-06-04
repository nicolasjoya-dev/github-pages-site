# Pasos para reparar la hoja que quedo a medias

La captura muestra que las pestanas existen, pero `Movimientos` no tiene encabezados ni formato. Tambien aparecen `#ERROR!` en columnas de formulas.

Eso pasa si se ejecuto el panel o `addMovement` antes de ejecutar la estructura completa. En tu caso tambien puede pasar porque Google Sheets esta en espanol/Colombia y las formulas anteriores estaban en sintaxis inglesa.

## Reparacion

1. En Apps Script, reemplaza completo el archivo `Code.gs` por el nuevo:
   `outputs/SistemaContable_AppsScript/Code.gs`
2. Guarda el proyecto.
3. En el selector de funciones, elige:
   `repararSistemaContable`
4. Dale `Ejecutar`.
5. Acepta permisos si los pide.
6. Vuelve a la hoja y recarga la pagina.

La funcion `repararSistemaContable` limpia las hojas creadas a medias y reconstruye:

- `Dashboard`
- `Movimientos`
- `Facturas`
- `Clientes`
- `Proveedores`
- `Categorias`
- `Configuracion`

Tambien vuelve a poner encabezados, formulas en espanol, listas desplegables, formatos y graficos.

Importante: la reparacion limpia la hoja para reconstruirla. Si tienes un dato escrito a mano como el de la captura, anotalo antes y vuelvelo a registrar despues desde el panel o desde `Movimientos`.

## Si quieres empezar sin datos de ejemplo

Despues de reparar, borra solo las filas de ejemplo desde:

- `Movimientos!A6:J13`
- `Facturas!A6:F9`

No borres las columnas de formulas `K:M` en Movimientos ni `G:K` en Facturas.
