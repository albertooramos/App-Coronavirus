import { AlumnoDetailsComponent } from './alumno-details/alumno-details.component';
import { CreateAlumnoComponent } from './create-alumno/create-alumno.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnoListComponent } from './alumno-list/alumno-list.component';
import { UpdateAlumnoComponent } from './update-alumno/update-alumno.component';

const routes: Routes = [
  { path: '', redirectTo: 'alumno', pathMatch: 'full' },
  { path: 'alumnos', component: AlumnoListComponent },
  { path: 'add', component: CreateAlumnoComponent },
  { path: 'update/:id', component: UpdateAlumnoComponent },
  { path: 'details/:id', component: AlumnoDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
