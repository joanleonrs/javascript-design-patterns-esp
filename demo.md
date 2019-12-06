# Auth Module

El Auth module es un solución que permite a los desarrolladores de aplicaciones angulares manejar una interfaz única de autenticación y autorización. Este soporta diversos tipos de integración como OAuth2 (todos los tipos de autorización), Azure, Amazon, Altemista, entre otros.

Actualmente contamos con las siguientes integraciones:

1. OAuth2
> * GranType Password


## Pre-requisitos
Para poder utilizar o extender la librería es necesario tener instaladas las siguientes herramientas:
* Node 10+
* Angular 6+


## Dependencias
Este proyecto tiene una dependencia directa con el ECNF Core


## Instalación
```bash
$ cd path-to-project;
$ npm install @ecnf/ng-commons;
```


# Como Usar

* Configurar el Auth Module (app.config.ts)

````javascript
import { AuthModule, EAuthorizationType, IAuthConfig, IOAuth2Config, EGrantType } from '@ecnf/ng-commons/auth';

let authType: EAuthorizationType;
authType = EAuthorizationType.OAUTH2;

let oAuth2Config: IOAuth2Config;
oAuth2Config = {
  grantType: EGrantType.PASSWORD,
  authUrl: `${environment.API_URL}/login`,
  secretKey: 'YOUR_KEY',
  client_id: environment.AUTH_CONFIG.CLIENT_ID,
  client_secret: environment.AUTH_CONFIG.CLIENT_SECRET,
  interceptor: true
};

let authConfig: IAuthConfig;
authConfig = {
  authType: authType,
  config: oAuth2Config
};

export const Modules = [];
Modules.push(AuthModule.forRoot(authConfig));
````

* Importar en el App Module (app.module.ts)

````javascript
import { Modules } from './app.config';

@NgModule({
  ...
  imports: [
    ...Modules,
  ],
  ...
})
export class AppModule { }
````

* Usar en el Login Component (login.component.ts)

````javascript
import { Authentication } from '@ecnf/ng-commons/auth';

...
  constructor (
    private auth: Authentication,
    ...
  ) { }

  signIn () {
    this.auth.authenticate({ username, password })
    .then(response => {
      ...
    });
  }
...
````


## Api References

* Métodos

| Nombre | Descripción |
|--------|-------------|
| authenticate() | Ejecuta la llamada de autenticación hacia el servidor de autorización |
| getToken() | Retorna el token de autorización para ser utilizado en las cabeceras http |
| isAuthenticated() | Retorna verdadero si existe una sesión de autenticación |
| isExpired() | Retorna verdadero si el tiempo de la sesión de autenticación ya ha expirado |
| clean() | Limpia la sesión de autenticación |

### Reglas de Configuración

* Configuración base opcional

| Atributo | Descripción | Tipo (Valor) |
|----------|-------------|--------------|
| secretKey | Llave secreta utilizada en el encriptamiento de datos al almacenarlos | STRING (obligatorio) |
| headerName | Nombre de la cabecera para enviar el access token en el interceptor de autorización | STRING (Authorization) |
| tokenType | Tipo de token a enviar en el interceptor de autorización | STRING (Bearer) |
| storageType | Tipo de almacenamiento a utilizar proveniente del Storage Module | ENUM EStorageType (LocalStorage) |
| responseModel | Datos de respuesta personalizados dependiendo del tipo de autenticación | TYPE IPasswordGrantModel. (RFC values) |
| i18nLang | Idioma a utilizar en los mensajes de respuesta | STRING (es) |
| interceptor | Si es verdadero, crea un http interceptor para enviar el access token en la cabecera | BOOLEAN (false) |

* Configuración para Autenticación OAuth2

| Atributo | Descripción | Tipo (Valor) |
|----------|-------------|--------------|
| grantType | Tipo de flujo a utilizar | ENUM EGrantType (obligatorio) |
| authUrl | Dirección url del servicio de autenticación | STRING (obligatorio) |
| client_id | Identificador del cliente del servidor de autorización | STRING (opcional) |
| client_secret | Clave secreta proporcionada por el servidor de autorización | STRING (opcional) |
| requestType | Tipo de petición enviada al servidor | ENUM EResponseType (Form URL Encoded) |
| responseType | Tipo de respuesta enviada del servidor | ENUM EResponseType (JSON) |

Mayor detalle en [EV-CORE - Auth Manager](https://steps.everis.com/git/EVEFRONT/ev-core/blob/develop/src/auth/README.md)

### Caso Práctico

````javascript
...
let authConfig: IOAuth2Config;
authConfig = {
 grantType: EGrantType.PASSWORD,
 authUrl: 'http://localhost:3000/login',
 secretKey: 'YOUR_KEY',
 client_id: 'application',
 client_secret: 'secret',
 responseModel: {
   access_token: 'accessToken',
   token_type: 'tokenType',
   expires_in: 'accessTokenExpiresAt',
   refresh_token: 'refreshToken'
 },
 i18nLang: 'en_US',
 interceptor: true
};
...
````


## Referencia
Para la construcción de este modulo se tomo de referencia las siguientes fuentes web:
* [Official Site](https://oauth.net/2/)
* [IETF RFC 6749](https://tools.ietf.org/html/rfc6749)


## Autores

* **Jefferson Lara** - *Initial work* - [jlaramol@everis.com](jlaramol@everis.com)
* **Ricardo García** - *Initial work* - [rgarrodr@everis.com](rgarrodr@everis.com)
* **Jose Leon** - *Initial work* - [jleonram@everis.com](jleonram@everis.com)

Vea también la lista de [contributors]() que participaron en este proyecto.


## Licencia
Este proyecto es propiedad intelectual de EVERIS. El uso sin autorización está prohibido. Revise el archivo [LICENSE.md]() para mayor detalles.
