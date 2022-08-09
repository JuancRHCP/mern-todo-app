# mern-todo-app
Simple to-do app built using the MERN stack

Voy a mencionar los pasos mas importantes.

## Crear la estructura default
Escribimos `npm init` en la consola para inicializar nuestro proyecto. Esto creará el archivo `package.json`.

### Herramientas adicionales que instalamos
`npm install --global nodemon`: librería para resetear nuestro server cuando hagamos algun cambio. La instalamos de manera global para que la podamos usar con todos nuestros proyectos de node y no quede solo en este repo.

`npm i moment`: lib para el manejo de fechas. Al hacer esto vemos que se agrega la dependencia y la versión candidata en el `package.json`. También se crea el `package-lock.json` que contiene la versión que efectivamente se instaló.

