import { AlumnoService } from '../alumno.service';
import { Alumno } from '../alumno';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-alumno',
  templateUrl: './create-alumno.component.html',
  styleUrls: ['./create-alumno.component.css']
})
export class CreateAlumnoComponent implements OnInit {

  alumno: Alumno = new Alumno();
  submitted = false;

  constructor(private alumnoService: AlumnoService,
    private router: Router) { }

  ngOnInit() {
  }

  newAlumno(): void {
    this.submitted = false;
    this.alumno = new Alumno();
  }

  save() {
    this.alumnoService
    .createAlumno(this.alumno).subscribe(data => {
      console.log(data)
      this.alumno = new Alumno();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/alumnos']);
  }
}
