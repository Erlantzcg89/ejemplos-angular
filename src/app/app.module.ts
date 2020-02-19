import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';

//Nuestro Modulo para Routing
import { AppRouter } from './app.route';

//Guards
import { AuthGuard } from './guards/auth.guard';

//Services
import { CochesService } from './providers/coches.service';
import { RecetasService } from './providers/recetas.service';
import { HeroService } from './providers/hero.service';
import { TodosService } from './providers/todos.service';
import { CasaService } from './providers/casa.service';

//Pipes
import { RoundPipe } from './pipes/round.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterRecetas } from './pipes/filter-recetas.pipe';
import { FilterCasa } from './pipes/filter-casa';

//Componentes
import { AppComponent } from './app.component';
import { RecetaComponent } from './receta/receta.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { Page404Component } from './page404/page404.component';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ConcesionarioComponent } from './concesionario/concesionario.component';
import { CocheComponent } from './concesionario/coche/coche.component';
import { ListadoComponent } from './concesionario/listado/listado.component';
import { RecetarioComponent } from './recetario/recetario.component';
import { DetalleComponent } from './recetario/detalle/detalle.component';
import { FormularioComponent } from './recetario/formulario/formulario.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { FormComponent } from './concesionario/form/form.component';
import { PlantillaComponent } from './plantilla/plantilla.component';
import { TodosComponent } from './todos/todos.component';
import { FormBasicoComponent } from './form-basico/form-basico.component';
import { InmobiliariaComponent } from './inmobiliaria/inmobiliaria.component';
import { CasaDetalleComponent } from './inmobiliaria/casa-detalle/casa-detalle.component';
import { BackofficeComponent } from './backoffice/backoffice.component';
import { SaludarComponent } from './saludar/saludar.component';







@NgModule({
  declarations: [    
    AppComponent,   
    RecetaComponent,
    PropiedadesComponent,
    Page404Component,
    HomeComponent,
    UsuarioComponent,
    ConcesionarioComponent,
    CocheComponent,
    ListadoComponent,    
    RecetarioComponent,
    DetalleComponent,
    FormularioComponent,
    ReactiveFormsComponent,
    FormComponent,
    PlantillaComponent,
    TodosComponent,
    FormBasicoComponent,
    InmobiliariaComponent,
    CasaDetalleComponent,
    BackofficeComponent,
    SaludarComponent,

    RoundPipe,    
    FilterPipe,
    FilterRecetas,
    FilterCasa    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouter,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [    
    HttpClientModule,    
    CochesService,
    RecetasService,
    HeroService,
    TodosService,
    CasaService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
