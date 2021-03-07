import { AlumnoDetailsComponent } from './../alumno-details/alumno-details.component';
import { Observable } from "rxjs";
import { AlumnoService } from "./../alumno.service";
import { Alumno } from "./../alumno";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-alumno-list",
  templateUrl: "./alumno-list.component.html",
  styleUrls: ["./alumno-list.component.css"]
})
export class AlumnoListComponent implements OnInit {
  alumnos: Observable<Alumno[]>;

  constructor(private alumnoService: AlumnoService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.alumnos = this.alumnoService.getAlumnosList();
  }

  deleteAlumno(id: number) {
    this.alumnoService.deleteAlumno(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  alumnoDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateAlumno(id: number){
    this.router.navigate(['update', id]);
  }
}
