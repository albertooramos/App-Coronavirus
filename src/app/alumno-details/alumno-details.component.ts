import { Alumno } from '../alumno';
import { Component, OnInit, Input } from '@angular/core';
import { AlumnoService } from '../alumno.service';
import { AlumnoListComponent } from '../alumno-list/alumno-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alumno-details',
  templateUrl: './alumno-details.component.html',
  styleUrls: ['./alumno-details.component.css']
})
export class AlumnoDetailsComponent implements OnInit {

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

  list(){
    this.router.navigate(['alumnos']);
  }
}
