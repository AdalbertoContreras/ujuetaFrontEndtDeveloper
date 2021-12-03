import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MenuFullWidthComponent} from "./component/menu-full-width/menu-full-width.component";
import { ContenedorUnoComponent } from './component/contenedor-uno/contenedor-uno.component';
import { ContenedorDosComponent } from './component/contenedor-dos/contenedor-dos.component';
import { ContenedorTresComponent } from './component/contenedor-tres/contenedor-tres.component';
import { ContenedorCuatroComponent } from './component/contenedor-cuatro/contenedor-cuatro.component';
import { ContenedorCincoComponent } from './component/contenedor-cinco/contenedor-cinco.component';
import { ContenedorSeisComponent } from './component/contenedor-seis/contenedor-seis.component';
import { ContenedorSieteComponent } from './component/contenedor-siete/contenedor-siete.component';
import { ContenedorOchoComponent } from './component/contenedor-ocho/contenedor-ocho.component';
import { FooterComponent } from './component/footer/footer.component';
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    MenuFullWidthComponent,
    ContenedorUnoComponent,
    ContenedorDosComponent,
    ContenedorTresComponent,
    ContenedorCuatroComponent,
    ContenedorCincoComponent,
    ContenedorSeisComponent,
    ContenedorSieteComponent,
    ContenedorOchoComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
