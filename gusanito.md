# everis-generator

Es la interfaz de línea de comandos utilizada para construir desde aplicaciones grandes hasta estructuras de componentes básicos de Angular.

## Inicio

A continuación se listan los requisitos básicos para iniciar la aplicación de manera local desde tu terminal:

### Pre-requisitos

Instale las siguientes aplicaciones. Si ya cuenta con ellas, continúe con el siguiente paso.

```
Node.js 6 o superior.
npm 3 o superior
Git
```

### Instalación de Herramientas de Yeoman.

Instale Yeoman utilizando npm.

```
npm install --global yo
yo --version
```

## Instalación

### NPM Proxy
```bash
npm i -g @ecnf/generator-cli@latest
```
### Usando el repositorio GIT

Para comenzar con la instalación:

```
git clone https://gitlab.com/xxxxx/xxxxx.git
```

Luego, ingresar a la carpeta 'generator' y colocar el siguiente comando:
```
    npm run install-link
```

### Comandos

Para comenzar con la instalación:


Comando             | Acción| Parámetros
------------------- |----------|-------------------
yo @ecnf/cli:app          | Inicia el generador de aplicación. Antes de ser ejecutado, posicionarse en la carpeta que contendrá la aplicación generada. | language  es \|en
yo @ecnf/cli:flow         | Inicia el CLI para generar un business. Genera un componente del modelo de negocios. | language  es \|en
yo @ecnf/cli:server start | Inicia Mock Server (necesita la carpeta mock-db)|**port** este parámetro sirve para indicar el puerto donde se va a levantar el servidor de mock (ej.port=8080) |
yo @ecnf/cli:api | Genera servicios de peticiones HTTP y el archivo de mock necesario para el mismo| **endpoint:** este parámetro recibe el path del api a consumir (requerido). **workflow:** este parámetro recibe el nombre del flujo o modulo de negocio donde se quiere generar el servicio (opcional).**name:** este parámetro recibe el nombre que se le quiere poner al archivo y clase encargada de consumir el servicio (opcional)
| yo @ecnf/cli:views | El siguiente comando es el encargado de generar las vistas o páginas que componen los módulos o unidades de negocio, este comando genera vistas de acuerdo a los estándares de desarrollo y modelado de interfaces y formularios | **name:** este parámetro recibe el nombre de la página o vista a generar. **workflow:** Este parámetro recibe el nombre del módulo donde se desea generar la vista o página. |



## Autores

Everis
