# Layout Manager
El layout manager te permite gestionar múltiples plantillas y el contenido de estas de manera rápida y sencilla dentro de las aplicaciones Angular.

## Como usar

* Paso 1: Crear el/los componentes layout:

```javascript
@Component({
    selector: 'app-layout1',
    template: `
      <div class="header" ><h4>Aqui va el header del layout</h4></div>
      <main>
        <router-outlet></router-outlet>
      </main>
    `,
  })
  export class AppLayout1Component {}

```
* Paso 2: Configura el modulo EveLayouManager

```javascript
import { EveLayouManager } from '@tsf-plus/ng-commons/layout';

export const LayoutConfig = {
  layouts: [
    { name: 'layout1', component: AppLayout1Component, default: true },
  ],
};
@NgModule({
  ..
  imports: [
    EveLayouManager.forRoot(LayoutConfig);
  ]
  ..
})
export AppModule {}
```
* Paso 3: Utiliza el componente EveLayout Component que se encarga de mostar los layout:

  - Desde el html (Template AppComponent)
  ```html
    <eve-layout></eve-layout>
  ```

  - Desde las rutas
  ```javascript
    import { Routes } from '@angular/router';
    import { EveLayouManager, EveLayoutComponent } from '@tsf-plus/ng-commons/layout';

    export const appRoutes: Routes = [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: '', component: EveLayoutComponent,
        children: [
                { path: 'home', component: HomeComponent },
            ]
        },
        { path: '**', redirectTo: '' }
    ];

    export const LayoutConfig = {
        layouts: [
            { name: 'layout1', component: AppLayout1Component, default: true },
        ],
    };

    @NgModule({
        ..
        imports: [
            RouterModule.forRoot(appRoutes, { useHash: true }),
            EveLayouManager.forRoot(LayoutConfig);
        ]
        ..
    })
    export AppModule {}
    ```

### Reglas de Configuración

| Regla  | Descripción | Requerido |
|--------|-------------| ----------|
| menu   | Recibe un arreglo (**IMenuLayout**), que contiene toda la información del menu | false |
| company | Recibe un arreglo (**ICompanyLayout**), que contiene toda la información de la empresa |false|
| singOutAction | Recibe un provider que debe extender de SingOut; esta clase es la que se encarga de hacer la acción de logout en la aplicación | false |
| layouts | recibe un areglo (**ILayoutsComponent**), que contiene la definición de los layouts que están disponibles para visualizarse en la aplicación | true |

### Providers

 - **LayoutController**: Esta clase injectable o provedora de angular, facilita el manejo de las características de los layouts como lo son: el menu, los datos de la empresa y el cambio en tiempo de ejecución de los layout de la aplicación. A continuación, una breve descripción de sus atributos públicos:

 | Nombre | descripción | Retorna |
 |--------|-------------|---------|
 |  menu  | este atributo contiene la entidad que se encarga de gestionar la información de cada uno de los items del menu | MenuLayout|
 | company| este atributo contiene la entidad que se encarga de gestionar la información de la empresa (nombre, logo, etc.) | CompanyLayout|
 | layout | este atributo contiene la entidad que se encarga de gestionar los layouts | Layout|
