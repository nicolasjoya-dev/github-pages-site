# Sistema Contable - GitHub Pages

Pagina estatica para publicar el paquete del Sistema Contable en GitHub Pages.

## Contenido

- `index.html`: pagina publica.
- `styles.css`: diseno responsive.
- `script.js`: boton de WhatsApp y copiado de mensaje.
- `assets/Sistema_Contable.xlsx`: hoja contable.
- `assets/Sistema_Contable_Entrega.zip`: paquete completo con Apps Script.
- `assets/INSTALACION_Sistema_Contable.md`: guia de instalacion.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub, por ejemplo `sistema-contable`.
2. Sube todos los archivos de esta carpeta.
3. En GitHub abre `Settings > Pages`.
4. En `Build and deployment`, selecciona:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Guarda y espera el link publico.

## Comandos si ya tienes repo remoto

```powershell
git init
git add .
git commit -m "Publicar sistema contable"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/sistema-contable.git
git push -u origin main
```
