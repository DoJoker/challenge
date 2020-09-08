# Servicio de Notas
Se permite administrar notas con las siguientes acciones:
  - Crear nota.
  - Ver lista de notas (guardadas y archivadas).
  - Eliminar una nota guardada o archivada.

# ¿Cómo funciona?
  - Todas las notas se almacenan en localStorage en un solo item llamado 'notes'
  - Al guardar un registro se convierte en una linea de texto con el layout: 'TITLE'|'BODY'|'DATE(ms)'|'FOLDER'
  - Se puede exportar esta informaciòn como un 'backup' en un archivo 'notes.txt'

# Validaciones:
    - No se aceptan correos electrónicos en titulo
    - No se aceptan | y saltos de linea en body.

### Instalación
Instalar dependencias y correr en dev

```sh
$ cd chalenge
$ npm install -d
$ npm run dev
```