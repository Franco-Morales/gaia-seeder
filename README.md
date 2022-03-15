<div align="center" id="top">
   <img src="./public/logo.png" alt="gaia_seeder_logo" width="200" />

   # Gaia Seeder

   [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE.txt)
   ![Version](https://img.shields.io/badge/Version-alpha%200.0.1-yellowgreen)

</div>


<!-- Index -->
<details>
    <sumary>Índice de contenido</sumary>
    <ol>
        <li>
            <a href="#proyecto">Proyecto</a>
        </li>
        <li>
            <a href="#requisitos">Requisitos</a>
        </li>
        <li>
            <a href="#instalacion">Instalación</a>
        </li>
        <li>
            <a href="#cli">CLI</a>
        </li>
        <li>
            <a href="#json">JSON</a>
        </li>
        <li>
            <a href="#creditos">Creditos</a>
        </li>
    </ol>
</details>


<!-- Acerca del proyecto -->

## Proyecto
"GAIA" es un proyecto personal para generar datos de prueba en formato JSON de manera fácil y aleatoria utilizando la librería `@faker-js/faker`.
Mediante un archivo inicial del tipo .json que marcará toda la estructura de los documentos en el archivo .json de salida. 

No se recomienda el uso en entornos de desarrollo y/o producción solo para pruebas simples.


<!-- Requisitos -->
## Requisitos
Los requisitos para usar el proyecto son: 

* Node


<!-- Instalacion -->
## Instalacion
* Clonar o descargar proyecto.
* Abrir una consola dentro del proyecto y descargar las dependencias del proyecto con el comando
```npm
npm install
```


<!-- cli -->
## CLI 
Lista de comandos disponibles :

*  `terraform` :
Inicia el proceso de 'seeding'. Argumentos del comando : 
    * json_path_file : Obligatorio, ruta del archivo .json con la estructura a generar.
    * fileName : Opcional, nombre del archivo que guardará los datos creados, valor por defecto `mockdata`.
    * options : Opcional, 
        * `--time` o `-t`, muestra el tiempo de ejecución del comando.

Ejemplo

```cmd
node bin/cli terraform ruta/directorio/test.json mockdataTest -t
```

<!-- Formato json-->
## JSON

El formato del archivo `.json` sugerido es el siguiente : 

Modelo de ejemplo : 

```json
[
    {
        "type": {
            "username": "internet.userName",
            "avatar": "internet.avatar",
            "email":"internet.email"
        },
        "collection": "users", 
        "quantity": 5
    }
]
```

* type : representa cada propiedad del objeto, donde el value ("categoria.subcategoria") son nombres de funciones propias de `@faker-js/faker`.
* collection : representa el nombre de la colección.
* quantity : representa la cantidad de elementos de esa colección.


<!-- Creditos -->
## Creditos
* [ @faker-js/faker ](https://github.com/faker-js/faker)
* [ Best README Template ](https://github.com/othneildrew/Best-README-Template)
* <a href="https://www.flaticon.com/free-icons/wheat" title="wheat icons">Wheat icons created by Freepik - Flaticon</a>

<p align="right">(<a href="#top">volver a arriba</a>)</p>