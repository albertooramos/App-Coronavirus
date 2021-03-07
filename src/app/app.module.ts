import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAlumnoComponent } from './create-alumno/create-alumno.component';
import { AlumnoDetailsComponent } from './alumno-details/alumno-details.component';
import { AlumnoListComponent } from './alumno-list/alumno-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateAlumnoComponent } from './update-alumno/update-alumno.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateAlumnoComponent,
    AlumnoDetailsComponent,
    AlumnoListComponent,
    UpdateAlumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
