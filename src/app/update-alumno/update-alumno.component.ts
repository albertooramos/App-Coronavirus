import { Component, OnInit } from '@angular/core';
import { Alumno } from '../alumno';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnoService } from '../alumno.service';

@Component({
  selector: 'app-update-alumno',
  templateUrl: './update-alumno.component.html',
  styleUrls: ['./update-alumno.component.css']
})
export class UpdateAlumnoComponent implements OnInit {

  id: number;
  alumno: Alumno;

  constructor(private route: ActivatedRoute,private router: Router,
    private alumnoService: AlumnoService) { }

  ngOnInit() {
    this.alumno = new Alumno();

    this.id = this.route.snapshot.params['id'];
    
    this.alumnoService.getAlumno(this.id)
      .subscribe(data => {
        console.log(data)
        this.alumno = data;
      }, error => console.log(error));
  }

  updateAlumno() {
    this.alumnoService.updateAlumno(this.id, this.alumno)
      .subscribe(data => {
        console.log(data);
        this.alumno = new Alumno();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateAlumno();    
  }

  gotoList() {
    this.router.navigate(['/alumnos']);
  }
}
