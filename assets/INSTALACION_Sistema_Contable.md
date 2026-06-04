# Instalacion del Sistema Contable

## 1. Subir la hoja a Drive

1. Sube `Sistema_Contable.xlsx` a Google Drive.
2. Abre el archivo en Drive.
3. Usa `Archivo > Guardar como Hojas de calculo de Google` si Drive lo abre como Excel.
4. Confirma que existan estas pestanas: `Dashboard`, `Movimientos`, `Facturas`, `Clientes`, `Proveedores`, `Categorias`, `Configuracion`.

## 2. Agregar Apps Script

1. En la hoja de Google, abre `Extensiones > Apps Script`.
2. Crea o reemplaza estos archivos con el contenido de la carpeta `SistemaContable_AppsScript`:
   - `Code.gs`
   - `Index.html`
   - `Styles.html`
   - `Client.html`
   - `appsscript.json`
3. Guarda el proyecto.
4. Ejecuta una vez la funcion `ensureSetup` y acepta permisos.
5. Recarga la hoja. Debe aparecer el menu `Sistema Contable`.
6. Usa `Sistema Contable > Abrir panel`.

## 3. Publicar como Web App opcional

1. En Apps Script, abre `Implementar > Nueva implementacion`.
2. Tipo: `Aplicacion web`.
3. Ejecutar como: `Yo`.
4. Acceso: elige el nivel que prefieras.
5. Copia la URL final de la Web App.

## Mensaje para WhatsApp

Hola, ya quedo listo el Sistema Contable. Link de la hoja: [PEGAR_LINK_DE_GOOGLE_SHEETS]. Link del panel Apps Script/Web App: [PEGAR_LINK_DE_APPS_SCRIPT_SI_SE_PUBLICA].
