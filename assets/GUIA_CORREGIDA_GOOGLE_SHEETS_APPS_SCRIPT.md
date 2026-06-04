# Guia corregida para Google Sheets + Apps Script

## Por que no te deja poner Apps Script

Si subiste `Sistema_Contable.xlsx` a Drive y lo abriste directamente, Google puede dejarlo en modo Excel/Office. Aunque se vea en una URL de Google Sheets, ese archivo no siempre permite `Extensiones > Apps Script`.

La solucion correcta es usar una hoja **Google Sheets nativa**, no un `.xlsx` en modo Office.

## Opcion A: convertir tu archivo actual

Tu enlace:

`https://docs.google.com/spreadsheets/d/10hEGcnQb4IcGjc_voCu4ktnaJdUheHWbVfP5imwUZP0/edit`

1. Abre ese archivo.
2. Ve a `Archivo > Guardar como Hojas de calculo de Google`.
3. Google creara una copia nativa.
4. Abre la copia nueva.
5. Ahora debe aparecer `Extensiones > Apps Script`.
6. Pega estos archivos desde `outputs/SistemaContable_AppsScript`:
   - `Code.gs`
   - `Index.html`
   - `Styles.html`
   - `Client.html`
   - `appsscript.json`
7. En Apps Script ejecuta `setupSistemaContable`.
   Si la hoja ya quedo creada a medias, ejecuta mejor `repararSistemaContable`.
8. Acepta permisos.
9. Recarga la hoja.
10. Usa el menu `Sistema Contable > Abrir panel`.

## Opcion B: crear una hoja nativa desde Apps Script

Usa esta opcion si el archivo actual definitivamente no deja abrir Apps Script.

1. Entra a `https://script.google.com`.
2. Crea un proyecto nuevo.
3. Pega los archivos de `outputs/SistemaContable_AppsScript`.
4. Ejecuta la funcion:

```js
createNativeSistemaContable()
```

5. La ejecucion devuelve una URL de una hoja Google Sheets nativa nueva.
6. Esa hoja ya queda armada con Dashboard, Movimientos, Facturas, Clientes, Proveedores, Categorias y Configuracion.

Nota: si usas el script independiente, el panel funciona mejor desplegandolo como Web App desde Apps Script.

## Opcion C: usar tu ID como objetivo

El `Code.gs` corregido incluye:

```js
const TARGET_SPREADSHEET_ID = "10hEGcnQb4IcGjc_voCu4ktnaJdUheHWbVfP5imwUZP0";
```

Eso permite que un Apps Script independiente intente trabajar sobre esa hoja. Si esa hoja sigue siendo un Excel en modo Office, debes convertirla primero a Google Sheets nativo.

## Funcion principal corregida

La funcion clave para crear desde cero es:

```js
setupSistemaContable()
```

Esa funcion crea o reconstruye toda la estructura desde cero dentro de una hoja Google Sheets nativa. Ya no depende de que el Excel importado conserve bien tablas, filtros o formatos.

Si ya ves pestanas creadas pero estan vacias, sin encabezados o con `#ERROR!`, usa esta:

```js
repararSistemaContable()
```

Esta version tambien deja las formulas en espanol para Google Sheets configurado en Colombia.
